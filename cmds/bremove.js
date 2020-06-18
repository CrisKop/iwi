const MeowDB = require("meowdb");
const blacklist = new MeowDB({
    dir: __dirname,
    name: "../databases/blacklist"
});
exports.run = async(client, message, args, Discord) =>{
     if(message.author.id !== "618633182241357834") return;
  if(!args[0]) return message.channel.send('...');
  if(isNaN(args[0])) return message.channel.send('Id invalida');
  

  
  if(await blacklist.get(args[0]) === undefined) return message.channel.send('Esa id no está en la blacklist.');
  

  
  await blacklist.delete(`${args[0]}`);
  
  return await message.channel.send(`Fué eliminado de mi blacklist el usuario con la id ${args[0]}`)
}