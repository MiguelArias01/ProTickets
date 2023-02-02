let url = 'https://app.ticketmaster.com/discovery/v2/events?'
let APIKey ='apikey=KvUvKsCiFH8SuDxoCtgOmokjYojZ6w36&locale'
const search = document.getElementById('searchinput')
const select = document.getElementById('dropdown')

function preventUserFromF(){
  select.addEventListener('change', () => { search.value = "" })
  search.addEventListener("keypress", (event) => {
      if (select.value === 'postalCode') {
        if (event.key.charCodeAt() < 48 || event.key.charCodeAt() > 57)
          event.preventDefault()    
      }
  
});}

function userGetInfo(){
  document.getElementById('submit').addEventListener('click',(e) => {
    e.preventDefault()
    let searchinput = search.value
    let dropdown = select.value
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
          tempURL = `${url}${APIKey}=*`
          getData(tempURL)
  }})}


async function getData(tempURL){
  let res = await fetch(`${tempURL}`)
  let json = await res.json()
  console.log(json._embedded.events)
}


preventUserFromF()
userGetInfo()