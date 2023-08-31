const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildScheduledEventCreate,
    once: false,
    async execute(guildScheduledEvent) {
        console.log(`Received GuildScheduledEventCreate: \n${guildScheduledEvent}`);
        
        let event;
        if ('name' in guildScheduledEvent) {
            event = guildScheduledEvent;
        } else {
            event = await guild.scheduledEvents.fetch({guildScheduledEvent: guildScheduledEvent.id, force: true});
        }
        console.log(event);

        const eventName = event.name;

        // Create a role corresponding to this scheduled event
            // role_name = Event name + hash of encrypted event name
            // role_id = guildScheduledEvent.guild.roles.create(role_name, mentionable=true)
        const role = await guild.roles.create({ name: eventName, mentionable: true});
        console.log(`Created role: ${role}`);

        // Add the event creator to the role
            // creator_user_id = guildScheduledEvent.creator.id
            // creator_member = guildScheduledEvent.guild.members.fetch(creator_user_id)
            // creator_member.roles.add(role_id)
        // const creator = await guild.members.fetch(guildScheduledEvent.creator.id);
        // console.log(`Adding creator ${creator} to role...`)
        // await creator.roles.add(role);
        console.log(`Finished GuildScheduledEventCreate`)
    },
};
