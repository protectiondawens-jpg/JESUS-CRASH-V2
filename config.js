const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(text, fault = 'true') {
  return String(text).toLowerCase() === String(fault).toLowerCase();
}

module.exports = {
  // SESSION & OWNER
  SESSION_ID: process.env.SESSION_ID || "JESUS-CRASH-V2~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZrelVWbzRDSmZjbEpkWlIrVzNvNVd1d2NpZDhFeWM5dzQrYUx3Mi8wOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHB0SG5ZK2RiUlY5bmFWN0lqOEpycm1aSk9ZRzUzWllLWFlBdEoySFBURT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQWRBd2FIZVJWUXNNODRXWldnUStFVjRZaFl5eFM3eEhzWjVjUmhkdUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TndaM1UranJWWkhxMDd4bFNUS3pRNjNFY1BuY2pMZW5hZlZ0YTVQL1c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklBSTFLWlJMRjJBd041Qkt4NHN1VTFJWVljYktBOGdaY2ErNzQxdm14VTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdEQ2IxNFdFd3I3RDdoWE1CbS9hMkpwdFZwTmZUc0lvMzhaU0x3VzFWelE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0t1T0ZCUEFJcVdVdUJMTXpIdXJXUTRKeU4xS3cranE2R0ZKdDlzaTRuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWNFaUdJWUZ6Znp3b1A0aEErbVpsQytSQXhvQzdseVpHUHV3UldLZWtRST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN6QXBuVVJyYW9VMnJNaXFiVWNDMHBsZUtDRkx4SG0rckhyT1VWTStIZkxjVUl1MWI5THFWVU5Oa3FsNXlwUlhmQ2gzWm1Yc1dZdEkxN0t5Z0c4bGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6Im9XeUZDZ0VQUDFoUXhJZjcrdVlya1E4NG4wdGZiNml0MUlFMnFwRFNhU0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTUzMDgxMDA0NzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkExNTk0MzQzMjgxOEI3MkMwRTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NDM1OTMwMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTUzMDgxMDA0NzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkFFNjU0RjIyMTQ3Nzg5RTBFREMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NDM1OTMwMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTUzMDgxMDA0NzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkEzMTFFNzUwRjNGQThCMjQ4OEIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NDM1OTMwNn1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNQSEl1dWtCRVBpbGlzNEdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzRUk0ZlgzTERSbmpNazh6YWhyTTdpL24yWVlWcjUzaVZNVDVCeWN4QkhrPSIsImFjY291bnRTaWduYXR1cmUiOiJpcHU5MEsxY3VkTE5PRVc2MGFybVZOV3ZaS0g0RkZKa2w4QUJDMnRFaG1QSDc0bkZqdWFpT0dLeW1vTGxlNXQ5OWd2Vk5pY3JCR1U5TWppdzhVbEtqQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibEZLdDluUjVwajhnMGpRemVCcGRZTHlwd3lpN2pWWTNKWkNiV3o2UEx3bWFWOFMzOHFDL3RicTVhRy82VnZBdTQyOTVNMHVjYnRIamt3QWl6TGM4alE9PSJ9LCJtZSI6eyJpZCI6IjE1MzA4MTAwNDc4OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGF3ZW5zWDciLCJsaWQiOiIxNjYzMTAzOTQ3Nzc3OTc6NEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTUzMDgxMDA0Nzg6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiQkNPSDE5eXcwWjR6SlBNMm9hek80djU5bUdGYStkNGxURStRY25NUVI1In19XSwicGxhdGZvcm0iOiJzbWJpIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWdnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzQzNTkzMDAsImxhc3RQcm9wSGFzaCI6IjNtbDFqUyIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnFnIn0=",
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
