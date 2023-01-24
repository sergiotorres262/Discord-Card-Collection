const Discord = require("discord.js");
const client = new Discord.Client();
const megadb = require("megadb");
const mercado = new megadb.crearDB('mercado')
const eco = new megadb.crearDB('economia');


module.exports = {
    name: "market",
    alias: [],

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let user = message.author.id
        let server = message.guild.id

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        const market = await mercado.obtener(`${server}.mercado`);
        if (market.length === 0) return message.channel.send('Actualmente no hay cartas en el mercado, vuelve mas tarde')

        mercado.map(`${server}.mercado`, (v) => `\n ID: ${v.idventa}\n Carta: ${v.name}\n Precio: ${v.value} puntos\n Vendedor: ${v.vendedor}\n`).then(mercado => {
            return message.channel.send(mercado.join("\n"));
        })



    }
}