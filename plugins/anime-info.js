
let handler=async(a,{conn:e,text:i,command:r})=>{if(!i)return a.reply(`Que anime desea buscar?, ejemplo de uso:

${Prefijo+r} nichijou
`);let t;await a.reply(MultiNK.Bsqd(await e.getName(a.sender)));let n=encodeURIComponent(i);try{let s=(await fetchJson(`https://api.jikan.moe/v4/anime?q=${n}`)).data[0],o=s.images.jpg.image_url?s.images.webp.image_url:s.images.jpg.large_image_url?s.images.webp.large_image_url:"https://github.com/Ne-Kosmic/NeKosmic/raw/main/multimedia/imagenes/anim_vers.jpg",l=`[ ${s.title} - Comun ], [ ${s.title_english} - Ingles ], [ ${s.title_japanese} - Japon\xe9s ]`;try{var m=`*🔥 Productora:* ${s.producers[0].name||"-"}
*🪀 Licenciado por:* ${s.licensors[0].name||"-"}
*🌟 Estudio:* ${s.studios[0].name||"-"}`}catch{var m=""}try{var d=`*📺 Trailer:* ${s.trailer.url||"Url no encontrado!"}`}catch{var d=""}await e.sendMessage(a.chat,{image:{url:o},caption:`
${"*\uD83E\uDDEC ID:* "+s.mal_id}
${"*✍️ T\xedtulos:* "+l}
${"*\uD83E\uDE84 Tipo:* "+s.type}
${"*\uD83E\uDDE9 Genero:* "+s.source}
${"*\uD83D\uDDC3️ Episodio:* "+s.episodes}
${"*\uD83C\uDFAD Estado:* "+await traducIr(encodeURI(s.status))}
${"*⌚ Duraci\xf3n:* "+await traducIr(encodeURI(s.duration))}
${"*♻️ Clasificaci\xf3n:* "+await traducIr(encodeURI(s.rating))}
${"*\uD83D\uDCC8 Puntaje:* "+s.score}
${"*\uD83D\uDC4D Calificado por:* "+s.scored_by}
${"*\uD83D\uDD16 Rango:* "+s.rank}
${"*⚡ Popularidad:* "+s.popularity}
${"*\uD83D\uDC65 Miembros:* "+s.members}
${"*❤️ Favoritos:* "+s.favorites}
${"*\uD83D\uDCDC Sinopsis:* "+await traducIr(encodeURI(s.synopsis))}
${m}
${d}
`.trim()},{quoted:a})}catch(u){a.reply(MultiNK.Error0())}};handler.help=["infoanime"],handler.tags=["animeuwu"],handler.command=/^(infoanime)$/i;export default handler;
