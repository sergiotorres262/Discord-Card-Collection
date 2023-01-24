const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');
const megadb = require("megadb");
const { execute } = require('./inventory');
let eco = new megadb.crearDB("economia");
let used = new Map();
const duration = require('humanize-duration')

let preguntas = [
    {
        title: "Como se llama Flipin (recuerda, pon el número de la opción que creas correcta en el canal en el que has escrito el comando, no escribas la respuesta)",
        options: ["Antonio Rivas Del Rey", "Antonio Rivas El Rey", "Antonio Rivas Del Olmo", "Antonio Del Rey Rivas"],
        correct: 1


    },
    {
        title: "En que año se fundo x6tence  (recuerda, pon el número de la opción que creas correcta en el canal en el que has escrito el comando, no escribas la respuesta)",
        options: ["2005", "2003", "2002", "2004"],
        correct: 4

    },
    {
        title: "Quien es el actual entrenador de csgo de x6tence  (recuerda, pon el número de la opción que creas correcta en el canal en el que has escrito el comando, no escribas la respuesta)",
        options: ["No tienen", "Ditello", "Soker", "Flip1n"],
        correct: 3

    },
    {
        title: "Que embajadores tiene actualmente x6tence en fornite  (recuerda, pon el número de la opción que creas correcta en el canal en el que has escrito el comando, no escribas la respuesta)",
        options: ["Daan y Daves", "Gladoop y Dheylo", "Lolito y OhTedi", "Rodriber y Turquia"],
        correct: 2

    },
    {
        title: "Que jugadores competitivo tiene actualmente x6tence en Warzone  (recuerda, pon el número de la opción que creas correcta en el canal en el que has escrito el comando, no escribas la respuesta)",
        options: ["Flip1n y Lolito", "TonoLaOveja y Chiky", "JaviToTi y Chiky", "Kaeryka y JaviToTi"],
        correct: 3

    },
    {
        title: "Quien fue el ultimo jugador de x6tence en entrar al actual roster  (recuerda, pon el número de la opción que creas correcta en el canal en el que has escrito el comando, no escribas la respuesta)",
        options: ["Ezetaps", "Hadess", "Press", "Entraron todos a la vez"],
        correct: 1

    },
    {
        title: "Cual es el nombre completo de la gran estrella de NIP Plopski, canterano de x6tence  (recuerda, pon el número de la opción que creas correcta en el canal en el que has escrito el comando, no escribas la respuesta)",
        options: ["Nicolas Fernandez Zamora", "Nicolas Gonzaléz Zamora", "Nicolas Zamora Fernandez", "Nicolas Zamora Gonzaléz"],
        correct: 2

    },
    {
        title: "Que evento es el ultimo que visito x6tence con su gran stand  (recuerda, pon el número de la opción que creas correcta en el canal en el que has escrito el comando, no escribas la respuesta)",
        options: ["Gamergy", "DreamHack Valencia", "Madrid Games Week", "Nice One Barcelona"],
        correct: 4

    },







]

module.exports = {
    name: "trivial",
    alias: [],

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag
        const cooldown = used.get(user)

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        //cooldown
        if (cooldown) {
            const restante = duration(cooldown - Date.now(), { units: ['h', 'm'], round: true, language: "es" });
            return message.reply(`Tienes que esperar ${restante} antes de volver a usar este comando`)

        } else {
            const inventario = await eco.obtener(`${server}.${user}.inventario`);
            const puntos = await eco.obtener(`${server}.${user}.puntos`);


            if (isNaN(args[0])) {
                let solonumeros = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                    .setDescription(" `? | Escribe la cantidad que quieras apostar`")
                    .setColor("ORANGE")
                    .setFooter(" Tienes un total de " + puntos + " puntos en efectivo")
                return message.channel.send(solonumeros)
            }

            if (args[0] > puntos) {
                let menorque = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                    .setDescription(" ` No puedes apostar más dinero del que tienes...xd`")
                    .setColor("ORANGE")
                return message.channel.send(menorque)
            }

            if (args[0] > 301) {
                let menorque = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                    .setDescription(" ` No puedes apostar más de 300 puntos `")
                    .setColor("ORANGE")
                return message.channel.send(menorque)
            }

            eco.restar(`${server}.${user}.puntos`, args[0]);

            let q = preguntas[Math.floor(Math.random() * (preguntas.length))];
            let i = 0;
            const embed = new MessageEmbed()
                .setTitle(q.title)
                .setDescription(q.options.map(opt => {
                    i++;
                    return `${i} - ${opt}\n`
                }))

                .setColor('ORANGE')
                .setFooter('Responde este mensaje con el número de la respuesta correcta. Tienes 30 segundos para responder')
            message.author.send(embed)

                .then(async (msg) => {
                    try {
                        let msg = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: 30000, max: 1, errors: ["time"] })
                        if (parseInt(msg.first().content) == q.correct) {
                            const victoria = args[0] * 2
                            eco.sumar(`${server}.${user}.puntos`, victoria);
                            return message.author.send('¡Respuesta correcta, eres un máquina. Has ganado ' + victoria + ' puntos!')
                        } else {
                            return message.author.send('Respuesta incorrecta, más suerte la próxima vez')
                        }
                    } catch (e) {
                        return message.author.send('¡No has respondido!');
                    } // Si se envió correctamente el mensaje a su dm 
                })
                .catch(() => {
                    return message.channel.send(`No puedo enviarte un MD porque tienes deshabilitados los mensajes directos provenientes de miembros del servidor`)
                })
            used.set(user, Date.now() + 14400000);
            setTimeout(() => { used.delete(user); }, 14400000);
        }





    }



}
