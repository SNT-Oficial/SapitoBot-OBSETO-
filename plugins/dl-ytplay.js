/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import{generateWAMessageFromContent as e}from"@adiwajshing/baileys";import a from"../lib/database.js";let espera=18e4,handler=async(t,{conn:r,command:o,text:l})=>{let s=a.data.users[t.sender];if(new Date-s.lagnet<18e4)return t.reply(`_Por favor espere ${clockString(s.lagnet+18e4-new Date)}antes de realizar otra solicitud_`);if(!l)return t.reply(`Que desea buscar en Youtube?, Ejemplo de uso: 

${Prefijo+o} mtc s3rl`);let i;await t.reply(MultiNK.Proces(await r.getName(t.sender)));let n=encodeURIComponent(l);try{let d=await fetchJson(`https://latam-api.vercel.app/api/ytplay2?apikey=${MyApiKey}&q=${n}`),p=await getBuffer(d.logo),u=e(t.chat,{extendedTextMessage:{text:`
*✍️ T\xedtulo:* ${d.titulo}
*🗜️ Tama\xf1o:* ${d.peso+" Aprox."}
*🎹 Autor:* ${d.autor}



_Enviando audio, espere..._
`.trim(),contextInfo:{externalAdReply:{title:d.titulo,body:"⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻",thumbnail:p,sourceUrl:"https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1"}}}},{quoted:t});await r.relayMessage(t.chat,u.message,{messageId:u.key.id}),s.lagnet=new Date*1,r.sendMessage(t.chat,{audio:{url:decodeURIComponent(d.descarga1)||d.descarga2},mimetype:"audio/mp4",fileName:`${d.titulo}.mp3`},{quoted:t}).catch(e=>{t.reply(`Ocurrio un error, por favor use el comando:

${Prefijo}audio ${l}
`)})}catch(c){t.reply(MultiNK.Error0())}};handler.help=["play <texto>"],handler.tags=["servicio"],handler.command=/^play$/i;export default handler;
