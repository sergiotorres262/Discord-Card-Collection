const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = {
    name: "discard",

    async execute(client, message, args) {
        let user = message.author.id
        let usuario = message.author
        let server = message.guild.id


        let cromosmoments = [
            {
                url: "https://i.ibb.co/VmqwSs4/momentos.png",
                name: 'Cromo momentos de Gamergy 2017',
                key: 'Cromo de GY2017'
            }
        ]//moments

        let cromosleyenda = [
            {
                url: "https://i.ibb.co/Cwt4txn/carta-leyenda.png",
                name: 'Cromo legendario de Flipin',
                key: 'Cromo de FlipinLeyenda'
            }
        ] //leyenda

        let cromoscomunes = [

            {
                url: "https://i.imgur.com/6lCSE68.png",
                name: 'Cromo de Soker',
                key: 'Cromo de Soker'

            },
            {
                url: "https://i.ibb.co/frrSBwQ/2.png",
                name: 'Cromo de Vaircuss',
                key: 'Cromo de Vaircuss'

            },
            {
                url: "https://i.ibb.co/K0jmFXt/3.png",
                name: 'Cromo de Press',
                key: 'Cromo de Press'

            },
            {
                url: "https://i.imgur.com/n0E5i7j.png",
                name: 'Cromo de Hadess',
                key: 'Cromo de Hadess'
            },
            {
                url: "https://i.imgur.com/xehL65M.png",
                name: 'Cromo de Rogerzz',
                key: 'Cromo de Rogerzz'
            },
            {
                url: "https://i.imgur.com/6yRB3z4.png",
                name: 'Cromo de FlowX',
                key: 'Cromo de FlowX'
            },
            {
                url: "https://i.imgur.com/2YixXsP.png",
                name: 'Cromo de Ezetapsss',
                key: ' Cromo de Ezetapsss'
            },
            {
                url: "https://i.imgur.com/4m0B4M8.png",
                name: 'Cromo de Kaeryka',
                key: 'Cromo de Kaeryka'
            },
            {
                url: "https://i.imgur.com/59pdkaq.png",
                name: 'Cromo de Miiro',
                key: 'Cromo de Miiro'
            },
            {
                url: "https://i.imgur.com/8HVDBcD.png",
                name: 'Cromo de Goyo',
                key: 'Cromo de Goyo'
            },
            {
                url: 'https://i.imgur.com/93oH7tT.png',
                name: 'Cromo de Falconzz',
                key: 'Cromo de Falconzz'
            },
            {
                url: "https://i.imgur.com/v4ylvze.png",
                name: 'Cromo de Sil3nt',
                key: 'Cromo de Sil3nt'
            },
            {
                url: "https://i.ibb.co/fYtQ5w2/14.png",
                name: 'Cromo de Chiky',
                key: 'Cromo de Chiky'

            },
            {
                url: "https://i.imgur.com/ksDMVre.png",
                name: 'Cromo de Javitotti',
                key: 'Cromo de Javitotti'

            },
            {
                url: "https://i.imgur.com/uXy1ONI.png",
                name: 'Cromo de Daves',
                key: 'Cromo de Daves'
            },
            {
                url: "https://i.imgur.com/veJmnCO.png",
                name: 'Cromo de Milioz',
                key: 'Cromo de Milioz'
            },
            {
                url: "https://i.imgur.com/clSczRD.png",
                name: 'Cromo de Manum',
                key: 'Cromo de Manum'
            },
            {
                url: "https://i.imgur.com/b4DBp1U.png",
                name: 'Cromo de Daan',
                key: 'Cromo de Daan'
            },
            {
                url: "https://i.imgur.com/qwZCZH8.png",
                name: 'Cromo de Dheylo',
                key: 'Cromo de Dheylo'
            },
            {
                url: "https://i.imgur.com/GJlV3SB.png",
                name: 'Cromo de Gladoop',
                key: 'Cromo de Gladoop'
            }

        ]

        const discard = "Cromo de " + args[2];
        if (!discard) return message.channel.send('Elige el cromo que quieras descartarte')
        const repetidos = await eco.obtener(`${server}.${user}.repetidos`);
        for (i = 0; i < cromoscomunes.length; i++) {
            if (discard == cromoscomunes[i].key) {
                if (!repetidos.includes(discard)) return message.reply('No puedes descartar un cromo que no tienes');
                const borrar = await eco.extract(`${server}.${user}.repetidos`, discard)
                await eco.sumar(`${server}.${user}.puntos`, 50)
                message.channel.send('Has descartado el ' + cromoscomunes[i].name + ' y has conseguido 50 puntos')

            }
        }

        for (x = 0; x < cromosmoments.length; x++) {
            if (discard == cromosmoments[x].key) {
                if (!repetidos.includes(discard)) return message.reply('No puedes descartar un cromo que no tienes');
                const borrar = await eco.extract(`${server}.${user}.repetidos`, discard)
                await eco.sumar(`${server}.${user}.puntos`, 200)
                message.channel.send('Has descartado el ' + cromosmoments[x].name + ' y has conseguido 200 puntos')

            }

        }

        for (y = 0; y < cromosleyenda.length; y++) {
            if (discard == cromosleyenda[y].key) {
                if (!repetidos.includes(discard)) return message.reply('No puedes descartar un cromo que no tienes');
                const borrar = await eco.extract(`${server}.${user}.repetidos`, discard)
                await eco.sumar(`${server}.${user}.puntos`, 500)
                message.channel.send('Has descartado el ' + cromosleyenda[y].name + ' y has conseguido 500 puntos')

            }


        }
    }
}