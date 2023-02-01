let url = 'https://app.ticketmaster.com/discovery/v2/events?'
let APIKey ='apikey=KvUvKsCiFH8SuDxoCtgOmokjYojZ6w36&locale'

document.getElementById('submit').addEventListener('click',(e) => {
  e.preventDefault()
  let searchinput = document.getElementById('searchinput').value
  let dropdown = document.getElementById('dropdown').value
  let tempURL = ''

  switch(dropdown) {
    case 'keyword':
       tempURL = `${url}${APIKey}=*&keyword=${searchinput}`
      getData(tempURL)
      break;
    case 'postalCode':
        tempURL = `${url}${APIKey}=*&postalCode=${searchinput}`
      getData(tempURL)
      break;
     case 'city':
        tempURL = `${url}${APIKey}=*&city=${searchinput}`
      getData(tempURL)

       break;

    default:
      // code block
  }



})







async function getData(tempURL){
  let res = await fetch(`${tempURL}`)
  let json = await res.json()
  console.log(json._embedded.events)
}


