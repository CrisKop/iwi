const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/cube", function (request, response) {
  response.sendFile(__dirname + '/views/cube.html');
});

app.get("/invite", function (request, response) {
  response.redirect("https://discord.com/oauth2/authorize?client_id=716918524731457616&scope=bot&permissions=8");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});
// xddd
app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

//COMIENZO DEL CODIGO DEL BOT

const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require('ms');
const db = require('megadb');
const moment = require('moment');
const Duration = require('humanize-duration');
const MeowDB = require("meowdb");

const prefixies = new MeowDB({
    dir: __dirname,
    name: "/databases/prefixies"
});



const cooldowns = new MeowDB({
    dir: __dirname,
    name: "/databases/cooldowns"
});
const moneydb = new MeowDB({
    dir: __dirname,
    name: "/databases/money"
});
const shopdb = new MeowDB({
    dir: __dirname,
    name: "/databases/shop"
});

const blacklist = new MeowDB({
    dir: __dirname,
    name: "/databases/blacklist"
});



client.on("ready", () => {
    let servers = client.guilds.size
 const estados = [`${servers} servers`, `@iwi#8344 help`]
    console.log("Encendido");
    client.user.setStatus('online')
    setInterval(() => {
     let result = Math.floor((Math.random() * estados.length));
          client.user.setActivity(estados[result]); 
}, 15000)
 });



