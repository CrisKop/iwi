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
  
let usuariocooldown = await cooldowns.get(`${message.guild.id}.${message.author.id}.crime`);
  
  
  if(await cooldowns.get(`${message.guild.id}.${message.author.id}.crime`) === undefined) { 
   
       let sumademoney = [151, 165, 173, 167, 192, 203, 201, 195, 178, 205, 169];
     let result222 = Math.floor((Math.random() * sumademoney.length));
    
    
       let ganaroperder1 = ["Perdiste", "Perdiste", "Perdiste", "Perdiste", "Ganaste", "Ganaste"];
    let ganaroperder = Math.floor((Math.random() * ganaroperder1.length));
 if(ganaroperder1[ganaroperder] === "Ganaste") {
  let tuObjeto = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto.totalmoney += sumademoney[result222]
        tuObjeto.cash += sumademoney[result222]
         tuObjeto.save();
  let timeoutwork = Date.now() + 3600000
  let object1 = cooldowns.set(`${message.guild.id}.${message.author.id}.crime`, timeoutwork)
  
  let object2 = cooldowns.create(`${message.guild.id}.${message.author.id}`, {
    work: "",
   crime: `${timeoutwork}`,
    daily: "",
    mine: "",
    rob: ""
});
  
   return message.channel.send(new Discord.RichEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                         .setColor(0x05d400)
                         .setTimestamp()
                        .setDescription(`Has robado monedas perididas de mi base de datos y te has llevado <:coin:716941705793765377>`+sumademoney[result222])
                        );
   }else{
    let tuObjeto = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto.totalmoney -= sumademoney[result222]
        tuObjeto.cash -= sumademoney[result222]
         tuObjeto.save();
  let timeoutwork = Date.now() + 3600000
  let object1 = cooldowns.set(`${message.guild.id}.${message.author.id}.crime`, timeoutwork)
  
  let object2 = cooldowns.create(`${message.guild.id}.${message.author.id}`, {
    work: "",
   crime: `${timeoutwork}`,
    daily: "",
    mine: "",
    rob: ""
});
     
     
      return message.channel.send(new Discord.RichEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                         .setColor(0xe02929)
                         .setTimestamp()
                         .setDescription(`Has intentado robarle a una abuela pero era karateka y no lo lograste, has perdido <:coin:716941705793765377>`+sumademoney[result222])
                        );
     
   }
    
    
  } else if(Date.now() > usuariocooldown) { 
      let sumademoney = [151, 165, 173, 167, 192, 203, 201, 195, 178, 205, 169];
     let result222 = Math.floor((Math.random() * sumademoney.length));
        let cantidad = parseFloat(sumademoney[result222]);
    
    let ganaroperder1 = ["Perdiste", "Perdiste", "Perdiste", "Perdiste", "Ganaste", "Ganaste"];
    let ganaroperder = Math.floor((Math.random() * ganaroperder1.length));
 
    if(ganaroperder1[ganaroperder] === "Ganaste") {
        let tuObjeto = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto.totalmoney += cantidad
        tuObjeto.cash += cantidad
         tuObjeto.save();
  let timeoutwork = Date.now() + 3600000
 let tuObjeto2 = await cooldowns.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto2.crime = Date.now() + 3600000
         tuObjeto2.save();
  
   return message.channel.send(new Discord.RichEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                         .setColor(0x05d400)
                         .setTimestamp()
                         .setDescription(`Has robado monedas perididas de mi base de datos y te has llevado <:coin:716941705793765377>`+sumademoney[result222])
                        );
    } else {
      let tuObjeto = await moneydb.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto.totalmoney -= cantidad
        tuObjeto.cash -= cantidad
         tuObjeto.save();
  let timeoutwork = Date.now() + 3600000
 let tuObjeto2 = await cooldowns.get(`${message.guild.id}.${message.author.id}`);
        tuObjeto2.crime = Date.now() + 3600000
         tuObjeto2.save();
  
   return message.channel.send(new Discord.RichEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                         .setColor(0xe02929)
                         .setTimestamp()
                         .setDescription(`Has intentado robarle a una abuela pero era karateka y no lo lograste, has perdido <:coin:716941705793765377>`+sumademoney[result222])
                        );
    }


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
    return message.channel.send('Puedes cometer un crimen en **'+timeremaing2+'**.');
  }
  
  
   
    
    
  }
