
const { Client, Collection } = require("discord.js");
const {  prefix, ownerid } = require("./botconfig.json");
require('dotenv').config();
const bot = new Client();
    bot.on('ready', () => {//new ready event
      setInterval(function(){
          bot.guilds.forEach(g => {
                      var role = g.roles.find(x => x.name === "RR");//rainbow role name
                      if (role) {
                          role.edit({color : "RANDOM"});
                      };
          });
      }, 3000);//the rainbow time
    });

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));
	
bot.login(process.env.DISCORD_TOKEN);

