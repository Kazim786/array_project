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
   const randomUsers = await axios.get('https://randomuser.me/api')
   console.log(randomUsers)
   const user = randomUsers.data.results[0].name
   console.log(user)
   const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Money.floor(Math.random() * 1000000)
   }
   addData(newUser)
}

function addData(obj){
    return data.push(obj)
}