let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    if (!text) throw "منشن الشخص الذي تريد معرفة شخصيته"
    const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
 const userChar = [
      "*سانجي*",
      "*غابي*",
      "*هوتارو*",
      "*موراساكيبارا*",
      "*لوفي*",
      "*باجي*",
      "*هاكاي*",
      "مايكي",
      "*كازاتورا*",
      "*روبين*",
      "*نامي*",
      "*هانجي*",
      "*اكازا*",
      "*دوفلامينغو*",
      "*كورابيكا*",
      "*ايتوشي رين*",
      "*غوجو*",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `*${userCharacterSeletion}*`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(كت|كتابه|كتابة)/i

export default handler 
