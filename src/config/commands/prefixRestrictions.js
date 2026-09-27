/**
 * Prefix komut kısıtlamaları — Yönetim panelleri ve gelişmiş kurulumlar.
 */

/** Ön ekle (!) kesinlikle çağrılamayacak ana komutlar. */
// 'help' ve 'apply' komutlarını buradan çıkardık, artık !yardım ve !başvuru çalışabilir.
export const SLASH_ONLY_COMMANDS = new Set([
  'configwizard',
  'embedbuilder',
  'wipedata',
]);

/** Bütün komutlarda ön ekle (!) kullanılması engellenen alt komutlar. */
export const GLOBAL_BLOCKED_SUBCOMMANDS = new Set([
  'dashboard',
  'setup',
]);

/** Bütün komutlarda ön ekle (!) kullanılması engellenen alt komut grupları. */
export const GLOBAL_BLOCKED_SUBCOMMAND_GROUPS = new Set([
  'config',
]);

/** Özel olarak eğik çizgiye (/) zorunlu tutulan komut bazlı alt komutlar. */
export const COMMAND_BLOCKED_SUBCOMMANDS = {
  music: new Set([
    'shuffle',
    'loop',
    'seek',
    'remove',
    'move',
    'clear',
    '247',
  ]),
  birthday: new Set(['setchannel']),
  report: new Set(['setchannel']),
};

function collectSubcommandNames(commandJson) {
  const subcommandGroup = commandJson.options?.find((opt) => opt.type === 2);

  if (subcommandGroup) {
    const names = [];
    for (const group of subcommandGroup.options || []) {
      names.push(...(group.options?.map((opt) => opt.name) || []));
    }
    return names;
  }

  return (commandJson.options?.filter((opt) => opt.type === 1) || []).map((sub) => sub.name);
}

function isSubcommandBlocked(commandName, subcommandName) {
  if (!subcommandName) {
    return false;
  }

  if (GLOBAL_BLOCKED_SUBCOMMANDS.has(subcommandName)) {
    return true;
  }

  const commandBlocked = COMMAND_BLOCKED_SUBCOMMANDS[commandName];
  return commandBlocked?.has(subcommandName) ?? false;
}

/**
 * Ön ekli komutun reddedilip edilmeyeceğini kontrol eder.
 * @param {object} command - Yüklenen komut modülü
 * @param {string[]} args - İşlenen ön ek parametreleri
 * @param {(name: string) => string} resolveSubcommandAlias
 * @returns {{ blocked: boolean, reason?: string }}
 */
export function getPrefixRestriction(command, args, resolveSubcommandAlias) {
  if (!command?.data?.toJSON) {
    return { blocked: false };
  }

  const commandJson = command.data.toJSON();
  const commandName = commandJson.name?.toLowerCase();

  if (command.prefixOnly === false || command.slashOnly === true) {
    return { blocked: true, reason: 'Bu komut sadece eğik çizgi (/) ile kullanılabilir.' };
  }

  if (SLASH_ONLY_COMMANDS.has(commandName)) {
    return { blocked: true, reason: 'Bu emri vermek için eğik çizgi (/) komutunu kullanmalısınız.' };
  }

  const [firstArg, secondArg] = args.map((arg) => arg?.toLowerCase?.() || null);
  const resolvedFirstArg = firstArg ? resolveSubcommandAlias(firstArg) : null;
  const resolvedSecondArg = secondArg ? resolveSubcommandAlias(secondArg) : null;

  const subcommandGroup = commandJson.options?.find((opt) => opt.type === 2);

  const allSubcommandNames = collectSubcommandNames(commandJson);
  const allSubcommandsBlocked =
    allSubcommandNames.length > 0 &&
    allSubcommandNames.every((name) => isSubcommandBlocked(commandName, name));

  if (allSubcommandsBlocked) {
    return { blocked: true, reason: 'Bu emri vermek için eğik çizgi (/) komutunu kullanmalısınız.' };
  }

  if (firstArg && GLOBAL_BLOCKED_SUBCOMMAND_GROUPS.has(firstArg)) {
    return {
      blocked: true,
      reason: 'Konfigürasyon işlemleri sadece eğik çizgi (/) ile yapılabilir.',
    };
  }

  if (resolvedFirstArg && isSubcommandBlocked(commandName, resolvedFirstArg)) {
    return {
      blocked: true,
      reason: 'Bu alt komut sadece eğik çizgi (/) ile kullanılabilir.',
    };
  }

  if (subcommandGroup && resolvedSecondArg && isSubcommandBlocked(commandName, resolvedSecondArg)) {
    return {
      blocked: true,
      reason: 'Bu alt komut sadece eğik çizgi (/) ile kullanılabilir.',
    };
  }

  return { blocked: false };
}

export function isPrefixRestrictedCommand(command, args, resolveSubcommandAlias) {
  return getPrefixRestriction(command, args, resolveSubcommandAlias).blocked;
}
