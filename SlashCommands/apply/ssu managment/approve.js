
const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
module.exports = {
    name: "ssu-approve",
   nodefer: false,
    category: ":beginner: Info",
    description: "approve a ssu",
    type: 'CHAT_INPUT',
    options: [
           {
          name: "user",
          description: "user to approve.",
          type: "USER",
          required: true,
        },
    ],
    run: async (client, interaction, args) => {
              const target = interaction.options.getUser("user")
      let msg = await interaction.followUp("Message Sent")


        
     const embed = new MessageEmbed()   
.setTitle("SSU Approve.")
.setDescription(`Hello, ${target} \n Your SSU Request has been approve in Liberty county RP, Please use /ssu-start to start your SSU, \n Thanks, \n SSU Ai System`)
  target.send(embed)
    
 
    },     
};
/* ============================================== */
/* :star: Azury Manager • Private • Server Manager :star: */
/* Coded by discord.gg/azury Copyrighted @ Azury  */
/* ============================================== */