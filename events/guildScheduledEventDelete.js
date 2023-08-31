const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildScheduledEventDelete,
    once: false,
    async execute(guildScheduledEvent) {
        console.log(`Received GuildScheduledEventDelete: `);
        console.log(guildScheduledEvent);
        
        let event;
        if ('name' in guildScheduledEvent) {
            event = guildScheduledEvent;
        } else {
            event = await guild.scheduledEvents.fetch({guildScheduledEvent: guildScheduledEvent.id, force: true});
        }
        console.log(event);

        const roleName = event.name;
        console.log(`Looking for role ${roleName}`);
        const role = (await guild.roles.fetch()).find(r => r.name === roleName);
        console.log(role);
        guild.roles.delete(role.id)
        console.log(`Deleted role: ${role}`);
    },
};