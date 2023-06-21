/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const RSS = require("rss");
const path = require("path");
const { marked } = require("marked");

const renderer = new marked.Renderer();

renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

marked.use({
  gfm: true,
  breaks: true,
  mangle: false,
  headerIds: false,
  renderer,
});

const main = () => {
  const feed = new RSS({
    title: "Lou Tigroudja",
    site_url: "https://lou-tigroudja.com",
    feed_url: "https://lou-tigroudja.com/feed.xml",
    image_url: "https://lou-tigroudja.com/og.png",
    language: "fr",
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync(path.join(__dirname, "../public/feed.xml"), rss);
};

main();
