//get the events from the json file
async function getEvents(){
  try{
    let response = await fetch("../Resources/json/events.json");
    let text = await response.text();
    let data = JSON.parse(text);
    return data;
  }catch(error){
    console.error("ERROR:", error);
  }
}
//create the inidivudal elemtns for the events
function createElement(type,content,attrName="",attrCon=""){
  if(type!="img"){
    let node = document.createElement(type);
    node.innerHTML=content;
    if(attrName!=""){
      node.setAttribute(attrName,attrCon);
    }else{
      node.setAttribute("class","eventText");
    }
    return node
  }else{
    let node = document.createElement(type);
    node.setAttribute("src",content);
    return node
  }
}
//create the elemtns for the events
function createEvent(details){
  let div = document.createElement("div");
  div.setAttribute("class","event");
  let img = createElement("img",details.Img);
  img.setAttribute("class","eventImage");
  div.appendChild(img);
  div.appendChild(createElement("h3",`${details.Name} - ${details.Location}`,"class","eventText eventTextTitle"));
  div.appendChild(createElement("h4",details.Date));
  div.appendChild(createElement("h4",details.Time));
  div.appendChild(createElement("h4",details.Desc));
  return div;
}
//add elements to the page
function showEvents(events){
    let allEvents = events.events;
    let eventSpace = document.getElementById("eventSpace");
    for(let i =0; i<allEvents.length;i++){
      eventSpace.appendChild(createEvent(allEvents[i]));
   }
}
//waits for getEvents to actually give the data
async function init() {
  const events = await getEvents();
  showEvents(events);
}

init();