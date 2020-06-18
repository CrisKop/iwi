exports.run = async(client, message, args, Discord) =>{
   if(message.author.id !== "618633182241357834") return;
  let codigo = args.join(" ")
  if(codigo.toLowerCase().includes("process.env")) return;
   if(codigo.toLowerCase().includes("client.token")) return;
  if(!codigo) return message.channel.send('Pon un codigo')
  try{
  let codigoArmado = eval(codigo);
  message.channel.send( new Discord.RichEmbed()
                      .setTitle('Comando eval')
                       .addField('Código', '```js\n' + codigo + '```')
                       .addField(`Resultado`, '```js\n' + codigoArmado + '```')
                      )
  }catch(error){
   message.channel.send('`Error`' +'\n```js\n' + error + '```')
                      
  }
}
