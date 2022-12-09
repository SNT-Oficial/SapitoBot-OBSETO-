/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(e,{conn:a,text:i,args:r})=>{if(!r[0])return e.reply("Que desea buscar en playstore?");let t=await a.getName(e.sender),l=encodeURIComponent(i),n=e.reply(MultiNK.Bsqd(t));await n;try{let o=await fetchJson(`https://latam-api.vercel.app/api/playstore?apikey=${MyApiKey}&q=${l}`);if(!o.titulo)return e.reply("[ ! ] Sin resultados");let s=await traducIr(encodeURI(o.descripcion));a.sendMessage(e.chat,{image:{url:o.imagen?o.imagen:"https://github.com/Ne-Kosmic/NeKosmic/raw/main/multimedia/imagenes/GplayHD.jpg"},caption:`🔍 Resultado: ${o.titulo}
🧬 Identificador: ${o.id}
⛓️ Link: ${o.link}
🖼️ Imagen: ${o.imagen}
✍️ Desarrollador: ${o.desarrollador}
📜 Descripcion: ${s||o.descripcion}
💲 Moneda: ${o.moneda}
🎭 Gratis: ${o.gratis}
💸 Precio: ${o.precio}
📈 Puntuacion: ${o.puntuacion}`},{quoted:e})}catch(d){e.reply(MultiNK.Error0())}};handler.help=["playstore"].map(e=>e+" <busqueda>"),handler.tags=["busqueda"],handler.command=/^(playstore)$/i,handler.limit=!0;export default handler;
