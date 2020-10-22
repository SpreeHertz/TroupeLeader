const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
var prefix = '+';
var version = '2.2.0';
const queue = new Map();



client.once('ready', () => {
    console.log('Troupes is online!');
    client.user.setActivity('+about | V2.2.1 |I now work 24/7! Bot is getting remade.')
    
    
    
});





client.on('message', msg => {
    if (msg.author.bot) return undefined;
    if(msg.content.startsWith(prefix)) return undefined;

})








client.login(process.env.token);
