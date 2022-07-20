const Discord = require('discord.js');
const client = new Discord.Client({intents: 32767});
const config = require('./config.json');
const fs = require('fs');

client.on('ready', () => {
    console.log("BOT Online!")
})

client.on('message', (message) => {
    if(message.content == "ping") {
        message.channel.send("Pong!")
    }
})

client.login(config.token)