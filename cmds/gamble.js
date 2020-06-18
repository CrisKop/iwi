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
  
  
     let object1 = moneydb.create(`${message.guild.id}.${message.author.id}`, {
    nametag: `${message.author.username}#${message.author.discriminator}`,
       id: `${message.author.id}`,
    totalmoney: 0,
    cash: 0,
    bank: 0
});
 
  let usuariocooldown = await cooldowns.get(`${message.guild.id}.${message.author.id}.gamble`);
  
  if(Date.now() < usuariocooldown) {
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
    return message.channel.send('Puedes apostar de nuevo en **'+timeremaing2+'**.');
  }
 
   if(!args[0]) return message.channel.send("Escribe la cantidad que quieres apostar.");
  if(isNaN(args[0])) return message.channel.send("Esa cantidad no es válida.");
  if(args[0] < 1) return message.channel.send(":thinking: Apostar una cantidad negativa? :thinking:")
  
  let cantidad33 = parseFloat(args[0]);

  
  let dinero222 = await moneydb.get(`${message.guild.id}.${message.author.id}.cash`);
  
  if(dinero222 < args[0]) return message.channel.send('No tienes tanto dinero en el efectivo como para apostar esa cantidad.')
  
var probability = function(n) {
     return !!n && Math.random() <= n;
};

  
  let probabilidad = probability(.48)
  
  
  
  
  if(await cooldowns.get(`${message.guild.id}.${message.author.id}.gamble`) === undefined) { 
    let timeoutwork = Date.now() + 1500000
  let object2 = cooldowns.create(`${message.guild.id}.${message.author.id}`, {
    work: "",
   crime: "",
    daily: "",
    mine: "",
    rob: ``,
    gamble: `${timeoutwork}`
});
 let dinero = await moneydb.get(`${message.guild.id}.${message.author.id}.cash`);
  

  
  
      if(probabilidad === false) {

//Alert it out for demonstration purposes.
  
let object2 = cooldowns.set(`${message.guild.id}.${message.author.id}.gamble`, timeoutwork)
  
   let tuObjeto1 = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto1.totalmoney -= cantidad33
        tuObjeto1.cash -= cantidad33
         tuObjeto1.save();
    return message.channel.send(new Discord.RichEmbed()
                               .setAuthor(message.author.tag, message.author.displayAvatarURL)
                                .setDescription(`🎲 Has perdido.`)
                                  .setColor(0xe02929)
                               )
      } else {
      
let object2 = cooldowns.set(`${message.guild.id}.${message.author.id}.gamble`, timeoutwork)
//Alert it out for demonstration purposes.
   let tuObjeto1 = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto1.totalmoney += cantidad33
        tuObjeto1.cash += cantidad33
         tuObjeto1.save();
    return message.channel.send(new Discord.RichEmbed()
                               .setAuthor(message.author.tag, message.author.displayAvatarURL)
                                .setDescription(`🎲 Has ganado <:coin:716941705793765377>${cantidad33 * 2}`)
                                   .setColor(0x05d400)
                               )
      }
    
  } else if(Date.now() > usuariocooldown) { 
  
 let dinero = await moneydb.get(`${message.guild.id}.${message.author.id}.cash`);
 let timeoutwork = Date.now() + 1500000
 if(probabilidad === false) {

//Alert it out for demonstration purposes.
  
let object2 = cooldowns.set(`${message.guild.id}.${message.author.id}.gamble`, timeoutwork)
  
   let tuObjeto1 = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto1.totalmoney -= cantidad33
        tuObjeto1.cash -= cantidad33
         tuObjeto1.save();
    return message.channel.send(new Discord.RichEmbed()
                               .setAuthor(message.author.tag, message.author.displayAvatarURL)
                                .setDescription(`🎲 Has perdido.`)
                                  .setColor(0xe02929)
                               )
      } else {
      
let object2 = cooldowns.set(`${message.guild.id}.${message.author.id}.gamble`, timeoutwork)
//Alert it out for demonstration purposes.
   let tuObjeto1 = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto1.totalmoney += cantidad33
        tuObjeto1.cash += cantidad33
         tuObjeto1.save();
    return message.channel.send(new Discord.RichEmbed()
                               .setAuthor(message.author.tag, message.author.displayAvatarURL)
                                .setDescription(`🎲 Has ganado <:coin:716941705793765377>${cantidad33 * 2}`)
                                   .setColor(0x05d400)
                               )
      }
  } 
}