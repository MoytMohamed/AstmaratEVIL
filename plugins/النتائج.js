let handler = async (m, { conn}) => {

let user = global.db.data.users[m.sender]

let name = conn.getName(m.sender)

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

let username = conn.getName(who)

let av = `./src/mp3/${pickRandom([""])}.mp3`

m.reply( `❆═━━━━═⌠🔥⌡═━━━━═❆

     *╎🔥 نتائج الفعالية 🔥╎*

❆═━━━━═⌠🔥⌡═━━━━═❆

*❍ الـمُـقَـدِّمْ🎙️╎*『』

*❍ الـجـائـزة 💰 ╎*『』

*❏ المركز الأول🥇*『』

 • الجائزة💰╎

*❏ المركز الثاني🥈*『』

• الجائزة💰╎

*❏ المركز الثالث🥉*『』

• الجائزة💰╎

*‏❅ ━ ── • 🔥 • ── ━ ❅*

⟐ بقية المشاركين 👥 :

• الجائزة💰╎10k

‏- 『』

‏- 『』

‏- 『』

‏- 『』

❆═━━━━═⌠🔥⌡═━━━━═❆

✠ تــ✍︎ــوقــيــع ↯:

【 𝐄 𝐕 𓆩🔥𓆪 𝐈 𝐋 】`)

conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })

} 

handler.customPrefix = /^(النتائج)$/i

handler.command = new RegExp

export default handler

function pickRandom(list) {

  return list[Math.floor(list.length * Math.random())]

}
