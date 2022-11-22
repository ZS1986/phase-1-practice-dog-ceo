console.log('%c HI', 'color: firebrick')
const imgCont = document.querySelector("dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulCont = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-drop")
let breedsArray = []

ulCont.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)

function getImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => {
        const img = images.message
        let imgsArray = createImgElement(imgs)
        renderImg(imgArray)
    })
}
function createImgElement(img){
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
    })
}
function renderImgs(imgsArray){
    imgsArray.forEach(element => {
        renderImg(element)
    })
        
}
function renderImg(element){
    ulCont.innerHTML += element
}
function getBreeds(){
    fetch(breedURL)
    .then(resp => resp.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        const breedsLi = createliElement(breedsArray)
        renderLis(breedsLi)
    })

}
function createLiElement(breedsArray){
    return breedsArray.map((breeds) =>{
        let li = `<li> ${breeds}</li>`
        return li
    })
}
function renderLis(breedsLi){
    breedsLi.foreach(element => {
        renderImg(element)
    })

}
function handleClick(event){
    if (event.target.nodeName=== 'LI') {
        if(event.target.style.color==='red'){
            event.target.style.color = 'black'
        }
    }else {
        event.target.style.color = 'red'
    }
}

function handleChange(event){
    const letter = event.target.value
    const filteredBreeds = breedsArray.filter(breeds => breeds.startsWith(letter))
    const filteredBreedsLis = createLielement(filteredBreeds)
    ulCont.innerHTML =''
    renderLis(filteredBreedsLis)

}
getImages()
getBreeds()

