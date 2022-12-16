/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import e from"../lib/connection.js";import{plugins as t}from"../lib/plugins.js";import{cpus as a,totalmem as i,freemem as s,platform as o,type as r,arch as n,hostname as m}from"os";import{performance as l}from"perf_hooks";import{sizeFormatter as d}from"human-readable";import c from"performance-now";let{generateWAMessageFromContent:p}=(await import("@adiwajshing/baileys")).default,format=d({std:"JEDEC",decimalPlaces:2,keepTrailingZeroes:!1,render:(e,t)=>`${e} ${t}B`}),handler=async(d,{conn:u,isPrems:h})=>{let g=Object.entries(e.store.chats).filter(([e,t])=>e&&t.isChats),f=g.filter(([e])=>e.endsWith("@g.us")),$=process.memoryUsage(),y=a().map(e=>(e.total=Object.keys(e.times).reduce((t,a)=>t+e.times[a],0),e)),w=y.reduce((e,t,a,{length:i})=>(e.total+=t.total,e.speed+=t.speed/i,e.times.user+=t.times.user,e.times.nice+=t.times.nice,e.times.sys+=t.times.sys,e.times.idle+=t.times.idle,e.times.irq+=t.times.irq,e),{speed:0,total:0,times:{user:0,nice:0,sys:0,idle:0,irq:0}}),b=d.reply("_Obteniendo informaci\xf3n..._");await b;let j=global.hit_cmd.length,C=l.now(),P=l.now()-C,v=c(),k=c()-v,_=m().includes("localhost")?"Servidor personal":m(),A=Math.floor(process.uptime())>43200?"Hits en las \xfaltimas horas":"Hits en los \xfaltimos minutos",I=0>=j?"":`
➪ *${A}* : _${j}_`,U=h?`
➪ *IP Bot* : _${await global.serverIP()}_`:"",x=await global.serverIP()?U:"",B=timeString(process.uptime()),M="‎".repeat(850);try{let E=await fetch("https://pastebin.com/raw/Bu8esjPA"),T=await u.profilePictureUrl(u.user.jid,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png");var q,H=(await E.json()).nk_media||T}catch(N){var H=await u.profilePictureUrl(u.user.jid,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png")}let D=`
*~》INFORMACI\xd3N《~*
${M}
┏─━─━━──━━─━─┓
➪ *Bot* : _(activo)_
➪ *Due\xf1o actual* : _${Propietario}_
➪ *Tiempo de ejecucion* : _${B}._
➪ *Apodo en Whatsapp* : _${u.user.name}._
➪ *Grupos con mayor actividad* : _${f.length}_
➪ *Grupos nuevos* : _${f.length}_
➪ *Grupos abandonados* : _${f.length-f.length}_
➪ *Chats personales* : _${g.length-f.length}_
➪ *Total de chats* : _${g.length}_ ${I}
➪ *Version del bot* : _${BotVersion}_
➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_
➪ *Sc - Github* : _https://github.com/Micasatio/Sspito_
➪ *Total de plugins* : _${Object.keys(t).length}_
➪ *Velocidad de procesamiento* : _${P} s..._
➪ *Velocidad de conexion* : _${k.toFixed(4)}ms..._
➪ *RAM:* _${format(i()-s())} Restantes De ${format(i())}_
➪ *Plataforma* : _${o()}_
➪ *Base OS* : _${r()}_
➪ *Arquitectura* : _${n()}_
➪ *Host* : _${_}_ ${x}

➫ _Consum\xf3 de memoria :_
${"```"+Object.keys($).map((e,t,a)=>`${e.padEnd(Math.max(...a.map(e=>e.length))," ")}: ${format($[e])}`).join("\n")+"```"}
➫ ${y[0]?`_Uso total de CPU_
${y[0].model.trim()} (${w.speed} MHZ)
${Object.keys(w.times).map(e=>`- *${(e+"*").padEnd(6)}: ${(100*w.times[e]/w.total).toFixed(2)}%`).join("\n")}
_CPU Core(s) Usado (${y.length} Core CPU)_
${y.map((e,t)=>`${t+1}. ${e.model.trim()} (${e.speed} MHZ)
${Object.keys(e.times).map(t=>`- *${(t+"*").padEnd(6)}: ${(100*e.times[t]/e.total).toFixed(2)}%`).join("\n")}`).join("\n\n")}`:""}
┗─━─「 ✵ 」━─━─┛`.trim();try{let F=p(d.chat,{orderMessage:{orderId:"5352482274766633",thumbnail:await getBuffer(H),itemCount:-369,status:1,surface:1,message:D,orderTitle:NombreDelBot+` 🔥`,sellerJid:"51995386439@s.whatsapp.net",token:"1655878716",priceAmount:"666000",totalAmount1000:"9999999999",totalCurrencyCode:"PEN",contextInfo:null}},{quoted:d});await u.relayMessage(d.chat,F.message,{messageId:F.key.id}),reacMoji(d.chat,u,"\uD83E\uDD16",d)}catch(G){d.reply(D)}};handler.help=["informacion"],handler.tags=["casual"],handler.command=/^(informacion|infobot|ping|speed|info|alive|perfil)$/i;export default handler;
