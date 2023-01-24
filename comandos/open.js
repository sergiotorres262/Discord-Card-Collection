const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = {
    name: "open",
    alias: [],


    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag

        const inventario = await eco.obtener(`${server}.${user}.inventario`);
        const puntos = await eco.obtener(`${server}.${user}.puntos`);

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }


        let cromosmoments = [
            {
                url: "https://i.ibb.co/VmqwSs4/momentos.png",
                name: 'Cromo momentos de Gamergy 2017',
                key: 'Cromo de GY2017'
            }
        ]

        let cromosleyenda = [
            {
                url: "https://i.ibb.co/Cwt4txn/carta-leyenda.png",
                name: 'Cromo legendario de Flipin',
                key: 'Cromo de FlipinLeyenda'
            }
        ] //legendarias

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
        let open = args.join(" ");
        if (!open) return message.channel.send('Elige un sobre para abrir\n Actualmente disponemos del pack comun')



        //abrir un sobre normal
        if (open === "pack comun") {

            if (puntos < 350) return message.channel.send(' No tienes los suficientes puntos para abrir un sobre, el sobre vale 350 puntos');
            await eco.restar(`${server}.${user}.puntos`, 350);

            var probabilidad = Math.floor(Math.random() * 100)

            const abrirsobre = new Discord.MessageEmbed()

                .setAuthor("Abriendo sobre... 😎")
                .setImage('https://i.imgur.com/svCeZKB.gif')
            message.channel.send(abrirsobre).then((msg) => {
                msg.delete({ timeout: 2500 });
            });

            //aqui están metidos todos los sobres, la carta te la da despues de que acabe la animacion de abrir sobre
            setTimeout(() => {

                if (probabilidad < 5) { //moments

                    let randomcromos = cromosmoments[Math.floor(Math.random() * cromosmoments.length)]


                    const embed = new Discord.MessageEmbed()

                        .setAuthor("Se viene opening 😎")
                        .setDescription('¡Enhorabuena, has conseguido el ' + randomcromos.name)
                        .setColor("ORANGE")
                        .setImage(randomcromos.url)
                        .setFooter('Sobre abierto por ' + message.member.displayName, message.author.displayAvatarURL())
                        .setTimestamp();
                    message.channel.send(embed)
                    if (inventario.includes('Cromo de ' + randomcromos.name)) {
                        const repetido = new Discord.MessageEmbed()
                            .setDescription('Que mala suerte ' + message.author.username + ' ya tienes este cromo...Más suerte la próxima vez. En su lugar te he dado 50 puntos')
                            .setColor('ORANGE')

                        message.channel.send(repetido)
                        return eco.push(`${server}.${user}.repetidos`, randomcromos.key);
                    }
                    eco.push(`${server}.${user}.inventario`, randomcromos.key);
                    return
                } //fin probabilidad moments

                if (probabilidad < 0.5) {


                    let randomcromos = cromosleyenda[Math.floor(Math.random() * cromosleyenda.length)]


                    const embed = new Discord.MessageEmbed()

                        .setAuthor("Se viene opening 😎")
                        .setDescription('¡Enhorabuena, has conseguido el ' + randomcromos.name)
                        .setColor("ORANGE")
                        .setImage(randomcromos.url)
                        .setFooter('Sobre abierto por ' + message.member.displayName, message.author.displayAvatarURL())
                        .setTimestamp();
                    message.channel.send(embed)
                    if (inventario.includes('Cromo de ' + randomcromos.name)) {
                        const repetido = new Discord.MessageEmbed()
                            .setDescription('Que mala suerte ' + message.author.username + ' ya tienes este cromo...Más suerte la próxima vez. En su lugar te he dado 50 puntos')
                            .setColor('ORANGE')

                        message.channel.send(repetido)
                        return eco.push(`${server}.${user}.repetidos`, randomcromos.key);
                    }
                    eco.push(`${server}.${user}.inventario`, randomcromos.key);

                    return;


                }// fin cromos leyenda

                let randomcromos = cromoscomunes[Math.floor(Math.random() * cromoscomunes.length)]

                const embed = new Discord.MessageEmbed()

                    .setAuthor("Se viene opening 😎")
                    .setDescription('¡Enhorabuena, has conseguido el ' + randomcromos.name)
                    .setColor("ORANGE")
                    .setImage(randomcromos.url)
                    .setFooter('Sobre abierto por ' + message.member.displayName, message.author.displayAvatarURL())
                    .setTimestamp();
                message.channel.send(embed)
                if (inventario.includes('Cromo de ' + randomcromos.name)) {
                    const repetido = new Discord.MessageEmbed()
                        .setDescription('Que mala suerte ' + message.author.username + ' ya tienes este cromo...Más suerte la próxima vez. En su lugar te he dado 50 puntos')
                        .setColor('ORANGE')

                    message.channel.send(repetido)
                    return eco.push(`${server}.${user}.repetidos`, randomcromos.key);
                }
                eco.push(`${server}.${user}.inventario`, randomcromos.key);
                return

            }, 3000) // fin de la función con timeout

        }//fin open sobre normal



    }//fin async execute
}//fin module.exports
