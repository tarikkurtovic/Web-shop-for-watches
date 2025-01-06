const apiKey = "a17730141887429e9a7efd24572e2e97";
const fetchNewsButton = document.getElementById("fetchNews");
const newsResult = document.getElementById("newsResult");
const errorMessage = document.getElementById("error");
fetchNewsButton.addEventListener("click", async () => {
  newsResult.innerHTML = "";
  errorMessage.textContent = "";

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=gaming&language=en&sortBy=publishedAt&apiKey=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch news. Try again later.");
    }
    const data = await response.json();
    if (data.articles.length === 0) {
      throw new Error("No articles found for gaming news.");
    }
    displayNews(data.articles);
  } catch (error) {
    errorMessage.textContent = error.message;
  }
});

function displayNews(articles) {
    const maxArticles = 5;
    const limitedArticles = articles.slice(0, maxArticles);
    limitedArticles.forEach((article) => {
      const newsDiv = document.createElement("div");
      newsDiv.classList.add("news-article");
      newsDiv.innerHTML = `
        <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
        <p>${article.description || "No description available."}</p>
        <p><small>Published on: ${new Date(article.publishedAt).toLocaleDateString()}</small></p>
      `;
      newsResult.appendChild(newsDiv);
    });
  }