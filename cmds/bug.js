exports.run = async(client, message, args, Discord) =>{
  let bugcanal = client.channels.get('717441069234520134');
  
  if(!args[0]) return message.reply("Escribe un bug para reportar.")
  message.author.send('Gracias por reportar! Puedes ver tu reporte en https://discord.gg/kSXhvCa');
  message.reply('Gracias por reportar!');
  
 bugcanal.send(new Discord.RichEmbed()
                      .setAuthor(`Nuevo reporte de ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL)
                 .addField(`Servidor`, `${message.guild.name} (${message.guild.id})`)
                      .addField(`Bug:`, `${args.join(' ')}`)
                         .setColor(0x24caf0)
                      )
}