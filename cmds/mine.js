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
        "piedra": 26,
        "carbon": 35,
        "hierro": 53,
        "un diamante": 112,
        "una esmeralda": 145,
   "un fosil": 202,
        "un ruby": 253,
        "un mineral de galaxy": 302
      };
  
let usuariocooldown = await cooldowns.get(`${message.guild.id}.${message.author.id}.mine`);
  
  
  if(await cooldowns.get(`${message.guild.id}.${message.author.id}.mine`) === undefined) { 
   
 let minerales1 = ["piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "carbon", "carbon", "carbon", "carbon", "carbon", "carbon", "carbon", "carbon", "carbon", "hierro", "hierro", "hierro", "hierro", "hierro", "hierro", "hierro", "un diamante", "un diamante", "un diamante", "un diamante", "una esmeralda", "una esmeralda", "una esmeralda", "un fosil", "un fosil", "un ruby", "un mineral de galaxy"];
     let result222 = Math.floor((Math.random() * minerales1.length));

    let minerales2 = minerales1[result222];
    let minerales3 = minerales[minerales2];
    console.log(minerales3)
    
  let tuObjeto = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto.totalmoney += minerales3
        tuObjeto.cash += minerales3
         tuObjeto.save();
  let timeoutwork = Date.now() + 1500000
 let tuObjeto2 = await cooldowns.set(`${message.guild.id}.${message.author.id}.mine`, timeoutwork);

  let object2 = cooldowns.create(`${message.guild.id}.${message.author.id}`, {
    work: "",
   crime: "",
    daily: "",
    mine: `${timeoutwork}`,
    rob: ""
});
  
   
  
   return message.channel.send(new Discord.RichEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                         .setColor(0x05d400)
                         .setTimestamp()
                         .setDescription(`Has encontrado **${minerales2}** y lo has vendido por <:coin:716941705793765377>`+minerales3)
                        );
   
  } else if(Date.now() > usuariocooldown) { 
      let minerales1 = ["piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "piedra", "carbon", "carbon", "carbon", "carbon", "carbon", "carbon", "carbon", "carbon", "carbon", "hierro", "hierro", "hierro", "hierro", "hierro", "hierro", "hierro", "un diamante", "un diamante", "un diamante", "un diamante", "una esmeralda", "una esmeralda", "una esmeralda", "un fosil", "un fosil", "un ruby", "un mineral de galaxy"];
     let result222 = Math.floor((Math.random() * minerales1.length));

    let minerales2 = minerales1[result222];
    let minerales3 = minerales[minerales2];
    console.log(minerales3)
    
  let tuObjeto = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto.totalmoney += minerales3
        tuObjeto.cash += minerales3
         tuObjeto.save();
  let timeoutwork = Date.now() + 1500000
 let tuObjeto2 = await cooldowns.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto2.mine = Date.now() + 1500000
         tuObjeto2.save();
  
   return message.channel.send(new Discord.RichEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                         .setColor(0x05d400)
                         .setTimestamp()
                         .setDescription(`Has encontrado **${minerales2}** y lo has vendido por <:coin:716941705793765377>`+minerales3)
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
    return message.channel.send('Puedes minar de nuevo en **'+timeremaing2+'** ya que ahora estás cansado.');
  }
  
  
   
    
    
  }
