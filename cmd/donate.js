module.exports = {
  start: async function(ctx) {
    let str = `
<pre>╭─「 Donasi • Pulsa 」
│ • Telkomsel : </pre><pre>082323780821</pre>
<pre>╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana    : </pre><pre>0882008211320</pre><pre>
╰────</pre>
`.trim()
    ctx.replyWithHTML(str, { disable_web_page_preview: true })
  },
  tags: "main",
  help: ["donasi", "donate"],
  desc: "Untuk mendukung owner bot :3"
}
