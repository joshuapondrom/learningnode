const discord = require('discord.js');
const client = new discord.Client();

const config = require('./config.json');

client.on('message', message => {
    if (message.content ===  '!ping') {
        message.channel.send('Pong.');
    }
});

client.login(config.token);