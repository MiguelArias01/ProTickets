# ProTickets


App title  --------------------ProTickets--------------------



 --------app description----


The porpose of the app is to search for events within user criteria and give the user the ability to
choose which ever event they would like.


-------API-------



I am using the ticket master API which allows for 5000 calls per day.
The information that i plan to use, is getting the event zipcode, or city or location or other
depending on what the user chooses to do.

                                                           ------API snippet -------


<img width="1512" alt="Screenshot 2023-01-31 at 14 57 55" src="https://user-images.githubusercontent.com/79764475/215877048-3b2befcc-b795-4315-8c02-7246789c446c.png">

let tempURL = 'https://app.ticketmaster.com/discovery/v2/events?'
```
async function getData(tempURL){
          try {
          let res = await fetch(`${tempURL}`)
          let json = await res.json()
          return json._embedded.events}
          catch(err){
            alert(`Your search didn\'t return any results, try to search for an event`)
          }
        }

getData(tempURL);
```


-------wire frames------
![wire](https://user-images.githubusercontent.com/79764475/215877902-3642d929-e8fd-4357-9dfe-2aec7d56ea2a.png)
--------MVP-------

the main features will be the search by differnt criteria and it will return that information.


----post MVP----
add a clickable interface to all the cards so the user can get more information.

---------goals--------
jan 31---
complete the pitch



feb 1-----
get the correct data from the API



feb 2----
create the search funtionality 


feb 3----
implement the wireframe and API


feb 4-----
implement the wireframe and API


feb 5------
 test for possible issues


feb 6-----
present the Idea



______Priority Matrix____

<img src="https://res.cloudinary.com/dkrb38n6n/image/upload/v1675647320/Screenshot_2023-02-05_at_20.34.34_hrvlsx.png">


____Time Frame___

Design 3 hours

research 3 hours

Pseudocoind 3 hours

research 3 hours

HTML 3 hours

JavaScript 3 hours

research 3 hours

javaScript 3 hours

CSS 3 hours

Testing 2 hours

Deployment 30 mins
