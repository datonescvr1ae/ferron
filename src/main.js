const { Client, Events, GatewayIntentBits } = require("discord.js");
const { Token }  = require("./data/secrets/token.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, async readyClient => {
       
})

client.login(Token)
