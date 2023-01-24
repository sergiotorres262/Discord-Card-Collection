const Discord = require('discord.js');
const client = new Discord.Client();
const megadb = require("megadb");
const eco = new megadb.crearDB('economia');
module.exports = {
    name: "coinflip",
    alias: [],
    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let usuario = message.author.tag
        let user = message.author.id
        let recibidor = message.mentions.members.first()

        const inventario = await eco.obtener(`${server}.${user}.inventario`);
        const puntos = await eco.obtener(`${server}.${user}.puntos`);

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        let coin = args.join(" ");
        if (!coin) return message.channel.send('Elige cara o cruz, por ejemplo !coinflip cara <cantidad de la apuesta> ó !coin cruz <cantidad de la apuesta>')

        if (isNaN(args[1])) {
            let solonumeros = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                .setDescription(" `? | Elige entre cara o cruz y escribe la cantidad que quieras apostar`")
                .setColor("ORANGE")
                .setFooter(" Tienes un total de " + puntos + " puntos en efectivo")
            return message.channel.send(solonumeros)


        }

        if (args[1] > puntos) {
            let menorque = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                .setDescription(" ` No puedes apostar más dinero del que tienes...xd`")
                .setColor("ORANGE")
            return message.channel.send(menorque)
        }
        if (args[1] > 301) {
            let menorque = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                .setDescription(" ` No puedes apostar más de 300 puntos`")
                .setColor("ORANGE")
            return message.channel.send(menorque)
        }
        eco.restar(`${server}.${user}.puntos`, args[1]);

        if (args[0] === "cara") {
            var probabilidad = Math.floor(Math.random() * 10)
            if (probabilidad < 5) {
                const victoria = args[1] * 2
                eco.sumar(`${server}.${user}.puntos`, victoria);
                return message.channel.send('¡Enhorabuena, la moneda ha salido cara y has ganado! ' + victoria + ' puntos ')
            }
            else {
                return message.channel.send('¡Que pena! La moneda ha salido cruz, más suerte la próxima vez')
            }
        }

        if (args[0] === "cruz") {
            var probabilidad = Math.floor(Math.random() * 10)
            if (probabilidad < 5) {
                const victoria = args[1] * 2
                eco.sumar(`${server}.${user}.puntos`, victoria);
                return message.channel.send('¡Enhorabuena, la moneda ha salido cruz y has ganado! ' + victoria + ' puntos ')
            }
            else if (probabilidad > 5) {
                return message.channel.send('¡Que pena! La moneda ha salido cara, más suerte la próxima vez')
            }
        }



    }
}