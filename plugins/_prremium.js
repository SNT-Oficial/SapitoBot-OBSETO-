import db from '../lib/database.js'

let handler = m => m
export async function all(m) {
    let user = db.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (user.premiumTime != 0 && user.premium) {
        if (new Date() * 1 >= user.premiumTime) {
            await m.reply(`[ ! ] Se acabó tu tiempo premium!\n_ Espero que lo hayas disfrutado xd_\n`)
            user.premiumTime = 0
            user.premium = false
        }
    }
}
