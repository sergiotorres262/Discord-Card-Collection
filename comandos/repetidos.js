const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const client = new Discord.Client();

module.exports = {
    name: "repetidos",


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
            const repetidos = await eco.obtener(`${server}.${idmencionado}.repetidos`);

            if (!puntosmencionado) return message.channel.send('Este usuario no se encuentra en nuestra base de datos')

            let Embed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                .setDescription(repetidos)
                .setColor("ORANGE")
            return message.channel.send(Embed)
        } else {

            if (isNaN(args[0])) {
                const repetidos = await eco.obtener(`${server}.${user}.repetidos`);
                let Embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                    .setDescription(repetidos)
                    .setColor("ORANGE")
                return message.channel.send(Embed)
            }



        }








    }
}