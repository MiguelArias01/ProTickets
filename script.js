let rootURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'

let APIKey ='apikey=KvUvKsCiFH8SuDxoCtgOmokjYojZ6w36&locale'





async function getData(){
  let res = await fetch(`${rootURL}&countryCode=US&${APIKey}&postalCode=10001&size=1`)
  let json = await res.json()
  console.log(json._embedded.events)
}


getData()