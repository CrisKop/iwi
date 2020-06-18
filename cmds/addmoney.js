const MeowDB = require("meowdb");
const cooldowns = new MeowDB({
    dir: __dirname,
    name: "../databases/cooldowns"
});
const moneydb = new MeowDB({
    dir: __dirname,
    name: "../databases/money"
});
const moment = require('moment');
exports.run = async(client, message, args, Discord) =>{
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Uh :c, Necesitas administrador para añadir dinero a algien.");
  
    let xde = args.join(" ") || message.author.tag;
  let usuario = message.mentions.members.first() || message.guild.members.find(u => new RegExp(`${xde}`, "gim").test(u.user.tag.toLowerCase())) || message.guild.members.get(args[0]);
    let cantidad1 = args[1];
 
  let guardado;
  if(args[2]) {
  guardado = args[2];
  } else {
  guardado = "cash"
  }
  
  if(!usuario) return message.channel.send("Escribe la id o menciona al usuario al que le quieres agregar dinero :p");
  if(!args[0]) return message.channel.send("Escribe la id o menciona al usuario al que le quieres agregar dinero :p");
  
  if(!cantidad1) return message.channel.send("Necesito que me digas cuanto quieres agregarle a **"+ usuario.user.tag+"**");
  
  if(isNaN(cantidad1)) return message.channel.send("Los numeros no llevan letras :'p") 
  
  if(cantidad1 < 1) return message.channel.send("Si quieres remover dinero a alguien usa el comando `removemoney` :p")
   let cantidad = parseFloat(cantidad1);
   let object = moneydb.create(`${message.guild.id}.${usuario.user.id}`, {
    nametag: `${usuario.user.username}#${usuario.user.discriminator}`,
      id: `${usuario.user.id}`,
    totalmoney: 0,
    cash: 0,
    bank: 0
});

  if(guardado === "cash") {
  let tuObjeto = await moneydb.get(`${message.guild.id}.${usuario.user.id}`);
        tuObjeto.totalmoney += cantidad
        tuObjeto.cash += cantidad
         tuObjeto.save();
    return message.channel.send(`Agregados <:coin:716941705793765377>${args[1]} a el efectivo de **${usuario.user.tag}**`)
  } else if (guardado === "bank"){
      let tuObjeto2 = await moneydb.get(`${message.guild.id}.${usuario.user.id}`);
        tuObjeto2.totalmoney += cantidad
        tuObjeto2.bank += cantidad
         tuObjeto2.save();
     return message.channel.send(`Agregados <:coin:716941705793765377>${args[1]} a el banco de **${usuario.user.tag}**`)
  } else if (guardado !== "cash" || "bank") {
   return message.channel.send("Solo puedes agregar dinero al bank o al cash :)");
  }}