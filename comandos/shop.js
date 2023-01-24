const Discord = require('discord.js');

module.exports = {
    name: "shop",
    alias: [],


    async execute(client, message, args) {
        if (!message.content.startsWith("*")) return;
        const embed = new Discord.MessageEmbed()
            .setTitle(':small_orange_diamond:  ALIEN SHOP  :small_orange_diamond:')
            // .setThumbnail('https://i.ibb.co/MBp3sL6/AVATARCOMMUNITY.png?size=2048')
            .setThumbnail('https://i.ibb.co/jGgb72D/AVATARCOMMUNITY-1.png')
            .addFields(
                { name: 'Carta `Moments` Gamergy 2017 - 1000 puntos', value: '!buy GY2017 para comprarla' },
                { name: 'Carta `Legendaria` de Flipin  - 1500 puntos', value: '!buy FlipinLeyend para comprarla' },
                { name: 'Carta de Press - 500 puntos', value: "!buy Press para comprarla" },
                { name: 'Carta de Soker - 500 puntos', value: '!buy Soker para comprarla' },
                { name: 'Carta de Gladoop - 500 puntos', value: '!buy Gladoop para comprarla' }

            )
            .setImage('https://i.ibb.co/VJRCT8P/shop.png')
            //   .addField('Carta de Press :small_orange_diamond: -  500 puntos', '!buy Press para comprarla')

            // .addField('Carta de Soker :x6: - 500 puntos', '!buy Soker para comprarla')

            //            .addField('Carta de Gladoop - 500 puntos', '!buy Gladoop para comprarla')

            //          .addField('Carta `Moments` Gamergy 2017 - 1000 puntos', '!buy GY2017 para comprarla')

            //     .addField('Carta `Legendaria` de Flipin  - 1500 puntos', '!buy FlipinLeyend para comprarla')

            // .setDescription("Caja pequeña - ?? puntos \n \n Caja mediana - ?? puntos \n\n Caja grande - ?? puntos \n\n Camiseta oficial x6tence 2020-2021 - ?? puntos \n\n Bufanda x6tence 2020-2021 - ?? puntos \n\n Alfombrilla x6 M900 - ?? puntos \n\n Alfombrilla x6 M45 - ?? puntos \n\n Mascarilla x6tence - ?? puntos \n\n Snapback x6tence - ?? puntos \n\n Taza x6tence - ?? puntos \n\n Floorpad x6tence - ?? puntos \n\n Jugar con un pro - ?? puntos \n\n Jugar con un influencer - ?? puntos")
            .setColor("YELLOW")
        return message.channel.send(embed)
    }

}