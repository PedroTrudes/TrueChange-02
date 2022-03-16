// função pegando uma api 
const url = "https://jsonplaceholder.typicode.com/photos";

function getApi(){
    axios.get(url)
    .then(response => {
        const data = response.data.slice(1,2);

        titleBlog.textContent = JSON.stringify(data)

        console.log(data)

    })

    .catch(error => console.log(error));
}

getApi()