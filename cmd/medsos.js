module.exports = {
  start: async function(ctx) {
    let Restu = [{ type: "Telegram", value: "https://t.me/notifikasi.whatsapp.live" }, { type: "Facebook", value: "https://www.facebook.com/profile.php?id=100082331747595&mibextid=ZbWKwL" }, { type: "Instagram", value: "https://www.instagram.com/ryhardiyan" }]

    let list = [Restu]

    let str = "Medsos owner\n\nRahardiyan => "
    if(list.length == 1) {
      let index = 0
      for(let i of list[0]) {
        str += `[${i.type}](${i.value})${index != list[0].length - 1 ? " || " : ""}`
        index += 1
      }
    }

    ctx.replyWithMarkdown(str, { disable_web_page_preview: true })
  },
  tags: "main",
  help: ["medsos"],
  desc: "Menampilkan media sosial owner"
}
