const Discord = require('discord.js');
const client = new Discord.Client({intents: 32767});
const config = require('./config.json');
const fs = require('fs');

client.login(config.token)