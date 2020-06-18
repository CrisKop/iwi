exports.run = async(client, message, args, Discord) =>{
  let bugcanal = client.channels.get('717441068777603144');
  
  if(!args[0]) return message.reply("Escribe una sugerencia para sugerirla :p")
  message.author.send('Gracias por sugerir! Puedes ver tu sugerencia en https://discord.gg/kSXhvCa');
  message.reply('Gracias por sugerir!');
  
 bugcanal.send(new Discord.RichEmbed()
                      .setAuthor(`Nueva sugerencia de ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL)
                 .addField(`Servidor`, `${message.guild.name} (${message.guild.id})`)
                      .addField(`Sugerencia:`, `${args.join(' ')}`)
                         .setColor(0x24caf0)
                      )
}