//Make an api request using async await


async function getACuteDogPhoto(){
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

getACuteDogPhoto()


//need to add in for errors: we got two things with async functions - try s and catches - need to add a try catch block to this code so that if something goes wrong with the fetch we can handle the errors.




// vs with just promises:


// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });