const axios = require('axios')

const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')


let data = []

//get random user and add money. I will use axios

async getRandomUser () {
   const randomUsers = await axios.get('https://randomuser.me/api')
   
}