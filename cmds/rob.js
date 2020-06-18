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
  
  
  
   let xde = args.join(" ") || message.author.tag;
  let usuario = message.mentions.members.first() || message.guild.members.find(u => new RegExp(`${xde}`, "gim").test(u.user.tag.toLowerCase())) || message.guild.members.get(args[0]);

  
  if(!usuario) return message.channel.send("Escribe la id o menciona al usuario al que le quieres robarle dinero >:)");
   if(!args[0]) return message.channel.send("Escribe la id o menciona al usuario al que le quieres robarle dinero >:)");

  let timeoutwork = Date.now() + 43200000

   let object = moneydb.create(`${message.guild.id}.${usuario.user.id}`, {
    nametag: `${usuario.user.username}#${usuario.user.discriminator}`,
       id: `${usuario.user.id}`,
    totalmoney: 0,
    cash: 0,
    bank: 0
});
   let object1 = moneydb.create(`${message.guild.id}.${message.author.id}`, {
    nametag: `${message.author.username}#${message.author.discriminator}`,
       id: `${message.author.id}`,
    totalmoney: 0,
    cash: 0,
    bank: 0
});
  
  let usuariocooldown = await cooldowns.get(`${message.guild.id}.${message.author.id}.rob`);
  
  
  if(await cooldowns.get(`${message.guild.id}.${message.author.id}.rob`) === undefined) { 
    let timeoutwork = Date.now() + 43200000
  let object2 = cooldowns.create(`${message.guild.id}.${message.author.id}`, {
    work: "",
   crime: "",
    daily: "",
    mine: "",
    rob: `${timeoutwork}`
});
 let dinero = await moneydb.get(`${message.guild.id}.${message.author.id}.totalmoney`);
     let dinero2 = await moneydb.get(`${message.guild.id}.${usuario.user.id}.cash`);
  

   let ganaroperder1 = ["Perdiste", "Perdiste", "Ganaste"];
    let ganaroperder = Math.floor((Math.random() * ganaroperder1.length));
  
      if(ganaroperder1[ganaroperder] === "Perdiste") {

var losing = Math.round((22 / 100) * dinero)

//Alert it out for demonstration purposes.
  
let object2 = cooldowns.set(`${message.guild.id}.${message.author.id}.rob`, timeoutwork)
 let dineroxd = await moneydb.get(`${message.guild.id}.${usuario.user.id}.cash`);
        if(dineroxd < 1)   return message.channel.send(`**${usuario.user.tag}** no tenia dinero en efectivo para robarle, así que no has robado nada :c`)
   let tuObjeto1 = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto1.totalmoney -= losing
        tuObjeto1.cash -= losing
         tuObjeto1.save();
    return message.channel.send(`Le has intentado robar a **${usuario.user.tag}**, pero has perdido <:coin:716941705793765377>${losing}`)
      } else {
        var wining = Math.round((30 / 100) * dinero2)

//Alert it out for demonstration purposes.
        let object2 = cooldowns.set(`${message.guild.id}.${message.author.id}.rob`, timeoutwork)
 let tuObjeto = await moneydb.get(`${message.guild.id}.${usuario.user.id}`);
        tuObjeto.totalmoney -= wining
        tuObjeto.cash -= wining
         tuObjeto.save();
   let tuObjeto1 = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto1.totalmoney += wining
        tuObjeto1.cash += wining
         tuObjeto1.save();
    return message.channel.send(`Le has robado a **${usuario.user.tag}** <:coin:716941705793765377>${wining}`)
      }
    
  } else if(Date.now() > usuariocooldown) { 
  
 let dinero = await moneydb.get(`${message.guild.id}.${message.author.id}.totalmoney`);
   let dinero2 = await moneydb.get(`${message.guild.id}.${usuario.user.id}.cash`);

  let ganaroperder1 = ["Perdiste", "Perdiste", "Ganaste"];
    let ganaroperder = Math.floor((Math.random() * ganaroperder1.length));
  
      if(ganaroperder1[ganaroperder] === "Perdiste") {

var losing = Math.round((22 / 100) * dinero)

//Alert it out for demonstration purposes.
   let timeoutwork = Date.now() + 43200000
let object2 = cooldowns.set(`${message.guild.id}.${message.author.id}.rob`, timeoutwork)
 let dineroxd = await moneydb.get(`${message.guild.id}.${usuario.user.id}.cash`);
        if(dineroxd < 1)   return message.channel.send(`**${usuario.user.tag}** no tenia dinero en efectivo para robarle, así que no has robado nada :c`)
   let tuObjeto1 = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto1.totalmoney -= losing
        tuObjeto1.cash -= losing
         tuObjeto1.save();
    return message.channel.send(`Le has intentado robar a **${usuario.user.tag}**, pero has perdido <:coin:716941705793765377>${losing}`)
      } else {
        var wining = Math.round((35 / 100) * dinero2)

//Alert it out for demonstration purposes.
        let object2 = cooldowns.set(`${message.guild.id}.${message.author.id}.rob`, timeoutwork)
 let tuObjeto = await moneydb.get(`${message.guild.id}.${usuario.user.id}`);
        tuObjeto.totalmoney -= wining
        tuObjeto.cash -= wining
         tuObjeto.save();
   let tuObjeto1 = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto1.totalmoney += wining
        tuObjeto1.cash += wining
         tuObjeto1.save();
    return message.channel.send(`Le has robado a **${usuario.user.tag}** <:coin:716941705793765377>${wining}`)
      }
  }  else if(Date.now() < usuariocooldown) {
       const Duration = require('humanize-duration');
        const shortSpanishHumanizer = Duration.humanizer({
  language: 'shortEn',
  languages: {
    shortEn: {
      h: () => 'hrs',
      m: () => 'mins',
      s: () => 'segs'
    }
  }
})
    let timeremaing2 = shortSpanishHumanizer(usuariocooldown - Date.now(), { round: true });
    return message.channel.send('Puedes robar de nuevo en **'+timeremaing2+'**.');
  }
}