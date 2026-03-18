const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(text, fault = 'true') {
  return String(text).toLowerCase() === String(fault).toLowerCase();
}

module.exports = {
  // SESSION & OWNER
  SESSION_ID: process.env.SESSION_ID || "JESUS-CRASH-V2",
  OWNER_NUMBER: (process.env.OWNER_NUMBER || "16058120415") + "@s.whatsapp.net",
  OWNER_NAME: process.env.OWNER_NAME || "DAWENS BOY",
  DEV: (process.env.DEV || "50942241547") + "@s.whatsapp.net",

  // BOT INFO
  BOT_NAME: process.env.BOT_NAME || "JESUS-CRASH-V2",
  STICKER_NAME: process.env.STICKER_NAME || "JESUS-CRASH-V2",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ by dawens boy*",
  PREFIX: process.env.PREFIX || ".",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/5srfgj.png",

  // WELCOME / GOODBYE / ADMIN
  WELCOME: toBool(process.env.WELCOME, "true"),
  GOODBYE: toBool(process.env.GOODBYE, "true"),
  ADMIN_EVENTS: toBool(process.env.ADMIN_EVENTS, "true"),      // Logs normal promote/demote
  SECURITY_ALERT: toBool(process.env.SECURITY_ALERT, "true"),  // Kick unauthorized promotes/demotes

  // STATUS
  AUTO_STATUS_SEEN: toBool(process.env.AUTO_STATUS_SEEN, "true"),
  AUTO_STATUS_REPLY: toBool(process.env.AUTO_STATUS_REPLY, "true"),
  AUTO_STATUS_REACT: toBool(process.env.AUTO_STATUS_REACT, "true"),
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY JESUS-CRASH-V2*",

  // AUTO FEATURES
  AUTO_REACT: toBool(process.env.AUTO_REACT, "false"),
  CUSTOM_REACT: toBool(process.env.CUSTOM_REACT, "false"),
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  AUTO_VOICE: toBool(process.env.AUTO_VOICE, "false"),
  AUTO_STICKER: toBool(process.env.AUTO_STICKER, "true"),
  AUTO_REPLY: toBool(process.env.AUTO_REPLY, "true"),
  AUTO_TYPING: toBool(process.env.AUTO_TYPING, "false"),
  AUTO_RECORDING: toBool(process.env.AUTO_RECORDING, "true"),
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE, "false"),

  // ANTI SYSTEM
  ANTI_LINK: toBool(process.env.ANTI_LINK, "true"),
  ANTI_LINK_KICK: toBool(process.env.ANTI_LINK_KICK, "true"),
  DELETE_LINKS: toBool(process.env.DELETE_LINKS, "true"),
  ANTI_BAD: toBool(process.env.ANTI_BAD, "true"),
  ANTI_VV: toBool(process.env.ANTI_VV, "true"),
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same",
  GHOST_MODE: toBool(process.env.GHOST_MODE, "true"),
  ANTI_CALL: toBool(process.env.ANTI_CALL, "true"),
  

  // ALIVE
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/gufckm.png",
  ALIVE_MSG: process.env.ALIVE_MSG || "> Zinda Hun Yar *JESUS-CRASH-V2*⚡",

  // OTHER
  MENTION_REPLY: toBool(process.env.MENTION_REPLY, "true"),
  MODE: process.env.MODE || "public",
  PUBLIC_MODE: toBool(process.env.PUBLIC_MODE, "true"),
  READ_MESSAGE: toBool(process.env.READ_MESSAGE, "false"),
  READ_CMD: toBool(process.env.READ_CMD, "false"),
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ADMIN ACCESS
  SUDO: process.env.SUDO || "989910713754,13058962443"
};
