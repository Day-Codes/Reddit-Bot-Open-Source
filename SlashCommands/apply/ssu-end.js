//client.guilds.cache.get("GUILD_ID").channels.cache.get("CHANNEL_ID").send()

const { client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
module.exports = {
    name: "end-ssu",
   nodefer: false,
    category: ":beginner: Info",
    description: "end a ssu",
    type: 'CHAT_INPUT',
  options: [
        {
          name: "host",
          description: "who is hosting?",
          type: "STRING",
          required: true,
        },
       
    ],
    
    run: async (client, interaction, args) => {

       
      
      const one = interaction.options.getString("host")
       if(!interaction.member.permissions.has("MANAGE_CHANNELS")){
       return interaction.followUp("You don't have permission to do that!")
     } else {
           
      let msg = await interaction.followUp(`Sending..`)

   const apply = new MessageEmbed()
      .setTitle("Liberty County RP | SSU End")
      .setDescription(`Hello! Liberty County Rper's, \n Right now thr  SSU is Over ! \n Host: ${one} \n \n \n Signed, \n AI Robot | SSU Manager`)
     .setColor("RED")
      .setFooter("Note: Please don't join")
  
client.guilds.cache.get("1041748257518403684").channels.cache.get("1051499745681621134").send({ embeds: [apply] });
 

          setTimeout(() => {
        msg.edit({ content:  `Ssu post has ended!`, ephemeral: true});
      }, 5000);
       }
    },     
};
