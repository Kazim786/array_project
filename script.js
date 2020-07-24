const axios = require('axios')

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
   const randomUsers = await axios.get('https://randomuser.me/api')
   console.log(randomUser)
   const user = randomUsers.results[0]
   const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Money.floor(Math.random() * 1000000)
   }
   addData(newUser)
}

function addData(obj){
    data.push(obj)
}