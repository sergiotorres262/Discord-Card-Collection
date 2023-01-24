const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = {
    name: "help",
    alias: [],

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag
        let recibidor = message.mentions.members.first()
        const puntos = await eco.obtener(`${server}.${user}.puntos`);
        const inventario = await eco.obtener(`${server}.${user}.inventario`);

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }


        let embed = new Discord.MessageEmbed()
            .setTitle('Lista de comandos')
            .addField('!start', `El primero comando que hay que poner para poder empezar a usar las funciones del bot. Solo hay que usarlo una vez`)
            .addField('!work', `Trabajas para conseguir una cantidad aleatoria de puntos`)
            .addField('!nitro', 'Comando solo usable para los que han boosteado el servidor de x6tence. Consigues una cantidad aleatoria de puntos')
            .addField('!abonado', 'Comando solo usable para los que son abonados de x6tence. Consigues una cantidad aleatoria de puntos')
            .addField('!bal', 'Comando para ver el balance de puntos que tienes')
            .addField('!inventory', 'Comando para ver los cromos que tienes en tu inventario')
            .addField('!open', 'La sintaxis es: !open <nombre del sobre que quieres abrir>. Abres un sobre y recibirás una carta aleatoria')
            .addField('!trivial', 'La sintaxis es: !trivial <cantidad de la apuesta>. El bot te dirá una pregunta aleatoria por MD, tú deberás contestar en el canal de discord donde pusiste el comando. Si aciertas, ganas el doble de lo que apostaste')
            .addField('!coin', 'La sintaxis es: !coin <cara de la moneda que eliges> <cantidad de la apuesta> Ej: !coin cruz 100. Si ganas, consigues el doble de lo apostado')
            .addField('!bet', 'La sintaxis es: !bet <nombre del partido> <equipo por el que apuestas> <cantidad de la apuesta>')
            .setFooter('Cualquier duda podéis contactar con el creador de este bot, Sergitest#7495')
            .setColor("ORANGE")
        return message.channel.send(embed);

    }
}