let url = 'https://app.ticketmaster.com/discovery/v2/events?apikey='
let APIKey ='KvUvKsCiFH8SuDxoCtgOmokjYojZ6w36&locale'

document.getElementById('submit').addEventListener('click',(e) => {
  e.preventDefault()
  let searchinput = document.getElementById('searchinput').value
  let dropdown = document.getElementById('dropdown').value
  console.log(searchinput,dropdown);


})







async function getData(){
  let res = await fetch(`${url}${APIKey}=*&postalCode=10001`)
  let json = await res.json()
  console.log(json._embedded.events)
}


getData()