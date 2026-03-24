const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(text, fault = 'true') {
  return String(text).toLowerCase() === String(fault).toLowerCase();
}

module.exports = {
  // SESSION & OWNER
  SESSION_ID: process.env.SESSION_ID || "JESUS-CRASH-V2~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUxQNVlHamM5QWRmR2ZicTNCVzlTUEphSktTbXJZenhYUGZ4b1oyVTZXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUM1MEIyMkZrYlV3ZHFtekR3eEozZXI1VzRBUUhvaTFaY1EvdWFMeHZRYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRm5HWHJnWUJwSlFuam9lZGFSaUIwL3NvRDN2em8xcVEyMlM3cmVGWUdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpN0ZQNUg0TUYyWmdQZDBvYmgrSHVyLytoS1lLTmw5UGRQUzZlOGdZRHpJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QUG52SVlPN2ZhN2dZRjI1NUdVUC80cmRva0hHUW9NODdDWE9GbGY0MEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcxR1hnSUh2UjBJS0pUTHpHZnMyT0N4WllmL0puUWdvck9wbVB6MVljWFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk9mWGFEMkorYkNxcFd6c3cxanRtMUhOdVBLRFNZVzIxS3NxaGVMTXdrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmhjbWNaeDNZL3JuOWZMazQ2NmY0N2NqaUloOXRCTlJlSkoxYjQ5c0Zqaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUzVGVEcVFJUC85ZDZ1UTN5YndsNm5YSS81czl5NmRJNXN5eEp1RW5JN2ZwcXlBSE9sNlZINENidE9saFF2WDIwdUJodU5DM1BzUCtTbWYwZ1Z5MmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJ6TExMWFVHUk1GMWUwbFFtcDRNdTNsbERvNjU4Z284ZDJ5dG9KRVRGY1kwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE1MzA4MTAwNDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBRDlFQzhDNjhCNjAxQTc2NzdCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQzNTcxNTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE1MzA4MTAwNDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBREUzRjkwRTZDQjEwNDk4RTU0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQzNTcxNTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtrVmRJMEY0UjVPSnFMYmMxMVd3cXciLCJwaG9uZUlkIjoiNzdhM2FkMTUtMjk4Yi00Y2NlLWI1ODYtMzNhZGFlZjE3N2IzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9YcHY0R0JvRTlIVytGSVhYd2ZKNGpaZTNhOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRVNRR2VwNkh0Y3dPZGJlaXc3cVJyQmtBTTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQU00QTY5WDMiLCJtZSI6eyJpZCI6IjE1MzA4MTAwNDc4OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGF3ZW5zWDciLCJsaWQiOiIxNjYzMTAzOTQ3Nzc3OTc6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BISXV1a0JFSk9WaXM0R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNFSTRmWDNMRFJuak1rOHphaHJNN2kvbjJZWVZyNTNpVk1UNUJ5Y3hCSGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZqMzBZL0t1T2hLOVZjcXQ5THJuUFlHbExOaW9jWHZvcVRYU1o1UEt6RVFtcW0xSG11QW1tc0k5dW9ZS0tEZG1KeUxyY2c2VUtzQlRMdGwwY1ZBUWd3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhY0RXRjVncmFHeUZEZncxaFd2TnQ1YU5tTTFrdDFyRnpBNGpUdFNxN05ZdEpYdlNjR0puS0JMVmE2Z3kwa1FQSFhUUVA4Wm43STRjNEI5UkpUcVJqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE1MzA4MTAwNDc4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkJDT0gxOXl3MFo0ekpQTTJvYXpPNHY1OW1HRmErZDRsVEUrUWNuTVFSNSJ9fV0sInBsYXRmb3JtIjoic21iaSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc0MzU3MTUxLCJsYXN0UHJvcEhhc2giOiIzbWwxalMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJxZSJ9",
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
