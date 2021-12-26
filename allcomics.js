


const getAll = async () => {

    try{

        let res = await fetch("https://gateway.marvel.com/v1/public/comics?apikey=02da52b648fb2194f44abec3cc3896b4&hash=b53d254823a3df8c6c69d8268621775a&ts=2");


        let { data } = await res.json();



        return data.results;

    } catch(err){
        console.log(err);
    }

}

const displayAll = async () => {

    let Main = document.getElementById('comics__main');

    let data = await getAll();


    for(let comic of data){
        let Parent = document.createElement('div');
        Parent.className = "comic__box";
        Parent.onclick = () => {

            let Details = document.createElement('div');
            console.log(comic);
            Main.innerHTML = "";

            Details.innerHTML = `
                <h1>${comic.title}</h1>
                <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
                <button id="back__to--comics">BACK</button>
            `;

            Main.append(Details)
            
            let Back = document.getElementById("back__to--comics");
            Back.onclick = () => {
                location.reload();
            }
            
        }

        
        let Img = document.createElement('img');
        Img.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
        
        let name = document.createElement('h3');
        name.innerText = comic.title;

        Parent.append(Img, name);

        Main.append(Parent);
    }

}


export { displayAll };