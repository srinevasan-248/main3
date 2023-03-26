// fetch('https://dummyjson.com/quotes/random')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


    // fetch('https://dummyjson.com/quotes/random')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(e))

//     getQuotes();
//     async function getQuotes(){
//         try{
//         let response = await fetch('https://dummyjson.com/quotes/random');
//         let data = await response.json();
//         console.log(data)
//     } 
//     catch(error){
//         console.log(error.message)
//     } 
// }

getQuotes();
    async function getQuotes(){
        try{
        let response= await fetch('https://dummyjson.com/quotes/random');
        let data= await response.json();
        console.log(data)
    } 
    catch(error){
        console.log(error.message)
    } 
}
