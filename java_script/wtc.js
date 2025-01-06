document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.getElementById("watch-container");
  
    fetch("data.json")
      .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
      .then(data => renderPosts(data))
      .catch(() => blogContainer.innerHTML = "<p>Error loading watch comments.</p>");
  
    const renderPosts = (posts) => {
      blogContainer.innerHTML = posts.map((post, i) => `
        <div class="watch-post">
          <h3>${post.title}</h3>
          <p><strong>Author:</strong> ${post.author}</p>
          <p>${post.content}</p>
          <button onclick="editPost(${i})">Edit</button>
          <button onclick="deletePost(${i})">Delete</button>
        </div>`).join("");
   
      window.posts = posts;
    };
  
    window.editPost = (i) => {
      const post = posts[i];
      const newTitle = prompt("Edit Title:", post.title);
      const newContent = prompt("Edit Content:", post.content);
      if (newTitle && newContent) {
        posts[i] = {...post, title: newTitle, content: newContent };
        alert("Post updated successfully!");
        renderPosts(posts);
      }
    };
  
    window.deletePost = (i) => {
      if (confirm("Are you sure you want to delete this post?")) {
        posts.splice(i, 1);
        alert("Post deleted successfully!");
        renderPosts(posts);
      }
    };
  });