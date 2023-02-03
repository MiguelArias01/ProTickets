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
    document.getElementById('submit').addEventListener('click',async (e) => {
      e.preventDefault();
    let tempURL = ''
    let searchinput = search.value
    let dropdown = select.value
   


    switch(dropdown) {
      case 'keyword':
         tempURL = `${url}${APIKey}=*&keyword=${searchinput}`
        break;
      case 'postalCode':
          tempURL = `${url}${APIKey}=*&postalCode=${searchinput}`
        break;
       case 'city':
          tempURL = `${url}${APIKey}=*&city=${searchinput}`
         break;
      default:
          tempURL = `${url}${APIKey}=*`
    }
   
      

        async function getData(tempURL){
          let res = await fetch(`${tempURL}`)
          let json = await res.json()
          return json._embedded.events
        }




   async function renderList(){
      data = await getData(tempURL)
      console.log(data)
      const container = document.getElementById('container')
      container.innerHTML = ''
      e.innerHTML = ''
      for (let i = 0; i < data.length; i++) {
        let cardImg = document.createElement('div')
        let cardName = document.createElement('div')
        let Image = data[i].images[0].url
        cardImg.setAttribute('class', 'cardImg')
        cardName.setAttribute('class', 'cardName')
        cardImg.style.backgroundImage = `url('${Image}')`
        cardName.innerText = data[i].name
        cardImg.append(cardName)
        container.append(cardImg)
       
        
      }

     }
  





     renderList()

   

  })}
userGetInfo()
  

  
  
  

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  preventUserFromF()
 
