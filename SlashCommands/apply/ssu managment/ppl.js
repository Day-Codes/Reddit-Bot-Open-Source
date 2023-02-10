
const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
module.exports = {
    name: "ssu-request",
   nodefer: false,
    category: ":beginner: Info",
    description: "request a ssu",
    type: 'CHAT_INPUT',
    options: [
           {
          name: "user",
          description: "user to host",
          type: "USER",
          required: true,
        },
    ],
    run: async (client, interaction, args) => {
              const target = interaction.options.getUser("user")
      let msg = await interaction.followUp("Message Sent")


        
     const embed = new MessageEmbed()   
.setTitle("SSU Request")
.setDescription(`Hello, ${user} \n Has requested to do a SSU \n **TO APPROVE** (Manager+) \n /ssu-approve \n **DENINE** \n /ssu-denied`)

      client.guilds.cache.get("1041748257518403684").channels.cache.get("1054841861468065902").send({ content: "<@&1051499696306278512> | <@&1051499693479317515>", embeds: [embed] )

    
 
    },     
};
/* ============================================== */
/* :star: Azury Manager • Private • Server Manager :star: */
/* Coded by discord.gg/azury Copyrighted @ Azury  */
/* ============================================== */