/**
 * Command Aliases Configuration
 * Maps shortened command names to their full command names
 */

export const commandAliases = {
    // =========================
    // EKONOMİ / HAZİNE
    // =========================
    'bakiye': 'balance',
    'hazine': 'balance',
    'para': 'balance',
    'bal': 'balance',
    'money': 'balance',
    'cash': 'balance',

    'yatır': 'deposit',
    'dep': 'deposit',
    'çek': 'withdraw',
    'with': 'withdraw',
    'çalış': 'work',
    'üret': 'work',
    'work': 'work',
    'günlük': 'daily',
    'vergi': 'daily',
    'daily': 'daily',
    'kumar': 'gamble',
    'bahis': 'gamble',
    'bet': 'gamble',
    'yağma': 'rob',
    'soygun': 'rob',
    'rob': 'rob',
    'suç': 'crime',
    'baskın': 'crime',
    'crime': 'crime',
    'gönder': 'pay',
    'aktar': 'pay',
    'pay': 'pay',
    'give': 'pay',
    'send': 'pay',

    // =========================
    // GENEL / BİLGİ
    // =========================
    'ping': 'ping',
    'gecikme': 'ping',
    'yardım': 'help',
    'rehber': 'help',
    'help': 'help',
    'h': 'help',
    'info': 'help',

    // =========================
    // MODERASYON / YÖNETİM
    // =========================
    'ban': 'ban',
    'yasakla': 'ban',
    'kick': 'kick',
    'at': 'kick',
    'sustur': 'timeout',
    'mute': 'timeout',
    'timeout': 'timeout',
    'uyar': 'warn',
    'warn': 'warn',
    'temizle': 'purge',
    'sil': 'purge',
    'clear': 'purge',
    'purge': 'purge',
    'susturmakaldır': 'untimeout',
    'untimeout': 'untimeout',
    'unmute': 'untimeout',

    // =========================
    // SEVİYE / SIRALAMA
    // =========================
    'seviye': 'rank',
    'rütbe': 'rank',
    'rank': 'rank',
    'lvl': 'rank',
    'xp': 'rank',
    'sıralama': 'leaderboard',
    'liderler': 'leaderboard',
    'leaderboard': 'leaderboard',
    'lb': 'leaderboard',
    'top': 'leaderboard',

    // =========================
    // MAĞAZA / ENVANTER
    // =========================
    'mağaza': 'shop',
    'dükkan': 'shop',
    'pazar': 'shop',
    'shop': 'shop',
    'satınal': 'buy',
    'al': 'buy',
    'buy': 'buy',
    'envanter': 'inventory',
    'çanta': 'inventory',
    'mühimmat': 'inventory',
    'inventory': 'inventory',
    'inv': 'inventory',
    'items': 'inventory',

    // =========================
    // KULLANICI / PROFİL
    // =========================
    'kullanıcı': 'userinfo',
    'profil': 'userinfo',
    'user': 'userinfo',
    'avatar': 'avatar',
    'pp': 'avatar',
    'pfp': 'avatar',
    'icon': 'avatar',

    // =========================
    // DOĞUM GÜNÜ
    // =========================
    'doğumgünü': 'birthday',
    'bd': 'birthday',
    'bday': 'birthday',
    'b': 'birthday',

    // =========================
    // ŞANS / ZAR / SAVAŞ
    // =========================
    'yazıtura': 'flip',
    'flip': 'flip',
    'coin': 'flip',
    'zar': 'roll',
    'zarat': 'roll',
    'roll': 'roll',
    'dice': 'roll',
    'savaş': 'fight',
    'düello': 'fight',
    'kavga': 'fight',
    'fight': 'fight',

    // =========================
    // ETKİNLİK / ÇEKİLİŞ
    // =========================
    'çekilişoluştur': 'gcreate',
    'gcreate': 'gcreate',
    'gstart': 'gcreate',
    'çekilişbitir': 'gend',
    'gend': 'gend',
    'gstop': 'gend',
    'gdelete': 'gdelete',
    'çekilişyenile': 'greroll',
    'greroll': 'greroll',
    'groll': 'greroll',

    // =========================
    // DESTEK / DİLEKÇE (TICKET)
    // =========================
    'bilet': 'ticket',
    'destek': 'ticket',
    'dilekçe': 'ticket',
    'ticket': 'ticket',
    't': 'ticket',
    'new': 'ticket',

    // =========================
    // DOĞRULAMA / KAYIT
    // =========================
    'onayla': 'verify',
    'kayıt': 'verify',
    'ver': 'verify',
    'vadmin': 'verification',
    'av': 'autoverify',

    // =========================
    // KARŞILAMA / AYARLAR
    // =========================
    'hoşgeldin': 'welcome',
    'welcome': 'welcome',
    'greet': 'greet',
    'güleğüle': 'goodbye',
    'goodbye': 'goodbye',
    'otorol': 'autorole',
    'autorole': 'autorole',

    // =========================
    // ARAÇLAR / YARDIMCI
    // =========================
    'hesapla': 'calculate',
    'mat': 'calculate',
    'calc': 'calculate',
    'math': 'calculate',
    'hava': 'weather',
    'havadurumu': 'weather',
    'weather': 'weather',
    'yapılacaklar': 'todo',
    'todo': 'todo',
    'bildir': 'report',
    'şikayet': 'report',
    'report': 'report',
    'userinfo': 'userinfo',
    'whois': 'userinfo',
    'ui': 'userinfo',

    // =========================
    // SUNUCU İSTATİSTİK VE REAKSİYON
    // =========================
    'sunucuistatistik': 'serverstats',
    'serverstats': 'serverstats',
    'ss': 'serverstats',
    'sstats': 'serverstats',

    'reaksiyonrol': 'reactroles',
    'rr': 'reactroles',
    'reactionroles': 'reactroles',

    'sesoluştur': 'jointocreate',
    'jtc': 'jointocreate',
    'jointocreate': 'jointocreate',

    // =========================
    // MÜZİK / BİLDİRİM
    // =========================
    'çalınan': 'nowplaying',
    'np': 'nowplaying',
    'now': 'nowplaying',
};

export const subcommandAliases = {
    'l': 'list',
    'liste': 'list',
    'ls': 'list',
    's': 'set',
    'ayarla': 'set',
    'i': 'info',
    'bilgi': 'info',
    'r': 'remove',
    'kaldır': 'remove',
    'rm': 'remove',
    'del': 'remove',
    'n': 'next',
    'sonraki': 'next',
    'sc': 'setchannel',

    'a': 'add',
    'ekle': 'add',
    'c': 'complete',
    'tamamla': 'complete',
    'done': 'complete',
    'd': 'complete',

    'başlat': 'create',
    'start': 'create',
    'durdur': 'end',
    'stop': 'end',
    'yeniden': 'reroll',
    'roll': 'reroll',

    'add': 'add',
    'remove': 'remove',
    'list': 'list',
};

/**
 * Resolve a command alias to its full command name
 * @param {string} commandName - The command name (could be an alias)
 * @returns {string} - The full command name, or the original if not an alias
 */
export function resolveCommandAlias(commandName) {
    const normalized = commandName.toLowerCase();
    return commandAliases[normalized] || commandName;
}

/**
 * Resolve a subcommand alias to its full subcommand name
 * @param {string} subcommandName - The subcommand name (could be an alias)
 * @returns {string} - The full subcommand name, or the original if not an alias
 */
export function resolveSubcommandAlias(subcommandName) {
    const normalized = subcommandName.toLowerCase();
    return subcommandAliases[normalized] || subcommandName;
}
