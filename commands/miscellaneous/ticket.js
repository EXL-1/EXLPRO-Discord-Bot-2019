const { RichEmbed } = require("discord.js")
const { redlight } = require("../../colours.json");

module.exports = {
    config: {
        name: "createticket",
        description: "Creates a ticket!",
        usage: "!createticket",
        category: "moderation",
        accessableby: "Members",
        aliases: ["ct"]
    },
    run: async (bot, message, args) => {
    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("Please provide the user who is creating the ticket!")
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send("Please provide a reason!")

    let embed = new RichEmbed()
    .setColor(redlight)
    .setAuthor(`${message.guild.name} Ticket`, message.guild.iconURL)
    .addField("Moderation:", "CreateTicket")
    .addField("User:", rMember.user.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "logs")
        let lChannel = message.guild.channels.find(c => c.name === "welcome")
        message.channel.send("Your Ticket has been successfully created!").then(m => m.delete(15000))
        sChannel.send(embed)
        lChannel.send(embed)
    }   
}