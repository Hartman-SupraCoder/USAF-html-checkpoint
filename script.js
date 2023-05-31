
let page = document.querySelector("main");

document.getElementById("home").addEventListener("click", loadHome);
document.getElementById("login").addEventListener("click", loadLogin);

document.addEventListener('DOMContentLoaded', function () {
    loadLogin();
  })

  
  
  function loadLogin() {
    page.innerHTML = null;
    page.className = "loginPage";
    let template = document.createElement("div");
    template.innerHTML = `
    <h1>Login</h1>
    <h3>Email:</h3>
    <input type="text">
    <h3>Password:</h3>
    <input type="text">
    <br>
    <br>
    <button>Login</button>
    `;
    page.appendChild(template);


  }

  function loadHome() {
    
    page.innerHTML = null;
    page.className = "homePage";
    for(let i = 8; i>0; i--) {
        //document.body
        let template = document.createElement("article");
        template.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Goncharov_film_poster.svg">`;
        template.addEventListener("click", loadMovie);
        page.appendChild(template);
    }

  }

  function loadMovie() {
    page.innerHTML = null;
    //page.className = "movieDetails";
    let template = document.createElement("div");
    template.innerHTML = `
    <div class="movieDetails">
    <div class="movieLeft">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Goncharov_film_poster.svg">
    <br>
    <h3>Leave a comment:</h3>
    <input type="text">
    <br>
    <br>
    <button>Submit</button>
    </div>
    <div class="movieRight">
    <h1>You don’t need to go to the theater this weekend to see Scorsese’s new (fake) film</h1>
    <p>The movie Goncharov has come to life on social media, complete with posters, a star-studded cast, a fleshed out plot, and a dedicated fandom. The only catch? The film doesn’t actually exist.</p>
    </div>
    </div>
    `;
    page.appendChild(template);

  }

  
