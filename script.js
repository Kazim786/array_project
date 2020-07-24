// const axios = require('axios')

const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')


let data = []

getRandomUser()
getRandomUser()
getRandomUser()

//get random user and add money. I will use axios

async function getRandomUser () {
   const randomUsers = await axios.get('https://randomuser.me/api/')
   console.log(randomUsers)
//    const user = randomUsers.data.results[0].name
const user = randomUsers.data.results[0]
   console.log(user)
   const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
   }
   addData(newUser)
}

function addData(obj){
    data.push(obj)
    updateDOM()
}

//UpdateDOM

function updateDOM(providedData = data){
    //Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'

    providedData.forEach((item) => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong>${item.name}</strong> ${item.money}`
        main.appendChild(element)
    })
}