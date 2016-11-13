// import the discord.js module
const Discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// imports the config file from the directory
const config = require("./config.json")

//sets prefix in this code
let prefix = config.prefix;

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
});

// create an event listener for messages
bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  //gets the command
  let command = message.content.split(" ")[0];
  //removes prefix from command
  command = command.slice(prefix.length);
  //gets arguments and puts in array
  let args = message.content.split(" ").slice(1);

  //start command listening
  if (command === "say"){
    message.reply("wanted me to say '" + args + "', but they're idiotic so I won't say anything!");
  }
  }
);

// log our bot in
bot.login(config.token);
