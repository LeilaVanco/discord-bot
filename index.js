const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "+";

Client.on("ready", () => {
    console.log("bot opérationnel");

    Client.guilds.cache.find(guild => guild.id === "709454726089146529").channels.cache.find(channel => channel.id === "722841939581599816").messages.fetch("810186690412675072").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err =>{
        console.log ("impossible d'ajoute le message en mémoire : " + err);
    });
});

Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "722841939581599816").send(member.displayName + " vient d'arrivé ! Bienvenue ! :tiger: \nNous sommes désormais **" + member.guild.memberCount + "** sur le serveur !");
    member.roles.add("725014403291938827").then(mbr => {
        console.log("rôle attribué avec succès pour " + member.displayName);
    }).catch(() => {
        console.log("le rôle n'a pas pu être atrribué");
    });
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre est parti");
    member.guild.channels.cache.find(channel => channel.id === "722841939581599816").send(member.displayName + " est parti .. :frowning: Bonne continuation :tiger: \nNous sommes maintenant **" + membder.guild.memberCount + "** sur le serveur !");
});

Client.on("messageReactionAdd", (reaction, user) => {
    console.log("reaction ajouté par " + user.username); 
});

Client.on("messageReactionRemove", (reaction, user) => {
    console.log("reaction retiré");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    message.react("🐯");
    message.react("864190927596814377");
    
    message.react("🐯")
    if(message.content == Nirmala);

    if(message.content == bot.displayName){
        message.channel.send("mon prefix est + :tiger:");
    }

    //+ping
   if(message.content == prefix + "ping"){
       message.channel.send("pong (～￣▽￣)～");
   } 
   //+server
   if(message.content == prefix + "server"){
       message.channel.send("discord.gg/panam");
   }
   //+help
   if(message.content == prefix + "help"){
       message.channel.send("Voici les commandes disponibles : +server pour être sur le serveur officiel de Leïla Vanco - +id pour connaître ton identifiant - +info pour avoirs quelques informations sur le bot - +ping essaies, tu verras bien ;) - pour plus d'aide, merci de vous addresser à ⎝⧹ Leïla Vanco ⧸⎠#8689");
   }
   //+id
   if(message.content == prefix + "id"){
       message.channel.send("**" + message.author.username + "** ton identifiant est le suivant : **" + message.author.id);
   }
   //+info
   if(message.content == prefix + "info"){
       message.channel.send("Tout d'abord, merci d'avoir ajouté Nirmala sur votre serveur ! Ce bot à été crée par ⎝⧹ Leïla Vanco ⧸⎠#8689. Pour l'instant il n'est pas fini, mais ca ne saurait tarder ! :tiger:");
   }
});

Client.login("");
