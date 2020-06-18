exports.run = async(client, message, args, Discord) =>{
   if(message.author.id !== "618633182241357834") return;
  let codigo = args.join(" ")
 
  if(!codigo) return message.channel.send('Pon la id de un servidor')
  try{
  let codigoArmado = client.guilds.get(`${codigo}`)
  message.channel.send( new Discord.RichEmbed()
                      .setTitle('Comando ServerId')
                       .addField('ID:', '```js\n' + codigo + '```')
                       .addField(`Resultado`, '```js\n' + codigoArmado.name + '```')
                      )
  }catch(error){
   message.channel.send("No estoy en ese servidor.")
  }
}
