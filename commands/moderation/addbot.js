const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "addbot",
        description: "Adds a bot to a users server!",
        usage: "!addbot",
        category: "moderation",
        accessableby: "Members",
        aliases: ["ab"]
    },
    run: async (bot, message, args) => {
    let sEmbed = new RichEmbed()
        .setColor(cyan)
        .setTitle("**Add EXL PRO to your Server!**")
        .addField("**Details:**", `Click on the link above here this will redirect you to the EXL PRO website!`, true)
        .setThumbnail(bot.user.displayAvatarURL)
        .setURL("https://lucasmalik03.wixsite.com/mysite")
        .setFooter(`EXLBot | [EXL CORPORATION]`, bot.user.displayAvatarURL);
    message.channel.send(sEmbed);
    }
}
