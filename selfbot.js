var prefix = ""; //le prefix que tu souhaite avoir
bot.login(''); //ton token






const Discord  = require("selfbot.js");
const { Client, RichEmbed } = require('selfbot.js');
let rpcGenerator = require("discordrpcgenerator")
message = new Set();
args = new Set();
var prefix = ""; //le prefix que tu souhaite avoir
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))// ou require("uuid/v4")
var bot = new Discord.Client();


//          CONSOLE
     console.log('------------------------------------');
     console.log('[Selfbot] SATAN lancée avec succée !');
     console.log('[Selfbot] Version: ' + Discord.version);
     console.log('------------------------------------');

//        COMMANDE QUAND ON ME PING
bot.on(`message`, message => {
  var args = message.content.trim().split(/ +/g)
  if (message.content === "<@667444207983788064>"){
  var help_embed = new Discord.RichEmbed()
  .setDescription(":rocket: **Stop mention zebii**")
  message.channel.sendMessage(help_embed)
  }
});
//        COMMANDE DE PING
bot.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    if (message.author.id !== bot.user.id) return
const exampleEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle("𝗟𝗲 𝗽𝗶𝗻𝗴 𝗱𝗲 𝘃𝗼𝘁𝗿𝗲 𝗦𝗲𝗹𝗳𝗕𝗼𝘁")
  .setImage("https://media.giphy.com/media/YIZXqNvRCb1T2/giphy.gif")
  .addField('𝗣𝗶𝗻𝗴 𝗱𝘂 𝘀𝗲𝗹𝗳𝗯𝗼𝘁', bot.ping.toFixed() + " **Milliseconde**")
  .setFooter("𝘽𝙤𝙗 𝙡'𝙚𝙥𝙤𝙣𝙜𝙚 𝙎𝙚𝙡𝙛𝙗𝙤𝙩 🧽");
message.channel.send(exampleEmbed);
}});


//      RPC PAR D'EFAUT
bot.on("ready", () => {
  rpcGenerator.getRpcImage("675995896118509608", "_")
  .then(image => {
      let presence = new rpcGenerator.Rpc()
      .setName("Ma rpc")
      .setUrl("https://twitch.tv/discord")
      .setType("STREAMING")
      .setApplicationId("675995896118509608")
      .setAssetsLargeImage(image.id)
      .setAssetsLargeText('𝙑𝙚𝙧𝙨𝙞𝙤𝙣: 𝙑.1')
      .setDetails("𝘽𝙤𝙗 𝙡'𝙚𝙥𝙤𝙣𝙜𝙚 𝙎𝙚𝙡𝙛𝙗𝙤𝙩")
      bot.user.setPresence(presence.toDiscord())
  }).catch(console.error)
});
