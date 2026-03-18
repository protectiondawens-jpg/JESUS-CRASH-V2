// ⚡ ULTRA SECURITY SYSTEM v2 by DAWENS-BOY96
// AntiSpam | AntiBug | GhostMode | AntiLink | AntiRaid | Blacklist | Cooldown | Logger

const config = require('../../config');

// ==============================
// 🛡 RATE LIMIT (ANTI-SPAM)
// ==============================
const rateLimit = {};
const LIMIT = 5;       // max 5 commands
const WINDOW = 10000;  // 10 sec

function isFlooding(sender) {
    const now = Date.now();
    if (!rateLimit[sender]) rateLimit[sender] = [];
    
    rateLimit[sender] = rateLimit[sender].filter(ts => now - ts < WINDOW);
    rateLimit[sender].push(now);

    return rateLimit[sender].length > LIMIT;
}

// ==============================
// 🛑 ANTI BUG MESSAGE
// ==============================
function isBugMessage(message) {
    if (!message) return false;

    if (message.length > 4000) return true;

    // Zero-width & invisible chars
    if (/[\u200B-\u200F\u202A-\u202E]/.test(message)) return true;

    // Spam unicode
    if (/([\u2580-\u259F]){10,}/.test(message)) return true;

    return false;
}

// ==============================
// 👻 GHOST MODE
// ==============================
function isGhostAllowed(sender) {
    if (!config.GHOST_MODE) return true;

    return config.SUDO.split(",").includes(sender.split("@")[0]);
}

// ==============================
// 🔗 ANTI LINK
// ==============================
function containsLink(message) {
    if (!message) return false;
    return /(https?:\/\/|wa\.me\/|chat\.whatsapp\.com)/i.test(message);
}

// ==============================
// 🚫 BLACKLIST SYSTEM
// ==============================
const blacklist = config.BLACKLIST || [];

function isBlacklisted(sender) {
    return blacklist.includes(sender.split("@")[0]);
}

// ==============================
// ⚠️ BAD WORD FILTER
// ==============================
const badWords = ["fuck", "shit", "bitch"];

function containsBadWords(message) {
    if (!message) return false;
    return badWords.some(word => message.toLowerCase().includes(word));
}

// ==============================
// ⏳ COOLDOWN SYSTEM
// ==============================
const cooldown = {};
const COOLDOWN_TIME = 3000;

function isCooldown(sender) {
    const now = Date.now();

    if (!cooldown[sender]) {
        cooldown[sender] = now;
        return false;
    }

    if (now - cooldown[sender] < COOLDOWN_TIME) {
        return true;
    }

    cooldown[sender] = now;
    return false;
}

// ==============================
// 🚨 ANTI RAID (multi users spam)
// ==============================
let globalMessages = [];

function isRaid() {
    const now = Date.now();

    globalMessages = globalMessages.filter(ts => now - ts < 5000);
    globalMessages.push(now);

    return globalMessages.length > 20; // 20 msgs in 5 sec
}

// ==============================
// 📜 LOGGER
// ==============================
function logEvent(type, sender, message) {
    console.log(`[SECURITY] ${type} | ${sender} | ${message}`);
}

// ==============================
// 🔥 MAIN EXPORT
// ==============================
module.exports = async (conn, m, isCmd) => {
    try {
        const sender = m.sender;
        const body = m.text || m.message?.conversation || "";

        // 🚫 BLACKLIST
        if (isBlacklisted(sender)) {
            logEvent("BLACKLIST", sender, body);
            return false;
        }

        // 👻 GHOST MODE
        if (!isGhostAllowed(sender)) return true;

        // 🚨 ANTI RAID
        if (isRaid()) {
            await conn.sendMessage(m.chat, { text: "🚨 Raid detected! Slow down everyone!" });
            return false;
        }

        // 🛑 ANTI BUG
        if (isBugMessage(body)) {
            logEvent("BUG", sender, body);
            await conn.sendMessage(m.chat, { text: "⚠️ Bug message blocked!" });
            return false;
        }

        // 🔗 ANTI LINK
        if (containsLink(body) && !config.ALLOW_LINKS) {
            logEvent("LINK", sender, body);
            await conn.sendMessage(m.chat, { text: "🚫 Links are not allowed here!" });
            return false;
        }

        // ⚠️ BAD WORD
        if (containsBadWords(body)) {
            logEvent("BADWORD", sender, body);
            await conn.sendMessage(m.chat, { text: "⚠️ Watch your language!" });
            return false;
        }

        // ⏳ COOLDOWN
        if (isCooldown(sender)) {
            return false;
        }

        // 🛡 ANTI SPAM COMMAND
        if (isCmd && isFlooding(sender)) {
            logEvent("SPAM", sender, body);
            await conn.sendMessage(m.chat, { text: "⚠️ Stop spamming commands!" });
            return false;
        }

        return true;

    } catch (e) {
        console.error("Security System Error:", e);
        return true;
    }
};
