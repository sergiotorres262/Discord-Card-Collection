const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let used = new Map();
const duration = require('humanize-duration')
module.exports = {
    name: "nitro",
    alias: [],


    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag
        let recibidor = message.mentions.members.first()

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        //cooldown
        const cooldown = used.get(user)
        if (cooldown) {
            const restante = duration(cooldown - Date.now(), { units: ['d', 'h', 'm'], round: true, language: "es" });
            return message.reply(`Tienes que esperar ${restante} antes de volver a usar este comando`)

        } else {

            let rol = message.guild.roles.cache.find(r => r.name === "x6tence Nitro");

            if (!message.member.roles.cache.has(rol.id)) {
                message.channel.send(' Lo siento, no tienes el rol de x6tence Nitro, no puedes usar este comando')
                return;
            }


            var random = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
            const puntos = await eco.obtener(`${server}.${user}.puntos`);
            const embed = new Discord.MessageEmbed()

                .setAuthor(" Altoke mi rey ")
                .setDescription(usuario + ", gracias por apoyar el servidor de la mejor comunidad hispanohablante, es por eso que has ganado " + random + ' puntos ' + " extra ")
                .setColor("ORANGE")

            await eco.sumar(`${server}.${user}.puntos`, random)
            message.channel.send(embed)

            used.set(user, Date.now() + 86400000);
            setTimeout(() => { used.delete(user); }, 86400000);

        }





    }
}