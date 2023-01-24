const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let cooldown = new Set();
let mercado = new megadb.crearDB("mercado")

module.exports = {
    name: "start",

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag
        let recibidor = message.mentions.members.first()

        //los nuevos usuarios (no estaran registrados en la base de datos) cuando pongan el comando work, entraran en la base de datos con las propiedades puntos y objetos
        if (!eco.tiene(`${server}.${user}.puntos`)) {
            eco.establecer(`${server}.${user}`, { puntos: "0", inventario: [], repetidos: [] });
            mercado.establecer(`${server}`, { mercado: [] });



            const embed = new Discord.MessageEmbed()

                .setAuthor("¡Bienvenido " + usuario + "!")
                .setDescription("¡Gracias por comenzar a completar este maravilloso album de cromos, espero que disfrutes consiguiéndolos!\n Usa *help para ver todo lo que puedes hacer")
                .setColor("ORANGE")
            message.channel.send(embed)


        } else {
            message.channel.send('Ya usaste el comando start, no tiene sentido empezar dos veces...¿No?')
        }

    }
}