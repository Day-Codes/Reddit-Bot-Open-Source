//client.guilds.cache.get("GUILD_ID").channels.cache.get("CHANNEL_ID").send()

const { client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
module.exports = {
    name: "start-ssu",
   nodefer: false,
    category: ":beginner: Info",
    description: "start up a ssu",
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
          type: "STRING",
          required: true,
        },
         {
          name: "staffon",
          description: "what staff are going to modertor",
          type: "STRING",
          required: true,
        },
    ],
    
    run: async (client, interaction, args) => {

       
      
      const one = interaction.options.getString("host")
        const two = interaction.options.getString("staffon")
        if(!interaction.member.permissions.has("MANAGE_CHANNELS")){
       return interaction.followUp("You don't have permission to do that!")
     } else {
      let msg = await interaction.followUp(`Sending..`)

   const apply = new MessageEmbed()
      .setTitle("Liberty County RP | SSU Start")
      .setDescription(`Hello! Liberty County Rper's, \n Right now is a SSU! \n Host: ${one} \n Staff on: ${two} \n Game Code: gWWpF \n \n \n Signed, \n AI Robot | SSU Manager`)
     .setColor("GREEN")
      .setFooter("Note: Please listen to mods and rules.")
  
client.guilds.cache.get("1041748257518403684").channels.cache.get("1051499745681621134").send({ content: "<@&1052314356035100722>", embeds: [apply] });
 

          setTimeout(() => {
        msg.edit({ content:  `Ssu post has started!`, ephemeral: true});
      }, 5000);
        }
    },     
};
