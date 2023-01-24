const Client = require('discord.js');
const megadb = require('megadb');
const eco = new megadb.crearDB('economia');
const { PuntosFunc } = require('./PuntosFunc.js');
const fs = require('fs');
const { readdirSync } = require('fs');

const prefix = '*';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

for (const file of readdirSync(`./eventos/`)) {
  if (file.endsWith('.js')) {
    const fileName = file.substring(0, file.length - 3);
    const fileContents = require(`./eventos/${file}`);
    client.on(fileName, fileContents.bind(null, client));
  }
}

client.on('message', async (message) => {
  if(!message.content.startsWith(prefix)) {
     PuntosFunc(message)
   }
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  const command = args.shift().toLowerCase();

  const cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if (cmd) {
    cmd.execute(client, message, args);
  }
});

client.once('ready', () => {
  console.log('Estoy listo!');
});

client.login('ODI1Njg4ODE3MDM3MjEzNzE3.YGBkog.4zV703ZPElDqsFiYgmoTsFCRk_M');