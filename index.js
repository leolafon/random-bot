require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content.startsWith('/rand')) {
    const args = msg.content.split(' ');
    if (args.length != 3) {
      return msg.reply('Usage: /rand min max');
    }
    try {
      const min = parseInt(args[1], 10);
      const max = parseInt(args[2], 10);
      const result = Math.round(Math.random() * (max - min) + min);
      return msg.reply(result.toString());
    } catch (error) {
      return msg.reply('Usage: /rand min max');
    }
  }
})

client.login(process.env.BOT_TOKEN);
