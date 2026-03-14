function signup(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

localStorage.setItem("user",user)
localStorage.setItem("pass",pass)

alert("Account created")

}

function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

let savedUser=localStorage.getItem("user")
let savedPass=localStorage.getItem("pass")

if(user===savedUser && pass===savedPass){

alert("Login successful")

}else{

alert("Wrong username or password")

}

}

async function getCountry(){

let country=document.getElementById("countryInput").value

let url=`https://restcountries.com/v3.1/name/${country}`

let response=await fetch(url)

let data=await response.json()

let c=data[0]

let currency=Object.values(c.currencies)[0].name
let language=Object.values(c.languages)[0]

document.getElementById("result").innerHTML=

`
<h2>${c.name.common}</h2>

<img src="${c.flags.png}">

<p>Capital: ${c.capital}</p>

<p>Population: ${c.population}</p>

<p>Region: ${c.region}</p>

<p>Currency: ${currency}</p>

<p>Language: ${language}</p>

<button onclick="addFav('${c.name.common}')">⭐ Add Favorite</button>

`

}

function addFav(country){

let li=document.createElement("li")

li.innerText=country

document.getElementById("favList").appendChild(li)

}

function toggleMode(){

document.body.classList.toggle("light")

}