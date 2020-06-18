exports.run = async(client, message, args, Discord) =>{
  var probability = function(n) {
     return !!n && Math.random() <= n;
};
  
  let xd = probability(.45)
  
  return message.channel.send(xd)
}