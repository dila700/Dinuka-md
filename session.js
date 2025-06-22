//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUUrTE9hNWZRSFRqQ3V1VWc1dEJ5bTlBTThDd2laR3lQTHlDdGVUUHlsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVrdmdHbmIvSnk4UDJZQSt6eU5LTkFtRzl2UCtMNDQwS3hteHdJQnZIUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQUZJK0J3MmZkVnVOeEpuWWJpTUs1czJWcUJNTkR4VVRKaFBKZ2hHOGt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOcnlTL3pZL3h2bzFTRS94WEh0RHJVVGNMUy9mY3duUTV3NW81UHEzczBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJPT2RSMVg1QzhxQ2VYVnJpY2xpUUxiSHpLN3MzaWtxQUVHajQ3RFQ3bTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYzVjFTUStaOVRSWUZsTVFPU1BRSDFNd0tuUnpzc25MQWxtQ3d6cWNaMkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5NWVd2UkZoaExJWXYxYVlvQnFqZTh6bTQvUGlCOUV2OUh3Q3M2aGRrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVN1UGpRdkRXbmVLUXVZMkR5OUREUUx5bU5rUHE2dXRYV0trWVpEdmxsZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRJQ3hxb0pXWmVGOUlKYTBCbnlsY2FKUUplZ05WYnNYQmQ3SytuZFI1RU5CanNlOHBra094cmZkc3NSNCt2RWxRM2U5dzY5bE5rN29kMkJ6NDFITGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJTVTZRSkZncEt0ckR6UXZKTlQ3Qk9SaFlLd0RCWXZMc1prVGFHMng3dTlNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0QVNFd2dEWlFmNkRsejh6aUhPdFpnIiwicGhvbmVJZCI6ImY2MjdkZWQyLWJhYTQtNDQzMC04MGI1LTQzNjdjZWVjNGI2YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZzBLYXNMa0xkYkcrU0NybHI4S01zZnpyRkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3FxN3hKVHVKSVJBcEwrZG5qajFUL0hQSkRnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlcyQVpITTVQIiwibWUiOnsiaWQiOiI5NDc0Mjk3MzI2NToxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEaW51a2EgZmlsbSIsImxpZCI6IjIwNTAyOTU0MTcxMjEwNDoxNEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09pc3d1UUVFTlA3M3NJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktWRmFrbWpselZJL1FpdHEzV0UraWN6SG81dUZCUGZsM1ZjRkN1em9WanM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjlEd2pyODR6Ry9zdGcyZWdyQXpzSjU5eGNWYlN3WEh2Q2Z6aENBWDdLVGxoYkNCU0FOSTc2dlU0SjNQaXZpZzZYdm1hQ2J4Sm9GZGl2Y1ZtaGxQZ0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsM29vSU0ySUJjZkRwRmxOaExTcG9jd1cycU5FYXNiOG1JZVkzbm5qK3JyVU50NDhrZ1FHTFhPZ2hYU2NmcmduQXVGaS9rS2pLZmM3OStrRW41OUNpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQyOTczMjY1OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNsUldwSm81YzFTUDBJcmF0MWhQb25NeDZPYmhRVDM1ZDFYQlFyczZGWTcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lBdz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDU4MDcwNCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMb00ifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94742973265",
  PASSWORD: 
    process.env.PASSWORD || "dinuka12**",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
