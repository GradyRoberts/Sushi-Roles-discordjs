const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildScheduledEventUserAdd,
    once: false,
    async execute(guildScheduledEvent, user) {
        console.log(`Received GuildScheduledEventUserAdd`);
        console.log(guildScheduledEvent);
        if (user.partial) { 
            await user.fetch();
            console.log(`Fetched user: `);
            console.log(user);
        } else {
            console.log(`Using user: `);
            console.log(user);
        }

        const guild = guildScheduledEvent.guild;
        console.log(`Using guild: ${JSON.stringify(guild)}`);

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

        const member = await guild.members.fetch(user.id);
        await member.roles.add(role.id);
        console.log("Finished GuildScheduledEventUserAdd");
    },
};