const postContainer = document.getElementById("postsContainer")
const filter = document.getElementById("filter")
const load = document.querySelector(".loader")

let limit = 12
let page = 1

async function getPosts() {

    const res = await fetch(

        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`

    )

    const data = await res.json()

    console.log(data)

    return data

}

async function showPosts() {

    const posts  = await getPosts()

    posts.forEach(post => {
        
        const postEl = document.createElement("div")
        postEl.classList.add("post")
        postEl.innerHTML = `

        <div class="postInfo">

            <h2 class="postTitle">${post.title}</h2>
            <p class="postBody"> ${post.body} </p>

        </div>
        
        `

        postContainer.appendChild(postEl)

    });

}

function filterPosts(i)
{

    const term = i.target.value.toUpperCase()
    const posts = document.querySelectorAll(".post")

    posts.forEach(post => {
        
       const title = post.querySelector(".postTitle").innerText.toUpperCase()
        const body = post.querySelector(".postBody").innerText.toUpperCase()

        if(title.indexOf(term) > -1 || body.indexOf(term) > -1)
        {

            post.style.display = "flex"

        }
        else
        {

            post.style.display = "none"

        }

    });

}

function showLoad() {

    load.classList.add("show")

    setTimeout(() => {
        
        load.classList.remove("show")

        setTimeout(() => {
            
            page++
            showPosts()

        }, 300);

    }, 1000);

}

window.addEventListener("scroll", () => {

    const {scrollTop, scrollHeight, clientHeight} = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 5)
    {

        showLoad()

    }

})

showPosts()
filter.addEventListener("input", filterPosts)