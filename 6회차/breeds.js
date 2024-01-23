const apiRandomDOg = "https://dog.ceo/api/breeds/image/random/42"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-button")
const select = document.getElementById("filter-select")

const currentDogs = []

function dpdogs(item){
    const dogImgDiv = document.createElement("div")
    dogImgDiv.classList.add("flex-item")
    dogImgDiv.innerHTML = `
    <img src=${item}>`
    main.appendChild(dogImgDiv)
}

window.addEventListener("load",function(){
    // 강쥐 사진 뿌리기
    request1.open("get", apiRandomDOg)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            dpdogs(item)
        })
    })
    request1.send()

    // 셀렉트에 견종정보 뿌리기 (all->견종 정보 추가)
    request2.open("get", apiAllBreeds)
    request2.addEventListener("load", function(){
        const response = JSON.parse(request2.response)
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement("option")
            option.textContent = item
            option.value = item
            select.appendChild(option)
        })
    })
    request2.send()

})



button.addEventListener("click", function(){
    main.innerHTML=""
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1
    }) 

    input.value = ""

    filteredDogs.forEach(function(item){
            dpdogs(item)
        })
    })

    select.addEventListener("change", function(){
        main.innerHTML=""
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(select.value) !== -1
    }) 

    input.value = ""

    filteredDogs.forEach(function(item){
            dpdogs(item)
        })
    })