
const Discord = require('discord.js');
const megadb = require("megadb");
const pagination = require('discord.js-pagination')
let eco = new megadb.crearDB("economia");


module.exports = {
    name: "album",
    alias: [],

    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        let server = message.guild.id
        let user = message.author.id
        let usuario = message.author.tag
        let mencionado = message.mentions.members.first()


        const puntos = await eco.obtener(`${server}.${user}.puntos`);
        const inventario = await eco.obtener(`${server}.${user}.inventario`);

        if (!eco.tiene(`${server}.${user}.puntos`)) {
            return message.channel.send('Primero usa el comando start, si no, ¿Dónde guardaré tus puntos y tus cromos?')
        }

        if (mencionado) {
            let idmencionado = message.mentions.members.first().id
            const inventariomencionado = await eco.obtener(`${server}.${idmencionado}.inventario`);

            if (!inventariomencionado) return message.channel.send('Este usuario no se encuentra en nuestra base de datos')

            for (i = 0; i < 1; i++) {
                if (inventariomencionado.includes('Cromo de Soker')) {
                    var page1 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/6lCSE68.png")

                } else {
                    var page1 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Vaircus')) {
                    var page2 = new Discord.MessageEmbed()
                        .setImage("https://i.ibb.co/frrSBwQ/2.png")
                } else {
                    var page2 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Press')) {
                    var page3 = new Discord.MessageEmbed()
                        .setImage("https://i.ibb.co/K0jmFXt/3.png")
                } else {
                    var page3 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Hadess')) {
                    var page4 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/n0E5i7j.png")
                } else {
                    var page4 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Rogerzz')) {
                    var page5 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/xehL65M.png")
                } else {
                    var page5 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de FlowX')) {
                    var page6 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/6yRB3z4.png")
                } else {
                    var page6 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Ezetapsss')) {
                    var page7 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/2YixXsP.png")
                } else {
                    var page7 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de OMG')) {
                    var page8 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/z0htkZm.png")
                } else {
                    var page8 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Kaeryka')) {
                    var page9 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/4m0B4M8.png")
                } else {
                    var page9 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Miiro')) {
                    var page10 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/59pdkaq.png")
                } else {
                    var page10 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Goyo')) {
                    var page11 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/8HVDBcD.png")
                } else {
                    var page11 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Falconzz')) {
                    var page12 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/93oH7tT.png")
                } else {
                    var page12 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Sil3nt')) {
                    var page13 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/v4ylvze.png")
                } else {
                    var page13 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Chiky')) {
                    var page14 = new Discord.MessageEmbed()
                        .setImage("https://i.ibb.co/fYtQ5w2/14.png")
                } else {
                    var page14 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Javitotti')) {
                    var page15 = new Discord.MessageEmbed()
                        .setImage("https://i.ibb.co/SJkpgvb/15.png")
                } else {
                    var page15 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de ¿?')) {
                    var page16 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/ksDMVre.png")
                } else {
                    var page16 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de ¿?¿?')) {
                    var page17 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/ksDMVre.png")
                } else {
                    var page17 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Daves')) {
                    var page18 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/uXy1ONI.png")
                } else {
                    var page18 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Milioz')) {
                    var page19 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/veJmnCO.png")
                } else {
                    var page19 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Manum')) {
                    var page20 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/clSczRD.png")
                } else {
                    var page20 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Daan')) {
                    var page21 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/b4DBp1U.png")
                } else {
                    var page21 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Dheylo')) {
                    var page22 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/qwZCZH8.png")
                } else {
                    var page22 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de Gladoop')) {
                    var page23 = new Discord.MessageEmbed()
                        .setImage("https://i.imgur.com/GJlV3SB.png")
                } else {
                    var page23 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de GY2017')) {
                    var page24 = new Discord.MessageEmbed()
                        .setImage("https://i.ibb.co/VmqwSs4/momentos.png")
                } else {
                    var page24 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }

                if (inventariomencionado.includes('Cromo de FlipinLeyenda')) {
                    var page25 = new Discord.MessageEmbed()
                        .setImage("https://i.ibb.co/Cwt4txn/carta-leyenda.png")
                } else {
                    var page25 = new Discord.MessageEmbed()
                        .setImage('https://i.imgur.com/z0htkZm.png')
                }


                const pages = [
                    page1, page2, page3, page4, page5, page6, page7, page8, page9, page10,
                    page11, page12, page13, page14, page15, page16, page17, page18, page19, page20,
                    page21, page22, page23, page24, page25
                ]


                const emoji = ['⬅️', "➡️"]

                const timeout = '100000'

                pagination(message, pages, emoji, timeout)

            }

        } else {

            if (isNaN(args[0])) {

                for (i = 0; i < 1; i++) {
                    if (inventario.includes('Cromo de Soker')) {
                        var page1 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/6lCSE68.png")

                    } else {
                        var page1 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Vaircus')) {
                        var page2 = new Discord.MessageEmbed()
                            .setImage("https://i.ibb.co/frrSBwQ/2.png")
                    } else {
                        var page2 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Press')) {
                        var page3 = new Discord.MessageEmbed()
                            .setImage("https://i.ibb.co/K0jmFXt/3.png")
                    } else {
                        var page3 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Hadess')) {
                        var page4 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/n0E5i7j.png")
                    } else {
                        var page4 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Rogerzz')) {
                        var page5 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/xehL65M.png")
                    } else {
                        var page5 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de FlowX')) {
                        var page6 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/6yRB3z4.png")
                    } else {
                        var page6 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Ezetapsss')) {
                        var page7 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/2YixXsP.png")
                    } else {
                        var page7 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de OMG')) {
                        var page8 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/z0htkZm.png")
                    } else {
                        var page8 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Kaeryka')) {
                        var page9 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/4m0B4M8.png")
                    } else {
                        var page9 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Miiro')) {
                        var page10 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/59pdkaq.png")
                    } else {
                        var page10 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Goyo')) {
                        var page11 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/8HVDBcD.png")
                    } else {
                        var page11 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Falconzz')) {
                        var page12 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/93oH7tT.png")
                    } else {
                        var page12 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Sil3nt')) {
                        var page13 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/v4ylvze.png")
                    } else {
                        var page13 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Chiky')) {
                        var page14 = new Discord.MessageEmbed()
                            .setImage("https://i.ibb.co/fYtQ5w2/14.png")
                    } else {
                        var page14 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Javitotti')) {
                        var page15 = new Discord.MessageEmbed()
                            .setImage("https://i.ibb.co/SJkpgvb/15.png")
                    } else {
                        var page15 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de ¿?')) {
                        var page16 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/ksDMVre.png")
                    } else {
                        var page16 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de ¿?¿?')) {
                        var page17 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/ksDMVre.png")
                    } else {
                        var page17 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Daves')) {
                        var page18 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/uXy1ONI.png")
                    } else {
                        var page18 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Milioz')) {
                        var page19 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/veJmnCO.png")
                    } else {
                        var page19 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Manum')) {
                        var page20 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/clSczRD.png")
                    } else {
                        var page20 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Daan')) {
                        var page21 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/b4DBp1U.png")
                    } else {
                        var page21 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Dheylo')) {
                        var page22 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/qwZCZH8.png")
                    } else {
                        var page22 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de Gladoop')) {
                        var page23 = new Discord.MessageEmbed()
                            .setImage("https://i.imgur.com/GJlV3SB.png")
                    } else {
                        var page23 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de GY2017')) {
                        var page24 = new Discord.MessageEmbed()
                            .setImage("https://i.ibb.co/VmqwSs4/momentos.png")
                    } else {
                        var page24 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }

                    if (inventario.includes('Cromo de FlipinLeyenda')) {
                        var page25 = new Discord.MessageEmbed()
                            .setImage("https://i.ibb.co/Cwt4txn/carta-leyenda.png")
                    } else {
                        var page25 = new Discord.MessageEmbed()
                            .setImage('https://i.imgur.com/z0htkZm.png')
                    }


                    const pages = [
                        page1, page2, page3, page4, page5, page6, page7, page8, page9, page10,
                        page11, page12, page13, page14, page15, page16, page17, page18, page19, page20,
                        page21, page22, page23, page24, page25
                    ]

                    const emoji = ['⬅️', "➡️"]

                    const timeout = '100000'

                    pagination(message, pages, emoji, timeout)

                } return
            }
        }

    }
}



