




const getHome = async ()=>{
    const url = "/";
    try {
     const response = await fetch(url);
      return await response.json();
  }catch (error) {
      console.log(error);
  }


  const addArticle = async(e)=>{
    e.preventDefault();
    const form = document.getElementById("addArticle");
    const formData = new FormData(form);
    let response;

    response = await fetch("/api/teams",{
      method: "POST",
      body: formData,
    });
    response = await response.json();
  }


  
  }
  
  const showHome = async ()=>{
  
    let articles = await getHome();
    let articleSection = document.getElementById("articleList");
  
    //
   articles.forEach((article)=>{
    console.log("asdf")
    articleSection.append(getArticleItem(article));
    });
  
  }
  
    const getArticleItem = (article)=> {
      const articleSection = document.createElement("section");
      articleSection.classList.add("recent-artical");
  
      const title = document.createElement("h2");
        title.innerHTML = article.title;
        articleSection.appendChild(title);

        const text = document.createElement("p");
        text.innerHTML = article.text;
        articleSection.appendChild(text);

        const button = document.createElement("button");
        button.onclick="window.location.href="+article.link+";";
        articleSection.appendChild(button);
  
          return articleSection;
      }
  
  
  window.onload = () => showHome();
  