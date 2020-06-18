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
  if(args[0]) return;
  let object = moneydb.create(`${message.guild.id}.${message.author.id}`, {
    nametag: `${message.author.username}#${message.author.discriminator}`,
      id: `${message.author.id}`,
    totalmoney: 0,
    cash: 0,
    bank: 0
});
  
  
  let minerales = {
        "nada": 0,
    "una alga": 5,
        "1 pez pequeño": 7,
        "5 peces pequeños": 35,
        "1 pez mediano": 20,
        "5 peces medianos": 100,
   "1 pez grande": 50,
        "4 peces grandes": 192,
        "un pez globo": 256
      };
  
let usuariocooldown = await cooldowns.get(`${message.guild.id}.${message.author.id}.fish`);
  
  
  if(await cooldowns.get(`${message.guild.id}.${message.author.id}.fish`) === undefined) { 
   
  let minerales1 = ["nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "1 pez pequeño", "1 pez pequeño", "1 pez pequeño", "1 pez pequeño", "1 pez pequeño", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez grande", "1 pez grande", "1 pez grande", "1 pez grande", "1 pez grande", "1 pez grande", "1 pez grande", "1 pez grande", "5 peces pequeños", "5 peces pequeños", "5 peces pequeños", "5 peces pequeños", "5 peces pequeños", "5 peces pequeños", "5 peces pequeños", "5 peces medianos", "5 peces medianos", "5 peces medianos", "5 peces medianos", "5 peces medianos", "4 peces grandes", "4 peces grandes", "4 peces grandes", "un pez globo"]
     let result222 = Math.floor((Math.random() * minerales1.length));

    let minerales2 = minerales1[result222];
    let minerales3 = minerales[minerales2];
    console.log(minerales3)
    
  let tuObjeto = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto.totalmoney += minerales3
        tuObjeto.cash += minerales3
         tuObjeto.save();
  let timeoutwork = Date.now() + 600000
let object1 = cooldowns.set(`${message.guild.id}.${message.author.id}.fish`, timeoutwork)

  let object2 = cooldowns.create(`${message.guild.id}.${message.author.id}`, {
    work: "",
   crime: "",
    daily: "",
    mine: "",
    rob: "",
    fish: `${timeoutwork}`
});
  
   
  
   return message.channel.send(new Discord.RichEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                         .setColor(0x05d400)
                         .setTimestamp()
                         .setDescription(`Has pescado **${minerales2}** y lo has vendido por <:coin:716941705793765377>`+minerales3)
                        );
   
  } else if(Date.now() > usuariocooldown) { 
    let minerales1 = ["nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "una alga", "1 pez pequeño", "1 pez pequeño", "1 pez pequeño", "1 pez pequeño", "1 pez pequeño", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez mediano", "1 pez grande", "1 pez grande", "1 pez grande", "1 pez grande", "1 pez grande", "1 pez grande", "1 pez grande", "1 pez grande", "5 peces pequeños", "5 peces pequeños", "5 peces pequeños", "5 peces pequeños", "5 peces pequeños", "5 peces pequeños", "5 peces pequeños", "5 peces medianos", "5 peces medianos", "5 peces medianos", "5 peces medianos", "5 peces medianos", "4 peces grandes", "4 peces grandes", "4 peces grandes", "un pez globo"]
     let result222 = Math.floor((Math.random() * minerales1.length));

    let minerales2 = minerales1[result222];
    let minerales3 = minerales[minerales2];
    console.log(minerales3)
    
  let tuObjeto = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto.totalmoney += minerales3
        tuObjeto.cash += minerales3
         tuObjeto.save();
  let timeoutwork = Date.now() + 600000
 let tuObjeto2 = await cooldowns.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto2.fish = Date.now() + 600000
         tuObjeto2.save();
  
   return message.channel.send(new Discord.RichEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                         .setColor(0x05d400)
                         .setTimestamp()
                         .setDescription(`Has pescado **${minerales2}** y lo has vendido por <:coin:716941705793765377>`+minerales3)
                        );
  } else if(Date.now() < usuariocooldown) {
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
    return message.channel.send('Puedes pescar de nuevo en **'+timeremaing2+'** ya que ahora estás cansado.');
  
  }
  
  
   
    
    
  }
