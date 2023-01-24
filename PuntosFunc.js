/*const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let used = new Map();
const duration = require('humanize-duration')

module.exports = {
    PuntosFunc: async(message) => {
        let server = message.guild.id
        let user = message.author.id
        const cooldown = used.get(user)
        try {
            if (cooldown) {
                return;
            }else{
                await eco.sumar(`${server}.${user}.puntos`, 1);
                used.set(user, Date.now() + 7000);
                 setTimeout(() => { used.delete(user); }, 7000 );  
            }
            

        }catch(e){
            return;
        }
         
    }
}*/