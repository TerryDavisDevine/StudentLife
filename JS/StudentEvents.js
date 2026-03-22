// get events 
async function getEvents(){
    try{
      let jsonStuff = await fetch("../resources/events.json");
      let events = await jsonStuff.json();
      return events;
    }catch(error){
      console.error("Error, can't proccess event data: ", error);
    }
}
function createEvent(name,date,time,location,desc){
  return document.createElement("h6").appendChild(document.createTextNode(name));
}
function showEvents(events){
    let eventSpace = document.getElementById("eventSpace");
    for(let i =0; i<events.length;i++){
      eventSpace.appendChild(createEvent)
    }
}
showEvents(getEvents());