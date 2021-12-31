console.log("JS WORKING");
fetch(
  "https://newsapi.org/v2/everything?q=technology&apiKey=cf42d666b9ce4ca0bf7efdb0b3a3ef87"
)
  .then((result) => result.json())
  .then((data) => {
    for (let i in data.articles) {
      document.querySelector("#result").innerHTML += `

        <div class="card">
        <img
          src="${data.articles[i].urlToImage}"
          alt="image"
          class="news-img"
        />
        <div class="padding">
        <img
      height="25"
      src="http://www.google.com/s2/favicons?domain=${data.articles[i].url}" class="news-icon"
    />
        <a href="${data.articles[i].url}" ><h3 class="news-title">
          ${data.articles[i].title}
          </h3></a>
          <span class="news-author">${data.articles[i].source.name}</span>
          <a href="${data.articles[i].url}" class="btn">Read More &rarr;</a>
          <small class="news-date">${data.articles[i].publishedAt}</small>
        </div>
      </div>
        
        `;
    }
  });

var today = new Date();
var curHr = today.getHours();
const greeting = document.querySelector("#greeting");

if (curHr < 12) {
  greeting.innerHTML = "good morning";
} else if (curHr < 18) {
  greeting.innerHTML = "good afternoon";
} else {
  greeting.innerHTML = "good evening";
}
