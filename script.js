// const axios = require('axios')

const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')

//Array where we will store the data
let data = []

getRandomUser()
getRandomUser()
getRandomUser()

//get random user and add money. I will use axios

async function getRandomUser () {
    try{
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
    catch{
        console.log('error')
    }
  
}

function addData(obj){
    data.push(obj)
    updateDOM()
}

//UpdateDOM
//Set default parameter to the data array
function updateDOM(providedData = data){
    //Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'

    providedData.forEach((item) => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
        main.appendChild(element)
    })
}

//Format numbers in money syntax

function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67

}



//double money Map
function doubleMoney() {
    data = data.map((user) => {
        return {...user, money: user.money * 2}
    })

    //Everytime a change is made we have to call updateDOM()
    updateDOM()
}


//Sorting the richest first

//Did this by myself :D
function sortHighest(){
    data = data.sort(function(a, b){
        return b.money - a.money
        //descending order. Will show the richest first
    })
    updateDOM()
}



//Add event listener

addUserBtn.addEventListener('click', getRandomUser)


doubleBtn.addEventListener('click', doubleMoney)

showMillionairesBtn.addEventListener('click', sortHighest)

