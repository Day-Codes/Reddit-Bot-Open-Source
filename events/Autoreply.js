const client = require("../main");

client.on("message", (message) => {
    if (message.content === "hi") {
        message.channel.send(`Hello!`);
       message.react('<a:Hey:989231982993092628>');
    }
    if (message.content === "sad") {
        message.channel.send(`Don't Be Sad!`);
    }
   
});