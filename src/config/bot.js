import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT DURUMU (BOT PRESENCE)
  // =========================
  presence: {
    status: "online",
    activities: [
      {
        name: "Custom Status",
        state: "Diyarı gözetliyor...", // Botun altında görünecek RP metni
        type: 4,
      },
    ],
  },

  // =========================
  // KOMUT DAVRANIŞLARI
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],
    defaultCooldown: 3, // Komut bekleme süresi (saniye)
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID,
    maintenanceMode: process.env.MAINTENANCE_MODE === "true",
    prefix: process.env.PREFIX || "!", // Komut ön eki (Örn: !zar, !savaş)
  },

  // =========================
  // KARAKTER / ÜLKE KAYIT SİSTEMİ
  // =========================
  applications: {
    // RP Sunucusu Karakter/Ülke Başvuru Soruları
    defaultQuestions: [
      { question: "Hane / Ülke Adınız Nedir?", required: true },
      { question: "Yönetici (Karakter) İsminiz ve Unvanınız?", required: true },
      { question: "Bölge / Yerleşke Tercihiniz ve Kısa Hikayeniz?", required: true },
    ],

    statusColors: {
      pending: "#FFA500",  // İncelemede (Turuncu)
      approved: "#00FF00", // Onaylandı (Yeşil)
      denied: "#FF0000",   // Reddedildi (Kırmızı)
    },

    applicationCooldown: 24, // Yeniden başvuru bekleme süresi (saat)
    deleteDeniedAfter: 7,
    deleteApprovedAfter: 30,
    managerRoles: [],
  },

  // =========================
  // EMBED RENKLERİ VE TEMA
  // =========================
  embeds: {
    colors: {
      primary: "#336699",
      secondary: "#2F3136",

      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#3498DB",

      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },
      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },
      economy: "#F1C40F", // Hazine / Altın rengi
      birthday: "#E91E63",
      moderation: "#9B59B6",

      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },
    footer: {
      text: "Strateji & RP Botu", // Botun mesajlarının altındaki imza
      icon: null,
    },
    thumbnail: null,
    author: {
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // EKONOMİ VE HAZİNE SİSTEMİ
  // =========================
  economy: {
    currency: {
      name: "Altın",
      namePlural: "Altın",
      symbol: "🪙", // Para simgesi
    },

    startingBalance: 1000, // Yeni hanelerin / ülkelerin başlangıç hazinesi
    baseBankCapacity: 1000000, // Maksimum hazine kapasitesi

    dailyAmount: 200, // Günlük gelir / vergi toplama
    workMin: 50,      // Günlük üretim/ücret alt sınırı
    workMax: 250,     // Günlük üretim/ücret üst sınırı

    begMin: 10,
    begMax: 50,

    cooldowns: {
      daily: 24 * 60 * 60 * 1000, // Günlük gelir bekleme süresi (24 saat)
      work: 60 * 60 * 1000,       // Çalışma/Üretim (1 saat)
      crime: 2 * 60 * 60 * 1000,  // Yağma/Baskın (2 saat)
      rob: 4 * 60 * 60 * 1000,    // Hazine soygunu (4 saat)
    },

    robSuccessRate: 0.35, // Yağma / Soygun başarı oranı (%35)
    robFailJailTime: 3600000, // Başarısız yağma cezası (1 saat)
  },

  shop: {},

  // =========================
  // DESTEK / DİLEKÇE (TICKET) SİSTEMİ
  // =========================
  tickets: {
    defaultCategory: null,
    supportRoles: [],
    priorities: {
      none: { emoji: "⚪", color: "#95A5A6", label: "Yok" },
      low: { emoji: "🟢", color: "#2ECC71", label: "Düşük Öncelik" },
      medium: { emoji: "🟡", color: "#F1C40F", label: "Orta Öncelik" },
      high: { emoji: "🔴", color: "#E74C3C", label: "Yüksek Öncelik" },
      urgent: { emoji: "🚨", color: "#E91E63", label: "Acil / Kritik" },
    },
    defaultPriority: "none",
    archiveCategory: null,
    logChannel: null,
  },

  // =========================
  // ÇEKİLİŞ / ETKİNLİK AYARLARI
  // =========================
  giveaways: {
    defaultDuration: 86400000,
    minimumWinners: 1,
    maximumWinners: 10,
    minimumDuration: 300000,
    maximumDuration: 2592000000,
    allowedRoles: [],
    bypassRoles: [],
  },

  // =========================
  // DOĞRULAMA / ONAY
  // =========================
  verification: {
    defaultMessage: "Diyara giriş yapmak ve sunucu kanallarına erişim kazanmak için aşağıdaki butona tıklayın!",
    defaultButtonText: "Karakterini Onayla",
    autoVerify: {
      defaultCriteria: "none",
      defaultAccountAgeDays: 7,
      serverSizeThreshold: 1000,
      minAccountAge: 1,
      maxAccountAge: 365,
      sendDMNotification: true,
      criteria: {
        account_age: "Hesap belirli bir günden eski olmalıdır",
        server_size: "Sunucu üye sayısı sınırın altındaysa otomatik onaylar",
        none: "Herkesi anında onaylar",
      },
    },
    verificationCooldown: 5000,
    maxVerificationAttempts: 3,
    attemptWindow: 60000,
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    cooldownCleanupInterval: 300000,
    maxAuditMetadataBytes: 4096,
    maxInMemoryAuditEntries: 1000,
    logAllVerifications: true,
    keepAuditTrail: true,
  },

  // =========================
  // KARŞILAMA VE AYRILMA MESAJLARI
  // =========================
  welcome: {
    defaultWelcomeMessage: "Aramıza hoş geldin {user}! **{server}** diyarına katıldın. Toplam {memberCount} lord/kral bulunduruyoruz!",
    defaultGoodbyeMessage: "{user} diyardan ayrıldı. Kalan toplam üye: {memberCount}.",
    defaultWelcomeChannel: null,
    defaultGoodbyeChannel: null,
  },

  // =========================
  // SUNUCU İSTATİSTİK KANALLARI
  // =========================
  counters: {
    defaults: {
      name: "{name} Sayacı",
      description: "{name} sunucu istatistiği",
      type: "voice",
      channelName: "{name}: {count}",
    },
    permissions: {
      deny: ["VIEW_CHANNEL"],
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      created: "✅ Sayaç kanalı oluşturuldu: **{name}**",
      deleted: "🗑️ Sayaç kanalı silindi: **{name}**",
      updated: "🔄 Sayaç kanalı güncellendi: **{name}**",
    },
    types: {
      members: {
        name: "👥 Toplam Nüfus",
        description: "Sunucudaki toplam oyuncu sayısı",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 Botlar",
        description: "Sunucudaki sistem botları",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 Oyuncular",
        description: "Sadece gerçek oyuncu sayısı",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENEL SİSTEM MESAJLARI
  // =========================
  messages: {
    noPermission: "Bu emri vermek için yeterli yetkiye sahip değilsin lordum.",
    cooldownActive: "Yeni bir emir vermeden önce lütfen {time} kadar bekle.",
    errorOccurred: "Bu komut icra edilirken bir hata oluştu.",
    missingPermissions: "Bu eylemi gerçekleştirmek için gerekli izinlere sahip değilim.",
    commandDisabled: "Bu komut konsey tarafından devre dışı bırakıldı.",
    maintenanceMode: "Bot şu anda bakım modundadır.",
  },

  // =========================
  // ÖZELLİK AÇMA / KAPAMA (TOGGLES)
  // =========================
  features: {
    economy: true,      // Ekonomi (Altın/Hazine) sistemi açık
    leveling: true,     // Seviye sistemi açık
    moderation: true,   // Moderasyon açık
    logging: true,
    welcome: true,      // Karşılama açık

    tickets: true,      // Destek dilekçe sistemi açık
    giveaways: true,
    birthday: true,
    counter: true,

    verification: true, // Karakter/Kullanıcı onaylama açık
    reactionRoles: true,
    joinToCreate: true,

    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
    music: true,
  },
};

export function validateConfig(config) {
  const errors = [];

  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Environment variables check:');
    logger.debug('DISCORD_TOKEN exists:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN exists:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID exists:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID exists:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST exists:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token is required (DISCORD_TOKEN or TOKEN environment variable)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("Client ID is required (CLIENT_ID environment variable)");
  }

  if (process.env.NODE_ENV === 'production') {
    const hasConnectionUrl = Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);

    if (!hasConnectionUrl) {
      if (!process.env.POSTGRES_HOST) {
        errors.push("PostgreSQL connection is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_HOST)");
      }
      if (!process.env.POSTGRES_USER) {
        errors.push("PostgreSQL user is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_USER)");
      }
      if (!process.env.POSTGRES_PASSWORD) {
        errors.push("PostgreSQL password is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_PASSWORD)");
      }
    }
  }

  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot configuration errors:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

const COMMAND_CATEGORY_FEATURE_MAP = {
  birthday: "birthday",
  community: "community",
  economy: "economy",
  fun: "fun",
  giveaway: "giveaways",
  jointocreate: "joinToCreate",
  leveling: "leveling",
  logging: "logging",
  moderation: "moderation",
  music: "music",
  reaction_roles: "reactionRoles",
  search: "search",
  serverstats: "counter",
  ticket: "tickets",
  tools: "tools",
  utility: "utility",
  verification: "verification",
  welcome: "welcome",
};

function normalizeCategoryKey(category) {
  return String(category || "").trim().toLowerCase().replace(/\s+/g, "_");
}

export function getCommandPrefix() {
  return botConfig.commands?.prefix ?? "!";
}

export function getBotOwners() {
  return (botConfig.commands?.owners ?? [])
    .map((id) => String(id).trim())
    .filter(Boolean);
}

export function isBotOwner(userId) {
  if (!userId) {
    return false;
  }

  return getBotOwners().includes(String(userId));
}

export function isMaintenanceMode() {
  return botConfig.commands?.maintenanceMode === true;
}

export function getBotMessage(key, replacements = {}) {
  let message = botConfig.messages?.[key] || key;

  for (const [placeholder, value] of Object.entries(replacements)) {
    message = message.replace(new RegExp(`\\{${placeholder}\\}`, "g"), String(value));
  }

  return message;
}

export function isFeatureEnabled(featureKey) {
  if (!featureKey) {
    return true;
  }

  return botConfig.features?.[featureKey] !== false;
}

export function isCommandCategoryEnabled(category) {
  const normalized = normalizeCategoryKey(category);

  if (!normalized || normalized === "core") {
    return true;
  }

  const featureKey = COMMAND_CATEGORY_FEATURE_MAP[normalized];
  if (!featureKey) {
    return true;
  }

  return isFeatureEnabled(featureKey);
}

export function getApplicationStatusColor(status) {
  const colors = botConfig.applications?.statusColors || {};
  const hex = colors[status];
  return hex ? getColor(hex) : getColor(status === "approved" ? "success" : status === "denied" ? "error" : "warning");
}

export function getDefaultApplicationQuestions() {
  return (botConfig.applications?.defaultQuestions || []).map((entry) =>
    typeof entry === "string" ? entry : entry.question,
  ).filter(Boolean);
}

export function getColor(path, fallback = "#99AAB5") {
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );

  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;
