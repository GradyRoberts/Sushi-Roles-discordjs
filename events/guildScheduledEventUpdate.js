const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildScheduledEventUpdate,
    once: false,
    async execute(oldGuildScheduledEvent, newGuildScheduledEvent) {
        console.log(`Received GuildScheduledEventUpdate: `);
        console.log(oldGuildScheduledEvent);
        console.log(newGuildScheduledEvent);

        // Rename the corresponding role to match the new event name
            // Calculate old and new role names with hash extensions
            // oldGuildScheduledEvent.guild.roles.fetch().filter(equal to old role name)
            // old_role.edit({name: 'new_name'})
    },
};