const searchButton = document.querySelector("span#search")

searchButton.addEventListener("click", srchClick)

function srchClick()
{

    const filter = document.querySelector(`div#search`)

    if (filter.style.display == "block")
    {

        filter.style.display = "none"

    }
    else
    {

        filter.style.display = "block"

    }


}

function createClick()
{

    

}