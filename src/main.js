const { Client, Events, GatewayIntentBits, ActivityType, Collection } = require("discord.js");
const { Token }  = require("./data/secrets/token.json");

const fs = require("node:fs");
const path = require("node:path");

const { Status, PresenceType, Presence } = require("./data/config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

function onStart() {
       client.commands = new Collection();

       const commandsPath = path.join(__dirname, "commands");
       const directoryToLoad = fs.readdirSync(commandsPath);

       for (const file of directoryToLoad) {
              const filePath = path.join(commandsPath, file);
              const command = require(filePath);

              client.commands.set(command.data.name, command);
       }

       client.login(Token);
}

client.once(Events.ClientReady, async readyClient => {
       readyClient.user.setPresence({
              activities: [{name: Presence, type: ActivityType[PresenceType]}],
              status: Status
       });

       console.log("Client ready (temporary log)");
});

onStart();
