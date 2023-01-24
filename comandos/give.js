
const Discord = require('discord.js');
const client = new Discord.Client();
const megadb = require("megadb");
const eco = new megadb.crearDB('economia');
module.exports = {
    name: "give",
    alias: [],
    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let usuario = message.author.tag
        let user = message.author.id
        let recibidor = message.mentions.members.first()

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        try {


            if (message.author.id !== '276801339990867968') return;



            if (!recibidor) return message.channel.send(" Debes mencionar un usuario para darle puntos")


            var darpuntos = args.slice(1).join(" ")
            if (!darpuntos) return message.channel.send(" Debes indicar el número de puntos que añades ")

            let idrecibidor = message.mentions.members.first().id
            await eco.sumar(`${server}.${idrecibidor}.puntos`, darpuntos)

            message.channel.send(" El usuario " + `${recibidor}` + " ha recibido " + darpuntos + " puntos")
        }
        catch (e) {
            message.channel.send('No puedo dar dinero a este usuario')
        }
    }
}