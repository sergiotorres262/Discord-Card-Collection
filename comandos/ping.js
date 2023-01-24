const Discord = require('discord.js');

module.exports = {
    name: "ping",
    alias: [],

    execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        if (message.author.id !== '276801339990867968') return;
        return message.channel.send("La Api ms es de " + Math.floor(client.ws.ping) + "ms")
    }
}