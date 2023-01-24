const Discord = require("discord.js");
const fs = require("fs");
const megadb = require("megadb");
const eco = new megadb.crearDB("economia");
const predicts = require('../mega_databases/predicts.json')

module.exports = {
    name: "bet",
    alias: [],

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id
        const partido = args[0];
        const puntos = await eco.obtener(`${server}.${user}.puntos`);

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        if (!partido) return message.channel.send("Debes introducir un partido");
        // console.log(predicts[partido])
        if (!predicts[partido]) return message.channel.send("Partido no encontrado")

        const equipo = args[1];
        const cantidad = parseInt(args[2]);
        if (!equipo || !cantidad) return message.channel.send("Debes poner el equipo o la cantidad de monedas. `Ejemplo: !bet [partido] [equipo] [cantidad]`")
        let apostado = false;


        if (cantidad > puntos) return message.channel.send("No tienes las suficientes monedas, escribe `!bal` para ver las monedas que tienes")
        if (cantidad > 301) return message.channel.send("No puedes apostar más de 300 puntos")
        if (predicts[partido]) {
            const horaFin = new Date(predicts[partido].horafin);
            const horaActual = new Date();
            if (horaFin.getTime() >= horaActual.getTime()) {
                if (partido.split("-").includes(equipo)) {

                    for (let i = 0; predicts[partido].apuestas.length > i; i++) {
                        let apuestasID = Object.keys(predicts[partido].apuestas[i])[0];
                        if (apuestasID == user) {
                            apostado = true;
                        }
                    }

                    if (apostado == false) {
                        //for (let i = 0; Object.keys(predicFile).length > i; i++) {
                        console.log(Object.keys(predicts).join(", "))
                        console.log(typeof (Object.keys(predicts).join(", ")))
                        let partidos = Object.keys(predicts).join(", ");
                        partidos.includes(equipo);
                        console.log(partidos.includes(equipo));
                        if (partidos.includes(equipo)) {
                            predicts[partido].apuestas.push(
                                {
                                    [user]: {
                                        "coins": cantidad,
                                        "equipo": equipo
                                    }
                                });

                            fs.writeFile("./mega_databases/predicts.json", JSON.stringify(predicts), err => {
                                if (err) throw console.log(err);
                            });
                            message.channel.send("Tu predicción se hizo correctamente");
                            eco.restar(`${server}.${user}.puntos`, cantidad);
                        }
                    }
                } else {
                    message.channel.send("Ya realizaste una predicción.");
                }
            } else {
                message.channel.send("Equipo no válido");
            }
        } else {
            message.channel.send("Demasiado tarde, el tiempo para realizar la predicción ya acabó");
        }
    }
};
