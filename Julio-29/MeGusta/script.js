


console.log("Cargado script.js");


/* QUERY SELECTOR */

let posts = document.querySelectorAll(".post");

/* ESCUCHADOR DE EVENTOS PARA CADA POST */

posts.forEach((post) => {
    console.log(post);
    let likeButton = post.querySelector("button");
    let likesCount = post.querySelector("span");
    likeButton.addEventListener("click", () => {
        console.log(`CLICKED ${likesCount.innerHTML} likes`)
        let likes= parseInt(likesCount.innerHTML);
        likes++;
        likesCount.innerHTML = likes;
    });
});