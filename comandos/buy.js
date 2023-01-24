const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const mercado = new megadb.crearDB("mercado");

module.exports = {
    name: "buy",
    alias: [],


    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id

        const inventario = await eco.obtener(`${server}.${user}.inventario`);
        const puntos = await eco.obtener(`${server}.${user}.puntos`);

        let purchase = args.join(" ");
        const markets = await mercado.obtener(`${server}.mercado`);
        if (!purchase) return message.channel.send('Elige una carta para comprar, puede ser de la tienda o del mercado')

        for (var i = 0; i < markets.length; i++) {
            var market = markets[i];
            if (purchase == markets[i].idventa) {
                if (inventario.includes(markets[i].name)) return message.channel.send('Ya tienes este cromo, no tendría sentido comprarlo, ¿No?')
                if (puntos < markets[i].value) return message.channel.send(' No tienes los suficientes puntos para comprar esta carta');
                await eco.restar(`${server}.${user}.puntos`, markets[i].value);
                await eco.push(`${server}.${user}.inventario`, market.name);
                message.reply('Has comprado ' + market.name + ' satisfactoriamente ');
                await eco.sumar(`${server}.${market.vendedorid}.puntos`, market.value)
                message.channel.send('El vendedor ' + market.vendedor + ' ha obtenido ' + market.value + " puntos ");
                mercado.extract(`${server}.mercado`, markets[i])
            }
        }


        if (purchase == "Press" || purchase == "press") {
            if (inventario.includes('Cromo de Press')) return message.channel.send('Ya tienes este cromo, no tendría sentido comprarlo, ¿No?')
            if (puntos < 500) return message.channel.send(' No tienes los suficientes puntos para comprar esta carta');
            await eco.restar(`${server}.${user}.puntos`, 500);
            await eco.push(`${server}.${user}.inventario`, "Cromo de Press");
            message.channel.send('¡Enhorabuena, has comprado el cromo de Press!')
        }
        if (purchase === "Soker" || purchase == 'soker') {
            if (inventario.includes('Cromo de Soker')) return message.channel.send('Ya tienes este cromo, no tendría sentido comprarlo, ¿No?')
            if (puntos < 500) return message.channel.send(' No tienes los suficientes puntos para comprar esta carta');
            await eco.restar(`${server}.${user}.puntos`, 500);
            await eco.push(`${server}.${user}.inventario`, "Cromo de Soker");
            message.channel.send('¡Enhorabuena, has comprado el cromo de Soker!')
        }

        if (purchase === "Gladoop") {
            if (inventario.includes('Cromo de Gladoop')) return message.channel.send('Ya tienes este cromo, no tendría sentido comprarlo, ¿No?')
            if (puntos < 500) return message.channel.send(' No tienes los suficientes puntos para comprar esta carta');
            await eco.restar(`${server}.${user}.puntos`, 500);
            await eco.push(`${server}.${user}.inventario`, "Cromo de Gladoop");
            message.channel.send('¡Enhorabuena, has comprado el cromo de Gladoop!')
        }

        if (purchase === "gladoop") {
            if (inventario.includes('Cromo de Gladoop')) return message.channel.send('Ya tienes este cromo, no tendría sentido comprarlo, ¿No?')
            if (puntos < 500) return message.channel.send(' No tienes los suficientes puntos para comprar esta carta');
            await eco.restar(`${server}.${user}.puntos`, 500);
            await eco.push(`${server}.${user}.inventario`, "Cromo de Gladoop");
            message.channel.send('¡Enhorabuena, has comprado el cromo de Gladoop!')
        }




        if (purchase === "GY2017") {
            if (inventario.includes('Cromo de GY2017')) return message.channel.send('Ya tienes este cromo, no tendría sentido comprarlo, ¿No?')
            if (puntos < 500) return message.channel.send(' No tienes los suficientes puntos para comprar esta carta');
            await eco.restar(`${server}.${user}.puntos`, 1000);
            await eco.push(`${server}.${user}.inventario`, "Cromo de GY2017");
            message.channel.send('¡Enhorabuena, has comprado el cromo `Moments` de Gamergy 2017!')
        }


        if (purchase === "gy2017") {
            if (inventario.includes('Cromo de GY2017')) return message.channel.send('Ya tienes este cromo, no tendría sentido comprarlo, ¿No?')
            if (puntos < 500) return message.channel.send(' No tienes los suficientes puntos para comprar esta carta');
            await eco.restar(`${server}.${user}.puntos`, 1000);
            await eco.push(`${server}.${user}.inventario`, "Cromo de GY2017");
            message.channel.send('¡Enhorabuena, has comprado el cromo `Moments` de Gamergy 2017!')
        }

        if (purchase === "FlipinLeyend") {
            if (inventario.includes('Cromo de FlipinLeyenda')) return message.channel.send('Ya tienes este cromo, no tendría sentido comprarlo, ¿No?')
            if (puntos < 500) return message.channel.send(' No tienes los suficientes puntos para comprar esta carta');
            await eco.restar(`${server}.${user}.puntos`, 1500);
            await eco.push(`${server}.${user}.inventario`, "Cromo de FlipinLeyenda");
            message.channel.send('¡Enhorabuena, has comprado el cromo `Legendario` de Flipin!')
        }

        if (purchase === "flipinleyend") {
            if (inventario.includes('Cromo de FlipinLeyenda')) return message.channel.send('Ya tienes este cromo, no tendría sentido comprarlo, ¿No?')
            if (puntos < 500) return message.channel.send(' No tienes los suficientes puntos para comprar esta carta');
            await eco.restar(`${server}.${user}.puntos`, 1500);
            await eco.push(`${server}.${user}.inventario`, "Cromo de FlipinLeyenda");
            message.channel.send('¡Enhorabuena, has comprado el cromo `Legendario` de Flipin!')
        }


    }

}