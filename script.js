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
        let cardcontainer = document.createElement('div')
        let cardImg = document.createElement('img')
        let cardName = document.createElement('div')
        let Image = data[i].images[0].url
        cardcontainer.setAttribute('value', `${i}`)
        cardcontainer.setAttribute('id',`${i}`)
        cardImg.setAttribute('class', 'cardImg')
        cardName.setAttribute('class', 'cardName')
        cardcontainer.setAttribute('class', 'cardcontainer')
       
        cardImg.src = Image
        cardName.innerText = data[i].name
        container.append(cardcontainer)
        cardcontainer.append(cardName)
        cardcontainer.append(cardImg)  
      }

      document.querySelectorAll('.cardcontainer')
      .forEach(el => {
        el.addEventListener('mouseover', e => {
          e.target.classList.add('active')
          e.target
        }
        )
          
        el.addEventListener('mouseout', e => {
          e.target.classList.remove('active')
                }
               
              )
        el.addEventListener('click', e => {
          let eventNumber = e.target.getAttribute("value")
      

             let modal = document.getElementById("myModal");


             let cardBtnValue = document.getElementById(`${eventNumber}`);


             let span = document.getElementsByClassName("close")[0];

             cardBtnValue.onclick = function() {
              modal.style.display = "block";
              const modelContent = document.querySelector('.modal-content')
              modelContent.removeChild
              let div = document.createElement('div')
              let eventDate = `Date ${data[eventNumber].dates.start.localDate}`
              div.append(eventDate)
              let name = data[eventNumber].name
              let eventLocDiv = document.createElement('div')
              eventLocDiv.innerText = `Venu: ${data[eventNumber]._embedded.venues[0].name}`

             
               





              modelContent.innerText = name
              modelContent.appendChild(div)
              modelContent.appendChild(eventLocDiv)
              
                
                
              
            }



// When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
               }
             }






          


























        })
         
        }
      )
    }
  





     renderList()

   

  })}
userGetInfo()
  

  
  
  

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  preventUserFromF()
 
