const MeowDB = require("meowdb");
const cooldowns = new MeowDB({
    dir: __dirname,
    name: "../databases/cooldowns"
});
const moneydb = new MeowDB({
    dir: __dirname,
    name: "../databases/money"
});
const shopdb = new MeowDB({
    dir: __dirname,
    name: "../databases/shop"
});
const moment = require('moment');
exports.run = async(client, message, args, Discord) =>{
  let personas = moneydb.get(message.guild.id);
  
  if(personas === undefined) return message.channel.send(new Discord.RichEmbed()
                                        .setAuthor("Top de "+message.guild.name, message.guild.iconURL)
                                        .setDescription("Nadie tiene dinero en este servidor.")
                                                     );
  
  if(args[0] === "cash") {
      let datoslol = Object.entries(personas)
   let datosordenados = datoslol.sort((a, b) => b[1].cash - a[1].cash);
  let leaderboard = datosordenados.map(([_, obj], i) => {
   let rObj = {};

    let usernametagxd = message.guild.members.get(obj.id);
      
     
    if(usernametagxd !== undefined){
      if(obj.nametag !== `${usernametagxd.user.username}#${usernametagxd.user.discriminator}`) {
      moneydb.set(`${message.guild.id}.${usernametagxd.user.id}.nametag`, `${usernametagxd.user.username}#${usernametagxd.user.discriminator}`);
      }
    }

    rObj = `**${i+1}. ${obj.nametag} •** <:coin:716941705793765377>${obj.cash}\n`
   return rObj;
});
  
  let xd1 = leaderboard.slice(0, 10)
  
   
  let icon; //variable vacia <-
  if(message.guild.icon === null){
  icon = ""
}
else if(message.guild.icon.startsWith("a_")){ //si icon comienza con a_ significa que es gif
icon = message.guild.iconURL.replace(".jpg", ".gif"); //reemplaza .jpg por .gif
}else{ //y si no es asi
icon = message.guild.iconURL.replace(".jpg", ".png") //reemplaza .jpg por .png
}
  
  
return message.channel.send(new Discord.RichEmbed()
                     .setThumbnail(icon)
                      .setAuthor(`Top de dinero de ${message.guild.name} segun el efectivo.`, icon)
                            .setDescription(`${xd1.join('\n')}`)
                     .setColor("#4aa1ff")
                      )
  
  
  }
  else if(args[0] === "bank") {
        let datoslol = Object.entries(personas)
   let datosordenados = datoslol.sort((a, b) => b[1].bank - a[1].bank);
  let leaderboard = datosordenados.map(([_, obj], i) => {
     let usernametagxd = message.guild.members.get(obj.id);
      
     
    if(usernametagxd !== undefined){
      if(obj.nametag !== `${usernametagxd.user.username}#${usernametagxd.user.discriminator}`) {
      moneydb.set(`${message.guild.id}.${usernametagxd.user.id}.nametag`, `${usernametagxd.user.username}#${usernametagxd.user.discriminator}`);
      }
    }
   let rObj = {};
    rObj = `**${i+1}. ${obj.nametag} •** <:coin:716941705793765377>${obj.bank}\n`
   return rObj;
});
  
  let xd1 = leaderboard.slice(0, 10)
  
   
  let icon; //variable vacia <-
  if(message.guild.icon === null){
  icon = ""
}
else if(message.guild.icon.startsWith("a_")){ //si icon comienza con a_ significa que es gif
icon = message.guild.iconURL.replace(".jpg", ".gif"); //reemplaza .jpg por .gif
}else{ //y si no es asi
icon = message.guild.iconURL.replace(".jpg", ".png") //reemplaza .jpg por .png
}
  
  
return message.channel.send(new Discord.RichEmbed()
                     .setThumbnail(icon)
                      .setAuthor(`Top de dinero de ${message.guild.name} segun el banco.`, icon)
                            .setDescription(`${xd1.join('\n')}`)
                     .setColor("#4aa1ff")
                      )
  
  
  }
  else{
  
  
   let datoslol = Object.entries(personas)
   let datosordenados = datoslol.sort((a, b) => b[1].totalmoney - a[1].totalmoney);
  let leaderboard = datosordenados.map(([_, obj], i) => {
   let rObj = {};
     let usernametagxd = message.guild.members.get(obj.id);
      
     
    if(usernametagxd !== undefined){
      if(obj.nametag !== `${usernametagxd.user.username}#${usernametagxd.user.discriminator}`) {
      moneydb.set(`${message.guild.id}.${usernametagxd.user.id}.nametag`, `${usernametagxd.user.username}#${usernametagxd.user.discriminator}`);
      }
    }
    rObj = `**${i+1}. ${obj.nametag} •** <:coin:716941705793765377>${obj.totalmoney}\n`
   return rObj;
});
  
  let xd1 = leaderboard.slice(0, 10)
  
   
  let icon; //variable vacia <-
  if(message.guild.icon === null){
  icon = ""
}
else if(message.guild.icon.startsWith("a_")){ //si icon comienza con a_ significa que es gif
icon = message.guild.iconURL.replace(".jpg", ".gif"); //reemplaza .jpg por .gif
}else{ //y si no es asi
icon = message.guild.iconURL.replace(".jpg", ".png") //reemplaza .jpg por .png
}
  
  
return message.channel.send(new Discord.RichEmbed()
                     .setThumbnail(icon)
                      .setAuthor(`Top de dinero de ${message.guild.name}`, icon)
                            .setDescription(`${xd1.join('\n')}`)
                     .setColor("#4aa1ff")
                      )
  
  }
}