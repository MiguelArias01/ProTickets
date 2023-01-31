let url = 'https://app.ticketmaster.com/discovery/v2/events?apikey='

let APIKey ='KvUvKsCiFH8SuDxoCtgOmokjYojZ6w36&locale'

async function getData(){
  let res = await fetch(`${url}${APIKey}=*&postalCode=10001`)
  let json = await res.json()
  console.log(json._embedded.events)
}


getData()