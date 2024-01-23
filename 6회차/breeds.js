const apiRandomDOg = "https://dog.ceo/api/breeds/image/random/42"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("input")
const button = document.getElementById("button")
const select = document.getElementById("select")

const currentDogs = []

window.addEventListener("load",function(){
    // 강쥐 사진 뿌리기
    request1.open("get", apiRandomDOg)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            const dogImgDiv = document.createElement("div")
            dogImgDiv.classList.add("flex-item")
            dogImgDiv.innerHTML = `
            <img src=${item}>`
            main.appendChild(dogImgDiv)
        })
    })
    request1.send()

})