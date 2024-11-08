const jokeText = document.querySelector('div #funny')
const punchlineText = document.querySelector('div #funny-punchline')
    
const btnFunny = document.querySelector('div #funny-button')


// const { pathname } = window.location
// const [, searchType, id] = pathname.split('/')
// const url = searchType === 'joke' ? `/api/v1/joke/${id}` : '/api/v1/random-joke' //ik this is something we didn't need but I wanted to keep it in because you never know if you wanna add more functionality

const url = '/api/v1/random-joke' //I couldnt get the top one working :(

btnFunny.addEventListener('click', async () => {
    const results = await fetch(url)
    const { joke, punchline } = await results.json()

    jokeText.textContent = joke
    punchlineText.textContent = punchline
})