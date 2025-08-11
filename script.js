const jokeBtn = document.getElementById("jokeBtn")
const apiKey = "lwBTPcjUYlaScJiz/CqRbw==BLMwlmooOnGDmFVJ"
const joke = document.getElementById("joke")


const options = {
    method: 'GET',
    headers: {'X-Api-Key': apiKey},
    
}

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?'


 async function jokeToggle() {
   const response = await fetch(apiURL, options)
   const data = await response.json()

// console.log(data[0].joke)

joke.innerText = data[0].joke


}


jokeBtn.addEventListener('click', jokeToggle)
