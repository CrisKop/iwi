exports.run = async(client, message, args, Discord) =>{
  if(args[0]) return;
  
  let ping = Math.floor(message.client.ping);

message.channel.send(":ping_pong: Pong!")
.then(m => {
     const embed = new Discord.RichEmbed()
     .setDescription(`:incoming_envelope: Ping Mensajes: \`${m.createdTimestamp - message.createdTimestamp} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``)
     .setColor(0x00AE86)
                
     m.edit(embed);

});
}