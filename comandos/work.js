const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let used = new Map();
const duration = require('humanize-duration')

module.exports = {
    name: "work",
    alias: [],

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag
        let recibidor = message.mentions.members.first()

        const cooldown = used.get(user)

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        //cooldown
        if (cooldown) {
            const restante = duration(cooldown - Date.now(), { units: ['h', 'm'], round: true, language: "es" });
            return message.reply(`Tienes que esperar ${restante} antes de volver a usar este comando`)

        } else {
            const inventario = await eco.obtener(`${server}.${user}.inventario`);

            eco.delete(`${server}.${user}.inventario`, "Vacio")
            var random = Math.floor(Math.random() * 200)
            let trabajo = ["mucho", "mucho", "mucho", "mucho", "mucho", "mucho"]
            let randomtrabajo = trabajo[Math.floor(Math.random() * trabajo.length)]
            const embed = new Discord.MessageEmbed()

                .setAuthor("¡A trabajar, esclavo!")
                .setDescription(usuario + " ha trabajado " + `${randomtrabajo}` + " y gracias a su esfuerzo a conseguido " + random + " puntos ")
                .setColor("ORANGE")

            await eco.sumar(`${server}.${user}.puntos`, random)
            message.channel.send(embed)

            used.set(user, Date.now() + 43200000);
            setTimeout(() => { used.delete(user); }, 43200000);

        }
    }
}