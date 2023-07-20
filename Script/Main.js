const section = document.querySelector("#memeGenerator")
const filter = document.getElementById("filter")

const load = document.querySelector(".loader")

filter.addEventListener("input", filterMeme)

const updateDetails = (url, title, author) =>
{

    const memeDiv = document.createElement("div")
    memeDiv.classList.add("memeDiv")

    const memeImg = document.createElement("img")
    const memeTitle = document.createElement("h2")
    const memeAuthor = document.createElement("div")

    memeImg.setAttribute("src", url)

    memeTitle.innerHTML = title
    memeTitle.classList.add("memeTitle")

    memeAuthor.innerHTML = `Feito por: ${author}`
    memeAuthor.classList.add("memeAuthor")

    memeDiv.appendChild(memeTitle)
    memeDiv.appendChild(memeImg)
    memeDiv.appendChild(memeAuthor)

    section.appendChild(memeDiv)

}

const generateMeme = () =>
{

    let prevData

    for (let i = 1; i < 10; i++)
    {

        fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then((data) => {

        if(prevData != data.url)
        {

            updateDetails(data.url, data.title, data.author)

        }
        else
        {

            

        }

        prevData = data.url

    })
    
    }

    

}

function filterMeme(i)
{

    const term = i.target.value.toUpperCase()
    const memes = document.querySelectorAll(".memeDiv")

    memes.forEach(meme => {
        
        const title = meme.querySelector(".memeTitle").innerText.toUpperCase()
        const author = meme.querySelector(".memeAuthor").innerText.toUpperCase()

        if(title.indexOf(term) > -1 || author.indexOf(term) > -1)
        {

            meme.style.display = "block"

        }
        else
        {

            meme.style.display = "none"

        }

    });

}

function showLoad() {

    load.classList.add("show")

    setTimeout(() => {
        
        load.classList.remove("show")

        setTimeout(() => {

            generateMeme()

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

showLoad()