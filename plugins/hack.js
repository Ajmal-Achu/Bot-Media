/*coded by souravkl11
youtube https://youtube.com/
https://youtube.com/channel/UCpGa88rhUFYj-6-LBqBbWKw
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command  ENTHEKILUM EZHUTH NENBA"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'aveng ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=Upe1Fp1lDAtX0ioPYLEPsSoX51i&text1=Pikachu&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by* 𝐑𝐀𝐆𝐀𝐍𝐎𝐑𝐊' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'anon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=7f2d5e1327bf3a3c153392ca&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by 𝐑𝐀𝐆𝐀𝐍𝐎𝐑𝐊' })

    }));
    
}
