const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("data");

module.exports = {
    name: "verify",

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag
        let verify = args.join(" ");
        const verificacion = {
            nombre: usuario,
            correo: verify
        }
        let RolServer = message.guild.roles.cache.find(role => role.id == "911433638808268841");
        let RolSpam = message.guild.roles.cache.find(role => role.id == "<rol-del-spam>")


        if (!message.content.includes("@")) return message.channel.send('Email invalido');
        if (!message.content.includes(".")) return message.channel.send('Email invalido');

        const correos = await eco.obtener(`${server}.data`);

        for (var i = 0; i < correos.length; i++) {
            var correo = correos[i];
            if (correo.nombre == usuario) return message.channel.send('Ya te has dado de alta, si te has equivocado en el correo, date de baja y vuelvete a dar de alta otra vez');
        }
        eco.push(`${server}.data`, verificacion)

        const embed = new Discord.MessageEmbed()

            .setAuthor("¡Bienvenido " + usuario + "!")
            .setDescription("¡Gracias por completar la verificacion, disfruta del servidor")
            .setColor("ORANGE")
        message.channel.send(embed)

        message.members.roles.add(RolSpam);
        message.member.roles.add(RolServer);

    }
}