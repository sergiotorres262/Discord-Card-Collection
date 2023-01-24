const Discord = require("discord.js");
const client = new Discord.Client();
const megadb = require("megadb");
const { execute } = require("./sell");
const mercado = new megadb.crearDB("mercado");
const eco = new megadb.crearDB("economia");

module.exports = {
    name: "retire",

    async execute(client, message, args) {

        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag


        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        let retire = args.join(" ");
        const markets = await mercado.obtener(`${server}.mercado`);
        if (!retire) return message.channel.send('Elige la carta...')
        for (var i = 0; i < markets.length; i++) {
            var market = markets[i];

            if (retire == markets[i].idventa) {
                if (user != markets[i].vendedorid) return message.channel.send('La carta que quieres retirar no es tuya, no puedes hacer eso')
                await eco.push(`${server}.${user}.repetidos`, market.name);
                message.reply('Has quitado tu  ' + market.name + ' del mercado. Ha vuelto a tu mazo de repetidos ');
                mercado.extract(`${server}.mercado`, markets[i])
            }
        }

    }
}