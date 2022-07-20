const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    aliases: ['p'],

    run: async (client, message, args) => {
        let ping = client.ws.ping
        message.reply(`Calculando seu ping...`).then(msg => {
            setTimeout(() => {
                msg.edit(`Pong! Ping calculado: ${ping >= 999 ? '+999' : ping}`)
            }, 2000);
        })
    }
}