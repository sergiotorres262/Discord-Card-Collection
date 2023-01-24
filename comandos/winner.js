const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const megadb = require("megadb");
const eco = new megadb.crearDB('economia');
const predicts = require('../mega_databases/predicts.json')

module.exports = {
    name: "winner",
    alias: [],

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let Admin = message.member.roles.cache.has("848232166550798386");
        const perms = message.member.permissions.has('ADMINISTRATOR') || Admin;
        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag

        if (perms) {
            let partido = args[0];
            let ganador = args[1];

            try {
                for (let i = 0; predicts[partido].apuestas.length > i; i++) {
                    let IDs = Object.keys(predicts[partido].apuestas[i])[0];
                    let equipoApostado = predicts[partido].apuestas[i][IDs].equipo;
                    let coinsApostadas = predicts[partido].apuestas[i][IDs].coins;

                    if (equipoApostado == ganador) {
                        const victoria = coinsApostadas * 2
                        eco.sumar(`${server}.${IDs}.puntos`, victoria);
                    }
                }
            } catch (e) {
                return message.channel.send('Error, has puesto mal la sintaxis del partido, ponlo bien')
            }
            delete predicts[partido];
            fs.writeFile("./mega_databases/predicts.json", JSON.stringify(predicts), err => {
                if (err) throw console.log(err);
            });

            const winnerEmbed = new Discord.MessageEmbed()
                .setTitle("¡Tenemos ganador del partido!")
                .setColor("ORANGE")
                .setDescription(`Partido: ${partido}`)
                .addField("Resultado:", `El ganador es ${ganador}`)
                .setTimestamp()
            client.channels.cache.get("882996351464513556").send(winnerEmbed);
            //  client.channels.cache.get("877512754028740659").send(`An Admin used the command Winner. Admin: <@${message.author.id}>, Match: ${partido}, Result: ${ganador}`);
        } else {
            message.channel.send("No tienes permisos para realizar este comando")
        }


    }
}
