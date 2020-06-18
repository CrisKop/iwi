const MeowDB = require("meowdb");
const blacklist = new MeowDB({
    dir: __dirname,
    name: "../databases/blacklist"
});
exports.run = async(client, message, args, Discord) =>{
     if(message.author.id !== "618633182241357834") return;
  if(!args[0]) return message.channel.send('...');
  if(isNaN(args[0])) return message.channel.send('Id invalida');
  if(args[0] === "618633182241357834") return message.channel.send("uh");
  if(!args.slice(1).join(" ")) return message.channel.send('Una razón?')
  

  
  if(await blacklist.get(args[0]) !== undefined) return message.channel.send('Esa id ya está en la blacklist.');
  
  await blacklist.set(`${args[0]}.id`, args[0]);
  await blacklist.set(`${args[0]}.razon`, args.slice(1).join(" "));
  
  return await message.channel.send(`Agregado a **${args[0]}** a mi blacklist.`)
  
}