//const memeImg = document.querySelector(".memeGenerator img")
const section = document.querySelector("#memeGenerator")

const load = document.querySelector(".loader")

const updateDetails = (url, title, author) =>
{

    /*memeImg.style.background = `url(${url}) no-repeat`
    memeImg.style.backgroundSize = "cover"
    memeImg.style.backgroundPosition = "center center"*/

    const memeImg = document.createElement("img")
    const memeTitle = document.createElement("h2")
    const memeAuthor = document.createElement("div")

    memeImg.setAttribute("src", url)

    memeTitle.innerHTML = title
    memeAuthor.innerHTML = `Feito por: ${author}`

    section.appendChild(memeTitle)
    section.appendChild(memeImg)
    section.appendChild(memeAuthor)

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