
let timerId;

const searchChar = async (name) => {


    try {

        let response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&apikey=02da52b648fb2194f44abec3cc3896b4&hash=b53d254823a3df8c6c69d8268621775a&ts=2`);
        

        let { data } = await response.json();
console.log(data.results);
        return data.results;

    } catch (err) {
        console.log("err", err);
    }


}

const displayResult = (allData) => {
    let displayDiv = document.getElementById("display__quary");

    displayDiv.innerHTML = null;

    for(let ele of allData) {

        let p = document.createElement('p');
        p.setAttribute('class', 'char__names');
        p.innerText = ele.name;
        p.onclick = function() {

            let parent = document.querySelector("main");
            parent.setAttribute("id", 'char__box');
            parent.innerHTML = "";

            parent .innerHTML = `
                <h1>${ele.name}</h1>
                <img src="${ele.thumbnail.path}.${ele.thumbnail.extension}">
                <div class="right">
                <h4>${ele.description}</h4>
                </div>
                <button id="back">BACK</button>
            `;

            let backBtn = document.getElementById("back");
            backBtn.onclick = function() {
                location.reload();
            }

        };
        displayDiv.append(p);
    };

}




const main = async () => {
    let name = document.querySelector("input").value;

    let char = await searchChar(name);

    if(char === undefined) {
        return false;
    }

    displayResult(char);
    // console.log("char", char);
}



const debounce = () => {


    let name = document.querySelector("input").value;

    if(name.length < 1){
        return false;
    }

    if(timerId) {
        clearTimeout(timerId);
    }

    timerId = setTimeout(()=> {

        main();
        
    }, 1200);

}


export { debounce };