//bienvenida
 client.on('guildCreate',async servidor => {
    function T_convertor(ms) {      
      let años = Math.floor((ms) / (1000 * 60 * 60 * 24 * 365));
      let meses = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      let dias = Math.floor(((ms) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      let horas = Math.floor(((ms) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


      let final = ""
      if(años > 0) final += años > 1 ? `${años}y, ` : `${años}y, `
      if(meses > 0) final += meses > 1 ? `${meses}M, ` : `${meses}M, `
      if(dias > 0) final += dias > 1 ? `${dias}d, ` : `${dias}d, `
      if(horas > 0) final += horas > 1 ? `${horas}h, ` : `${horas}h`
      return final
  }
   let servidoroficial = client.guilds.get("717441068311904316")
   let canalparanuevoservidor = servidoroficial.channels.get("717441068777603145")
   
   
    let icon; //variable vacia <-
  if(servidor.icon === null){
  icon = ""
}
else if(servidor.icon.startsWith("a_")){ //si icon comienza con a_ significa que es gif
icon = servidor.iconURL.replace(".jpg", ".gif"); //reemplaza .jpg por .gif
}else{ //y si no es asi
icon = servidor.iconURL.replace(".jpg", ".png") //reemplaza .jpg por .png
}
   
let region2 = {
        europe: "Europa :flag_eu:",
        brazil: "Brasil :flag_br: ",
        hongkong: "Hong Kong :flag_hk:",
        japan: "Japón :flag_jp:",
        russia: "Rusia :flag_ru:",
        singapore: "Singapur :flag_sg:",
        southafrica: "Sudáfrica :flag_za:",
        sydney: "Sydney :flag_au:",
        "us-central": "Central US :flag_us:",
        "us-east": "Este US :flag_us:",
        "us-south": "Sur US :flag_us:",
        "us-west": "Oeste US :flag_us:",
        "vip-us-east": "VIP US Este :flag_us:",
        "eu-central": "Europa Central :flag_eu:",
        "eu-west": "Europa Oeste :flag_eu:",
        london: "London :flag_gb:",
        amsterdam: "Amsterdam :flag_nl:",
        india: "India :flag_in:"
      };

   
   
   canalparanuevoservidor.send( new Discord.RichEmbed()
                               .setThumbnail(servidor.iconURL)
                              .setTitle(`Fuí añadido a un nuevo servidor :)`)
                               .addField(`Nombre:`, `${servidor.name}`, true)
                                 .addField('Dueño del Servidor', servidor.owner.user.tag, true)
                               .addField(`ID:`, `${servidor.id}`, true)
                              .addField('Region', region2[servidor.region], true)
                               .addField('Fecha de creacion', `${moment(servidor.createdAt).format("**DD/MM/YYYY**")}`, true)
                                .addField('Total miembros', servidor.memberCount, true)
                            .addField('Humanos', `${servidor.members.filter(member => !member.user.bot).size}`,true)
                              .addField('Bots', `${servidor.members.filter(member => member.user.bot).size}`,true)
                              .addField('Nivel de Boost', `${servidor.premiumTier}` + " <:boostiwi:717446453320220762>", true)
                            .addField('Cantidad de boost', servidor.premiumSubscriptionCount + " <:boostiwi:717446453320220762>", true)
                          .setColor(0x66b3ff)
                              )
 })


//acción al mencionar al bot
client.on('message',async message=> {
   if(message.author.bot) return;
let prefix;
if(await prefixies.get(message.guild.id) === undefined){
  prefix = "$"
} else {
  prefix = await prefixies.get(message.guild.id);
};
   let args = message.content.slice(prefix.length).split(/ +/g);
    let canal = args.slice(1).join(' ')
    if(message.isMentioned(client.user) && canal === "help") {
    return   message.channel.send(new Discord.RichEmbed()
                      .setAuthor("Comandos de iwi", client.user.displayAvatarURL)
                      .setDescription('\nRecuerda que todos los comandos empiezan con: `'+prefix+'`')
                       .addField('❕Utilidad (5)', '- `help`, `invite`, `ping`, `bug`, `suggest`')
                       .addField('⚒️Configuración (1)', '- `setprefix`')
                       .addField('💰Economía (27)', '- `bal`, `balance`, `work`, `crime`, `daily`, `mine`, `fish`, `rob`, `gamble`, `dep`, `deposit`, `with`, `withdraw`, `create-item`, `delete-item`, `buy-item`, `buy`, `shop`, `items`, `inventory`, `addmoney`, `removemoney`, `pay`, `top`, `leaderboard` \n\n**• [Invitame](https://discordapp.com/oauth2/authorize?client_id=716918524731457616&scope=bot&permissions=8) • [Soporte](https://discord.gg/kSXhvCa) •**')
                          .setColor(0x24caf0)
                          .setFooter('Creado por CrisKop#0836 • 33 comandos', client.user.avatarURL)
                      );
    }
   else if (canal != "") return;
    if (message.isMentioned(client.user)) {
       let embed = new Discord.RichEmbed()
                         .setColor('#1fca9c')
                         .setDescription('Mi prefix en este servidor es `'+prefix+'`\n\nUsa `'+prefix+'help` para obtener más ayuda.')
      .setFooter(client.user.username, client.user.avatarURL)
                         .setTimestamp()
                         
       message.channel.send(embed)
}
});

client.on("message",async message => {
 if(message.author.bot) return;
  

let prefix;
if(await prefixies.get(message.guild.id) === undefined){
  prefix = "$"
} else {
  prefix = await prefixies.get(message.guild.id);
};

  if(prefix !== "$" && message.content === "$help") return message.channel.send("Mi prefix en este servidor es: `"+prefix+'`, usa `'+prefix+'help` para ver mi comando de ayuda.')
if (!message.content.startsWith(prefix)) return; 
 
  
   const args = message.content.slice(prefix.length).split(/ +/g);
 const command = args.shift().toLowerCase();
  
  
  if(blacklist.get(message.author.id) !== undefined) return message.reply('Lo siento, estás en la **blacklist** del bot por **'+await blacklist.get(`${message.author.id}.razon`)+'**. Puedes apelar en el servidor de soporte.', new Discord.RichEmbed()
                                                                         .setDescription(`[https://discord.gg/kSXhvCa](https://discord.gg/kSXhvCa)`));

  if(message.content === prefix + "invite"){
    message.channel.send(new Discord.RichEmbed()
                        .setDescription(`**Aquí está mi invitación :p**\nhttps://discord.com/oauth2/authorize?client_id=716918524731457616&scope=bot&permissions=8`)
                        )
  }
  
  
  
   
 try{
   let x = require(`./cmds/${command}`)
   x.run(client, message, args, Discord)
 }catch(e){
   console.log(`No existe el cmd: ${command}\n${e}` )
 }finally{
   console.log(`Comando ejecutado: ${command} por: ${message.author.tag}`)
 }
 
  
});
client.login("token");
