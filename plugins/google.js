/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(e,{conn:a,text:u,args:t})=>{if(!t[0])return e.reply("Que desea buscar en Google?");let i=await a.getName(e.sender),l=encodeURIComponent(u),r=e.reply(MultiNK.Bsqd(i));await r;try{let s=await fetchJson(`https://latam-api.vercel.app/api/google?apikey=${MyApiKey}&q=${l}`);if(!s.busqueda.titulo)return e.reply("[ ! ] Sin resultados");a.sendMessage(e.chat,{image:{url:"https://github.com/Ne-Kosmic/NeKosmic/raw/main/multimedia/imagenes/GugulHD.jpg"},caption:`〘  *GOOGLE* 〙
_~> Resultados para : ${u}_
${"‎".repeat(850)}
🔖 Titulo: ${s.busqueda.titulo}
📜 Descripcion: ${s.busqueda.descripcion}
⛓️ Url: ${s.busqueda.link}
🖼️ Imagen: ${s.busqueda.imagen}

🔍 ID: ${s.busqueda.id}
🔗 Link: ${s.busqueda.link}
⚡ Titulo: ${s.busqueda.titulo}
✍️ Autor: ${s.busqueda.autor}
⌚ Duracion: ${s.busqueda.duracion}`},{quoted:e})}catch(d){e.reply(MultiNK.Error0())}};handler.help=["google"].map(e=>e+" <busqueda>"),handler.tags=["busqueda"],handler.command=/^(google)$/i,handler.limit=!0;export default handler;
