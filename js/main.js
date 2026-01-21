// homepage posts
const posts = [
  {
    title: "first blog post on the new site",
    date: "21 Jan 2026",
    excerpt: "testingggggg.",
    url: "blog/post1.html",
    thumbnail: "images/placeholder1.png"
  },
  {
    title: "another post",
    date: "15 Jan 2026",
    excerpt: "another example post for homepage layout.",
    url: "blog/post1.html",
    thumbnail: "images/placeholder2.png"
  },
  {
    title: "yet another post",
    date: "10 Jan 2026",
    excerpt: "showing how multiple posts appear in a grid.",
    url: "blog/post1.html",
    thumbnail: "images/placeholder3.png"
  }
];

const postsGrid = document.getElementById("posts-grid");
posts.forEach(post => {
  const card = document.createElement("div");
  card.classList.add("post-card");
  card.innerHTML = `
    <img src="${post.thumbnail}" alt="${post.title}" style="width:100%;height:auto;margin-bottom:1rem;">
    <h3>${post.title}</h3>
    <small>${post.date}</small>
    <p>${post.excerpt}</p>
    <a href="${post.url}">read more →</a>
  `;
  postsGrid.appendChild(card);
});