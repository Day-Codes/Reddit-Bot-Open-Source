//client.guilds.cache.get("GUILD_ID").channels.cache.get("CHANNEL_ID").send()

const { client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
module.exports = {
    name: "open-staffmeeting",
   nodefer: false,
    category: ":beginner: Info",
    description: "staff meeting",
    type: 'CHAT_INPUT',
  options: [
        {
          name: "host",
          description: "who is hosting?",
          type: "USER",
          required: true,
        },
      {
          name: "cohost",
          description: "co-host if non do `N/A`",
          type: "USER",
          required: true,
        },
         {
          name: "staffon",
          description: "what staff are going to put onto meeting",
          type: "USER",
          required: true,
        },
    ],
    
    run: async (client, interaction, args) => {

       
      
      const one = interaction.options.getUser("host")
        const two = interaction.options.getUser("staffon")
      const three = interaction.options.getUser("cohost")
        if(!interaction.member.permissions.has("MANAGE_CHANNELS")){
       return interaction.followUp("You don't have permission to do that!")
     } else {
      let msg = await interaction.followUp(`Sending..`)

   const apply = new MessageEmbed()
      .setTitle("Liberty County RP | Staff Meeting")
      .setDescription(`Meeting time! \n Meeting Host: ${one} \n Co-host: ${three} \n Member:${two} `)
     .setColor("GREEN")
      
  
client.guilds.cache.get("1041748257518403684").channels.cache.get("1051499796596277348").send({ content: "Meeting!", embeds: [apply] }).then(function (message) {
            
            message.startThread({
                name: `Staff Meeting for ${two}`,
                autoArchiveDuration: 60,
                type: 'GUILD_PRIVATE_THREAD',
                reason: 'Made For a Staff Meeting'
            });
        });;
 

          setTimeout(() => {
        msg.edit({ content:  `Meeting!`, ephemeral: true});
      }, 5000);
        }
    },     
};
