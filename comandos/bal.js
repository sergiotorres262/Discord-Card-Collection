const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const client = new Discord.Client();

module.exports = {
    name: "bal",
    alias: [],

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag
        let mencionado = message.mentions.members.first()

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        if (mencionado) {
            let idmencionado = message.mentions.members.first().id
            const puntosmencionado = await eco.obtener(`${server}.${idmencionado}.puntos`);

            if (!puntosmencionado) return message.channel.send('Este usuario no se encuentra en nuestra base de datos')

            let balanceotro = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                .setDescription(" El usuario " + `${mencionado}` + " tiene " + puntosmencionado + " puntos ")
                .setColor("ORANGE")
            return message.channel.send(balanceotro)
        } else {
            if (isNaN(args[0])) {
                const puntos = await eco.obtener(`${server}.${user}.puntos`);
                let balance = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                    .setDescription(" Tienes un total de " + puntos + " puntos ")
                    .setColor("ORANGE")
                return message.channel.send(balance)
            }



        }








    }
}