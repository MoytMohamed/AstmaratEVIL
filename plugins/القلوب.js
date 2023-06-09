let handler = async (m, { conn}) => {

let user = global.db.data.users[m.sender]

let name = conn.getName(m.sender)

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

let username = conn.getName(who)

let av = `./src/mp3/${pickRandom([""])}.mp3`

m.reply( `❆═━━━━═⌠🔥⌡═━━━━═❆

فـعـالـيـة الـقـلوب ❤️

❆═━━━━═⌠🔥⌡═━━━━═❆

الـشـرح ↯:

⇜يـملـك الـمـشـارك 4️⃣ قـلـوب، يـسـأل الـمـقدم سـؤال ( كـتابـه، صـور، عـكـس، الـخ...)، أول مـن يـجـاوب صـح يـخـتـار احـد الـمـشاركـيـن لـيـنقـص مـنه قـلـب، و من يـتـبـقـى الـى آخر الـفعاليـه و لم يـخـسر كل قـلوبـه؛ يكـون هـو الـفائـز 🎉

*الـمـقـدم 👨🏻‍💻 ⎢* 【 】

*وقـت الـفـعالـيـة ⏱️ ⎢* 【 】

*مـكـان الـتـسـجيـل 📥 ⎢* 【 】

❆═━━━━═⌠🔥⌡═━━━━═❆

✠ تــ✍︎ــوقــيــع ↯:

【 𝐄 𝐕 𓆩🔥𓆪 𝐈 𝐋 】`)

conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })

} 

handler.customPrefix = /^(القلوب)$/i

handler.command = new RegExp

export default handler

function pickRandom(list) {

  return list[Math.floor(list.length * Math.random())]

}
