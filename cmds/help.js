const MeowDB = require("meowdb");  
const prefixies = new MeowDB({
    dir: __dirname,
    name: "../databases/prefixies"
});
exports.run = async(client, message, args, Discord) =>{
 if(args[0]) return;

let prefix;
if(await prefixies.get(message.guild.id) === undefined){
  prefix = "$"
} else {
  prefix = await prefixies.get(message.guild.id);
};
  message.channel.send(new Discord.RichEmbed()
                      .setAuthor("Comandos de iwi", client.user.displayAvatarURL)
                      .setDescription('\nRecuerda que todos los comandos empiezan con: `'+prefix+'`')
                       .addField('❕Utilidad (5)', '- `help`, `invite`, `ping`, `bug`, `suggest`')
                       .addField('⚒️Configuración (1)', '- `setprefix`')
                       .addField('💰Economía (27)', '- `bal`, `balance`, `work`, `crime`, `daily`, `mine`, `fish`, `rob`, `gamble`, `dep`, `deposit`, `with`, `withdraw`, `create-item`, `delete-item`, `buy-item`, `buy`, `shop`, `items`, `inventory`, `addmoney`, `removemoney`, `pay`, `top`, `leaderboard` \n\n**• [Invitame](https://discordapp.com/oauth2/authorize?client_id=716918524731457616&scope=bot&permissions=8) • [Soporte](https://discord.gg/kSXhvCa) •**')
                          .setColor(0x24caf0)
                          .setFooter('Creado por CrisKop#0836 • 33 comandos', client.user.avatarURL)
                      );
}