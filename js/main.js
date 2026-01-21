// homepage posts
const posts = [
  {
    title: "first blog post on the new site",
    date: "21 Jan 2026",
    excerpt: "testingggggg.",
    url: "blog/post1.html",
  },
  {
    title: "another post",
    date: "15 Jan 2026",
    excerpt: "another example post for homepage layout.",
    url: "blog/post1.html",
  },
  {
    title: "yet another post",
    date: "10 Jan 2026",
    excerpt: "showing how multiple posts appear in a grid.",
    url: "blog/post1.html",
  }
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