function generateMeme(event){
    event.preventDefault();

    const memeCollection = document.getElementById('memeSection');

    const imgLink = document.getElementById("img-link");
    const newTopText = document.getElementById("top-text");
    const newBottomText = document.getElementById("bottom-text");

    const newMeme = document.createElement("div");
    newMeme.classList = 'meme-container';
    newMeme.style.backgroundColor = randomColor();

    const memeBox = document.createElement("div");
    memeBox.classList = 'meme-box';

    const memeImage = document.createElement("img");
    memeImage.classList = 'meme-img';
    memeImage.setAttribute('src', imgLink.value);
    
    const topTextDiv = document.createElement("div");
    topTextDiv.classList = 'meme-top-text';
    topTextDiv.innerText = newTopText.value;

    const bottomTextDiv = document.createElement("div");
    bottomTextDiv.classList = 'meme-bottom-text';
    bottomTextDiv.innerText = newBottomText.value;

    const removeButton = document.createElement("button");
    removeButton.classList = 'remove-button';
    removeButton.innerText = "Remove This Meme";
    removeButton.addEventListener('click', function(){
       btnParent = removeButton.parentElement;
       btnParent.remove(); 
    });


    memeBox.append(memeImage, topTextDiv, bottomTextDiv);

    newMeme.append(memeBox, removeButton);

    memeCollection.append(newMeme);
    
  //  newMeme.innerText = newTopText.value;


    event.target.reset();
}

function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}

let memeForm = document.querySelector("form");
memeForm.addEventListener("submit", generateMeme);
