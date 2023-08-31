const fs = require('node:fs');
const path = require('node:path');
const { Client, Partials, GatewayIntentBits } = require('discord.js');
const { DISCORD_TOKEN } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildScheduledEvents], partials: [Partials.GuildScheduledEvent, Partials.User] });

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    console.log(`Registering ${event.name}...`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, async (...args) => await event.execute(...args));
    }
}

client.login(DISCORD_TOKEN);