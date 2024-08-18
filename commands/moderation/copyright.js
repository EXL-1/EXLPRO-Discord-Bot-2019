const { RichEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");

module.exports = {
    config: {
        name: "copyright",
        description: "Displays the Copyright Terms",
        usage: "!copyright",
        category: "moderation",
        accessableby: "Members",
        aliases: ["cr"]
    },
    run: async (bot, message, args) => {
    let uEmbed = new RichEmbed()
        .setColor(red_light)
        .setTitle("**Copyright Info:**")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**License:**", `The CWT License (CWT)`)
        .addField("**Company:**", `[EXL CORPORATION] (C) 2019`, true)
        .addField("**Owner:**", `EXLONE`, true)
        .addField("**Details:**", `This bot is licensed under [CWT] and the company is the [EXL CORPORATION] and the EXL PRO bot is a multifunctioning discord bot which has 15 commands which are free to use for members! For adminstrators The moderation commands can be used but the following can not: shutdown/reload | Also this bot is not allowed to be copied of its code neither the name! | No Hacking or changing commands/text is allowed! | Using the bot in an appropriate way aswell no spamming! | If their is a bug or a problem with the bot please contact it to the company immediately! | For people to add the bot to their server you must contact the [EXL CORPORATION]`, true)
        .addField("**Details Continued:**", ` No 3rd Party Softwares! | When the bot has joined the server from starting please create a logs/welcome channel otherwise this will lead the bot to have problems | People hosting servers/members who have made faults/mistakes when using the bot we are not responsible for your problems (Only if its a bug or a valid reason!) | NO USE OF AN OATH2 GRANT TO HOST THE BOT | If you can follow all of the rules above you can hereby use the EXL PRO freely for use! If you break/cheat the rules you will be banned from using the EXL PRO and it will be instantly terminated from hosting your server! A Fine of up to £25 will be issued and charged!` , true)
        .addField("**EXTRA:**", `This bot is 24/7 | It is Constantly being managed and Updated | We are always watching the bots logs and reports of commands!`, true)
        .addField("**Advertising:**", `If you want to Advertise the bot to different servers/authors firstly please contact the [EXL CORPORATION]`, true)
        .addField("**Contact Support**", `If you are Experiencing any problems please report this by creating a ticket or by reporting this on the EXL ALPHA server!`)
        .setFooter(`EXLBot | [EXL CORPORATION] | [CWT] | Thank you For Reading!`, bot.user.displayAvatarURL);

    message.channel.send(uEmbed);
    }
}