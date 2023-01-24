const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const megadb = require("megadb");
const eco = new megadb.crearDB('economia');
//const predict = new megadb.crearDB('predicts');
const predict = require("../mega_databases/predicts.json")

module.exports = {
    name: "addpredict",
    alias: [],
    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;

        let Admin = message.member.roles.cache.has("276801339990867968");
        const perms = message.member.permissions.has('ADMINISTRATOR') || Admin;


        if (perms) {

            const partido = args[0];
            const tiempo = args[1];


            const fin = new Date();
            fin.setMinutes(fin.getMinutes() + parseInt(tiempo));

            if (!predict[partido]) {
                predict[partido] = {
                    horafin: fin,
                    apuestas: []

                }
                fs.writeFile("./mega_databases/predicts.json", JSON.stringify(predict), err => {
                    if (err) throw console.log(err);
                });
            } else {
                message.channel.send("El partido ya fue creado");
                return;
            }

            let hora = fin.getHours();
            let minutos = fin.getMinutes();
            if (fin.getMinutes() < 10) {
                minutos = 0 + "" + fin.getMinutes();
            }

            const predictEmbed = new Discord.MessageEmbed()
                .setTitle("Nueva predicción")
                .setColor("ORANGE")
                .setDescription(`Partido: ${partido}, la predicción cierra a las: ${hora}:${minutos} CEST`)
                .addField("INFO", "Solo puedes hacer una predicción a un equipo, no puedes reembolsar los puntos")
                .setTimestamp()
            client.channels.cache.get("882996351464513556").send(predictEmbed);
            //   client.channels.cache.get("877512754028740659").send(`An Admin used the command Add Predict. Admin: <@${message.author.id}>, Match: ${partido}, Time: ${tiempo}`);
        } else {
            message.channel.send("No tienes permisos");
        }
    }
}