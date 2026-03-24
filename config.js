const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(text, fault = 'true') {
  return String(text).toLowerCase() === String(fault).toLowerCase();
}

module.exports = {
  // SESSION & OWNER
  SESSION_ID: process.env.SESSION_ID || "JESUS-CRASH-V2:~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01BQi9TQW9KUGYvb3hkWmdZVlQwSWRhT0plcndOTWwzbGRLdWw3SWNudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0VKWUV1c0txSHdUYUlOVDNHRXZqNERMSVNOWFR5cHd5NGJQbGVUbVFCOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQjZtem9TQnZRcGdsQTNkQkE5amJPSm0zdkNmdHAva25WKzdFVGJxN2xFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqalFwSUNvVW5vbWRaekpMT1V2VllZeFhEYktMKzB5eGtrbjVZSDFuTG1nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHMTlaai91VHV2NkJ5TWtvOWxodTBxeFQ0VU91NituVDZUTkZOeGlkMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdiMmFKeUZ3WWFEVTVJU1RPZlB6eDJmeWJaTXlHZTFGQng2dUFXUTVaU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFJbStIOVdtbURSNWNFa1hKbGZhV3MwblNGV0k3OERNNDRWMjBnMnhtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExabGVkd1ozNnl5ZHp0Z0p6d3ljVy9tbm9MQXdZazFDU21NbGgwNDl5bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY4NURMdnNDZytaeGhWdW50ZzI2YVM5Q3JMZVova0RGMmRwcUJ1WXdsRjJjVWJHaml1ZGRva3BQNTg1c0ZzNDZUOXJRcld6QktJYjRHV1hDbi8zckR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJwSG1DNWpYN3orRW52RjNvV2hySXVLNjhMSVVqWDNLVzF1WGhhSktjRElvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE1MzA4MTAwNDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBMkJDOTFDMkFDODdEMUY4QzQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQzNTg4Njh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE1MzA4MTAwNDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBMThCRURBNDU2NkJBNUFCNDdEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQzNTg4Njh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE1MzA4MTAwNDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBRTQxNzA5MUU5NjVDOUE4OTQxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQzNTg4NzF9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MiwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMjdMOVpTWUoiLCJtZSI6eyJpZCI6IjE1MzA4MTAwNDc4OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGF3ZW5zWDciLCJsaWQiOiIxNjYzMTAzOTQ3Nzc3OTc6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BISXV1a0JFTVdpaXM0R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNFSTRmWDNMRFJuak1rOHphaHJNN2kvbjJZWVZyNTNpVk1UNUJ5Y3hCSGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVxa1g1MVpEYUgvUHVreVVTZFJaWnpkTUpSbERDMTBndU1mMUtzUjhta3RsVkwycjQ1M3JpSWpxRzdmSU1pQmM0ZGhZTk9Helh2RjQ2TEM2KytrUWp3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4QkJlWGJOQU9jVUc0UWN5MmlEUjBnWkt5R09PRk13dUlWMTlOQjdsZU0xVWRYZjFRcG9kOE8xbUc5STdSdDl5ZXg5MGFMazRsYlA4QVRjbEhWNWZEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE1MzA4MTAwNDc4OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkJDT0gxOXl3MFo0ekpQTTJvYXpPNHY1OW1HRmErZDRsVEUrUWNuTVFSNSJ9fV0sInBsYXRmb3JtIjoic21iaSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc0MzU4ODY3LCJsYXN0UHJvcEhhc2giOiIzbWwxalMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJxaCJ9",
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
