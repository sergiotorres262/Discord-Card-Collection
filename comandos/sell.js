const Discord = require("discord.js");
const client = new Discord.Client();
const megadb = require("megadb");
const mercado = new megadb.crearDB("mercado");
const eco = new megadb.crearDB("economia");

module.exports = {
    name: "sell",
    alias: [],

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let usuario = message.author.tag
        let user = message.author.id

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        const carta = "Cromo de " + args[2];
        const valor = args[3];

        if (!carta) return message.channel.send('Especifica un cromo');
        if (!valor) return message.channel.send('Especifica un cromo y el precio de venta');
        try {
            const borrar = await eco.extract(`${server}.${user}.repetidos`, carta)
        } catch (e) {
            return message.channel.send('No tienes este cromo en tu mazo de repetidos o puede ser que no hayas puesto la mayuscula en el nombre de la persona');
        }


        message.reply('Has enviado el  ' + carta + ' satisfactoriamente al mercado, usa !market para verlo')
        const PK = Math.floor(Math.random() * 100000) + 1;

        const venta = {
            idventa: PK,
            name: carta,
            value: valor,
            vendedor: usuario,
            vendedorid: user
        }
        mercado.push(`${server}.mercado`, venta)
        const Embed = new Discord.MessageEmbed()
            .setTitle("Nueva venta")
            .setColor("ORANGE")
            .setDescription(`Cromo puesto a la venta: ${carta} \n Precio: ${valor} \n Vendedor: ${usuario}`)
            .setTimestamp()
        message.channel.send(Embed);

    }

}