import discord
import asyncio
import json

with open("messages.json", "r") as fh:
    messages = json.load(fh)

client = discord.Client()

@client.event
async def on_ready():
    await client.change_presence(game=discord.Game(name="https://github.com/cucumberbob123/py-discord-bot/tree/master"))
    print("logged in as", client.user.name)

    emojis = client.get_all_emojis()
    for i in emojis:
        if i.name == "nazi":
            global nazi
            nazi = i
            break

@client.event
async def on_message(message):
    await client.add_reaction(message, nazi)
    if message.content.lower() in messages:
        await client.send_message(message.channel, messages[message.content])

client.run(token)
