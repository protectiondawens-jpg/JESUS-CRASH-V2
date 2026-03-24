const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(text, fault = 'true') {
  return String(text).toLowerCase() === String(fault).toLowerCase();
}

module.exports = {
  // SESSION & OWNER
  SESSION_ID: process.env.SESSION_ID || "JESUS-CRASH-V2~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZ3SmZzRlNIQmFMWGlsVGtEODNKRWozYXRpV2l6LzNhcmxpVC8xOVEzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSk1LR1VsVTdNQ2IybVRhNEJ3c3ZoZHNocG5pK1JwUzQ3eHkyQ3RhZGV5TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQmpqb0YrMEVOQXYvUlEzNTdxSXVZLzM4MFRRQVFhSFVwVlhzZWl3SGxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzYWh0UmdtbkdLZGsyTVBzazRrWTNLTUxEVzV5WHJhYUliN3g0NCs0NlF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhGQ1AvbjBIMERDamxYOUNuU2NkOWc0UDNnQ01BWDM3QWsvaUc3dXlNSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1SZlZmZzlCcjlIL2w2cEpYdFpRQlJ2NjBjNWZQWmpyblR2d2hmWkhHVWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdUL3JqTkNBcjBUZ0F2YSsvalVxWWk3RHRxYURBQTZhdkdiaTIzTjgzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE12VnNHL0ZjZnV5WmRMQk1Wa2pJNDhZOUY2a3hwTkFlaThJSXI1RFdFOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNraTVNN0grOGlma3FjMjkrc1ZncWswYVpqMGZ6S2kzWVN3L1pISEhIUE5OcWFjS0tJYjI1VlRDcytoc2M1SGlOVTVmQnZZcE92NmRJbjE1VHdCOUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiI4eXZVVmRrQncwZFF5Z29WRk1Uc1BGcGpSUzhxQm5FZDZ6aXUxL2lPNk04PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE2MDU4MTIwNDE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNjRCRDhDNDJCQTkzQjU4OEFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQzNTUzMDR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE2MDU4MTIwNDE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQkRCNkNCMjM4NUNCNThEQjREIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQzNTUzMDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE2MDU4MTIwNDE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQUYwQkJEQzk0RTNDRjA5OUFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQzNTUzMTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE2MDU4MTIwNDE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNzgxQUY0QzAzQzU5MTBBMDhGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQzNTUzMTB9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjE2MDU4MTIwNDE1OjI2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzM4MDk4MTgzMjA4OTc6MjZAbGlkIiwibmFtZSI6IvCdkIPwnZCI8J2QhOC8kiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlBuNHVnREVObUdpczRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVmF2T09UQ20zU1o1T0RPTUxMVlNMVlJ6S2YxdE5sc2h4bmRWS3doNmV6az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSlllS2hiQ1BkWTdWSkhuVnYxU3dEV2ZiQWhqUWRkUGVmWms2T1pIWlpmOSthT2FVb2llNFNES2tXTk8waUNjV0VmVmpCWWJIODNLby93aXJtSnRyQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImpUa1VlbjZvSmhDK3A0SWxwMytkdCtmYm00Z3VSNXUwZG9DMWhNNjRvb1ltTzlyWVB0UkJiOVdCaW5xNDRsellLbjlRNlJJMmF2dHhKQS9FUmtJR0NRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTYwNTgxMjA0MTU6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVldyemprd3B0MG1lVGd6akN5MVVpMVVjeW45YlRaYkljWjNWU3NJZW5zNSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWdnTiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzQzNTUzMDMsImxhc3RQcm9wSGFzaCI6IjNtbDFqUyIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmtuIn0=",
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
