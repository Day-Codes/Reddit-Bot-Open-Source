
const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
module.exports = {
    name: "ssu-denied",
   nodefer: false,
    category: ":beginner: Info",
    description: "denied user ssu",
    type: 'CHAT_INPUT',
    options: [
           {
          name: "user",
          description: "user to denied.",
          type: "USER",
          required: true,
        },
    ],
    run: async (client, interaction, args) => {
              const target = interaction.options.getUser("user")
      let msg = await interaction.followUp("Message Sent")


        
     const embed = new MessageEmbed()   
.setTitle("SSU Denied.")
.setDescription(`Hello, ${target} \n Your SSU Request has been Denied in Liberty county RP, \n Thanks, \n SSU Ai System`)
  target.send(embed)
    
 
    },     
};
/* ============================================== */
/* :star: Azury Manager • Private • Server Manager :star: */
/* Coded by discord.gg/azury Copyrighted @ Azury  */
/* ============================================== */