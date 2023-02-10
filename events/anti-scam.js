const client = require('../main.js')
const ms = require("ms")
const scamlinks = [
  "/diis",
  "//disdor",
  "rd-plus.c",
  "s-nitro.x",
  "nittro.",
  "tro.ru",
  "//dissord.",
  "//discorde",
  "//discoord",
  "//discopd",
  "//discoqd",
  "//disccr",
  "//drd.gi",
  "/discorcl",
  "/disrcod",
  "/discrod",
  "/disrocd",
  "/discord-nitro",
  "nitros.com/",
  "/dilscord",
  "//dicso",
  "//disor",
  "//disca",
  "//discb",
  "//discc",
  "//discd",
  "//disce",
  "//discf",
  "//discg",
  "//disch",
  "//disci",
  "//discj",
  "//disck",
  "//discl",
  "//discm",
  "//discn",
  "//discod",
  "//discp",
  "//discq",
  "//discr",
  "//discs",
  "//disct",
  "//discu",
  "//discv",
  "//discw",
  "//discx",
  "//discy",
  "//discz",
  "//disqd",
  "cora.gift",
  "corb.gift",
  "corc.gift",
  "core.gift",
  "corf.gift",
  "corg.gift",
  "corh.gift",
  "cori.gift",
  "corj.gift",
  "cork.gift",
  "corl.gift",
  "corm.gift",
  "corn.gift",
  "coro.gift",
  "corp.gift",
  "corq.gift",
  "cors.gift",
  "cort.gift",
  "coru.gift",
  "corv.gift",
  "corw.gift",
  "corx.gift",
  "cory.gift",
  "corz.gift",
  "corl.gift",
  "dnito.",
  "idiscord.com",
  "nitro-gg.",
  "nltro.c",
  "nltro.g",
  "nltro.r",
  "nltro.x",
  "nitre.c",
  "nitre.g",
  "nitre.r",
  "nitre.x",
  "nltro.c",
  "nltro.g",
  "nltro.r",
  "nltro.x",
  "nltros.c",
  "nltros.g",
  "nltros.r",
  "nltros.x",
  "nitres.c",
  "nitres.g",
  "nitres.r",
  "nitres.x",
  "nltros.c",
  "nltros.g",
  "nltros.r",
  "nltros.x",
  "rdnitro.xyz",
  "rdnitros.xyz",
  "nitrosgift",
  "nitrosg1ft",
  "nitrosglft",
  "n1trosgift",
  "n1trosg1ft",
  "n1trosglft",
  "nltrosgift",
  "nltrosg1ft",
  "nltrosglft",
  "glft.x",
  "corrl.com/",
  "rd-to.c",
  "rd-up.c",
  "unnitty.ru",
  "unity.ru",
  "unnity.ru",
  "unitty.ru",
  "drop.info",
  "t-discr",
  "t-diis",
  ".net/steam",
  "t/steam",
  ".click/di",
  ".click/ste",
  "/dlscord",
  "/dlscorld",
  "discord.voto",
  "/discord-gifts",
  "/ds-nit",
  "discorb-",
  "/discordgift-",
  "//dizc",
  "nitro/steam",
  "glft/steam",
  ".link/gift",
  ".link/glft",
  "nitro.link/",
  "/steam-discord",
  "/discord-steam",
  "/dlscordnltro",
  ".ru.com/gift",
  ".ru.com/glft",
  "drop.com/gift",
  "nitros.xyz/b",
  "discord.ru/",
  "steam.ru",
  "//gifs-",
  "gift.ru",
  "gifts.ru",
  "o-gift.x",
  "d-gift.x",
  "ft.com/bill",
  "ru/air",
  "ru/alr",
  "ru/a1r",
  "ru/drop",
  "ord.shop/",
  "rod.shop/",
  "cod.shop/",
  "d-app.me",
  ".me/nitro",
  ".me/free",
  "tro-free.",
  "tre-free.",
  "-cpp.com/",
  "ocrd.gift/",
  "dlscord.net",
  "rd.net/saf",
  "cord.org/",
  ".org.ru/",
  ".ru/gift",
  "/stearm",
  "/stearn",
  "/stean",
  "nitq.",
  "steammcomunity.",
  "/steamcommur",
  "/strean",
  "/steamcommunn",
  "/steem",
  "/steam-money",
  "comnitro.",
  "comminity.",
  "comminuty.",
  "/treadeoffre",
  "/treadoffer",
  "/tradeofer",
  "/tradedoffer",
  "/treadeoffer",
  "/tracleofter",
  "/tradeofter",
  "/tracleoffer",
  "/netflix_accbot",
  "discordsteaml.",
  "//stellss"
]
console.log(`[🛡️ AUTO-MOD] Loaded the Event: Anti-Scam Links. Scam links may not pass JC Bot`.blue.bold)
client.on('messageCreate', async(message) => {
    if(message.author.bot || !message.guild) return;
    let database = scamlinks
  database.forEach((m) => {
    if(message.content.toLowerCase().includes(m)) {
    message.delete()
          message.reply(`<:Error:930608437665083402> **AUTOMOD | No scam links allowed in the server!**`)
          let user = client.users.cache.get(message.author.id)
          message.member.ban()
          message.author.send(`<:Error:930608437665083402> **AUTOMOD | You have been banned for sending a scam link!**\n> *This doesn't affect you if your Admin!*`)
    }    
  })
})