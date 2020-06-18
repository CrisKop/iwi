const MeowDB = require("meowdb");
const prefixies = new MeowDB({
    dir: __dirname,
    name: "../databases/prefixies"
});
exports.run = async(client, message, args, Discord) =>{
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Uh :c, Necesitas administrador para cambiar mi prefix en este servidor.");
  
  if(!args[0]) return message.channel.send('Agrega un prefix para hacer el cambio.')
  if(args[1]) return message.channel.send('El prefix no puede tener espacios, perdón.')
 await prefixies.set(`${message.guild.id}`, args[0])
  await message.channel.send('Prefix cambiado a: `'+args[0]+"`");
}