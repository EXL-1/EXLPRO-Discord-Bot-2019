module.exports = { 
    config: {
        name: "coinflip",
        description: "Flips a coin to give either Heads or Tails!",
        usage: "!coinflip",
        category: "miscellaneous",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {

    message.channel.send("Selecting...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Heads", "Tails"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`You landed on ${response}!`)
    })
  }
}