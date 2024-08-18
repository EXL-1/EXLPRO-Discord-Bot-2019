const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "joinexlalpha",
        description: "Creates a link to join the EXL ALPHA server!",
        usage: "!serverinfo",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["exl", "joinserver"]
    },
    run: async (bot, message, args) => {
    let sEmbed = new RichEmbed()
        .setColor(cyan)
        .setTitle("EXL ALPHA SERVER")
        .setURL("https://discord.gg/PcSFZkB")
        .addField("**Details**", "Click on the link above here this will redirect you to the EXL ALPHA Discord server!")
        .setThumbnail(bot.user.displayAvatarURL, true)
        .setFooter(`EXLBot | Footer`, bot.user.displayAvatarURL);
    message.channel.send(sEmbed);
    }
}
