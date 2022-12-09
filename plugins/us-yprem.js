/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import db from '../lib/database.js'

let handler = async (m, { conn, text, command, args }) => {
    let etiqueta
    if (m.isGroup) etiqueta = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else etiqueta = m.chat
    let user = db.data.users[etiqueta]
    if (!etiqueta) return m.reply(`Por favor etiquete o mencioné a alguien!`)
    let txt = text.replace('@' + etiqueta.split`@`[0], '').trim()
    if (!args[1]) return m.reply(`Por favor indique el número de dias`)
    if (isNaN(args[1])) return m.reply(`Solo números!\n\nEjemplo de uso:\n${Prefijo + command} @${m.sender.split`@`[0]} 1`)
    if (8 <= args[1]) return m.reply(`[ ! ] Maximo 7 dias`)
    var nDias = 86400000 * args[1]
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += nDias
    else user.premiumTime = now + nDias
user.premium = true
    m.reply(`*[ USUARIO PREMIUM ]*
🔖 *Nombre:* ${user.name}
📆 *Dias:* ${args[1]} dia(s)
📉 *Tiempo restante:* ${user.premiumTime - now}MS`)
}
handler.help = ['addprem [@usuario] <dias>']
handler.tags = ['propietario']
handler.command = /^(addprem)$/i

handler.group = true
handler.rowner = true

export default handler
