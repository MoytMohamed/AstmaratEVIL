let handler = async (m, { conn}) => {

let user = global.db.data.users[m.sender]

let name = conn.getName(m.sender)

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

let username = conn.getName(who)

let av = `./src/mp3/${pickRandom([""])}.mp3`

m.reply( `❆═━━━━═⌠🔥⌡═━━━━═❆

𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐄 𝐕 𝐈 𝐋 🔥

❆═━━━━═⌠🔥⌡═━━━━═❆

*الـلـقـب 🎎* ⎢ 『 』

*الـمـنـشـن 📧* ⎢ 『 』

❆═━━━━═⌠🔥⌡═━━━━═❆

أهـلا وسـهلاً بـك، نـحـن سـعـداء جـداً بـتـواجـدك مـعنـا، نـتـمـنى أن تـجـد مـا يـرضيـك و تـقـضي مـعـنا اجـمل و أمـتع الـأوقـات🤍🫶🏻.

❏ رابـط الاعـلانـات ↯:

〖 https://chat.whatsapp.com/JuMTZ5KR5DNFnBX0rUGpyl 〗 

❆═━━━━═⌠🔥⌡═━━━━═❆

✠ تــ✍︎ــوقــيــع ↯:

【 𝐄 𝐕 𓆩🔥𓆪 𝐈 𝐋 】`)

conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })

} 

handler.customPrefix = /^(ترحيب)$/i

handler.command = new RegExp

export default handler

function pickRandom(list) {

  return list[Math.floor(list.length * Math.random())]

}
