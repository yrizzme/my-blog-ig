// homepage posts
const posts = [
  {
    title: "first blog post on the new site",
    date: "21 Jan 2026",
    excerpt: "testingggggg.",
    url: "blog/post1.html",
  },
];

const postsGrid = document.getElementById("posts-grid");
posts.forEach(post => {
  const card = document.createElement("div");
  card.classList.add("post-card");
  card.innerHTML = `
    <h3>${post.title}</h3>
    <small>${post.date}</small>
    <p>${post.excerpt}</p>
    <a href="${post.url}">read more →</a>
  `;
  postsGrid.appendChild(card);
});



// rec posts
const recs = [
  {
    title: "obsidian",
    date: "22 Jan 2026",
    excerpt: "my go-to notes app. markdown-first and actually respects me.",
    url: "recs/obsidian.html"
  },
];

// homepage → show first 3
const recsGrid = document.getElementById("recs-grid");

if (recsGrid) {
  recs.slice(0, 3).forEach(rec => {
    const card = document.createElement("div");
    card.classList.add("post-card");

    card.innerHTML = `
      <h3>${rec.title}</h3>
      <small>${rec.date}</small>
      <p>${rec.excerpt}</p>
      <a href="${rec.url}">read more →</a>
    `;

    recsGrid.appendChild(card);
  });
}