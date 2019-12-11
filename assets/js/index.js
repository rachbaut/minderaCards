
//define a function

var loadData = async function() {
    //loading data
    var response = await fetch('http://localhost:3000/cards');
    var data = await response.json(); //data = list of cards
    
    for (var i = 0; i < 3; i++) {
       
        var cardData = data[i];
        
         var card = `<div class="column">
             <div class="card">
                 <div class="card-img"><img src="${cardData.image_url}"  /></div>
                 <div class="card-info">
                     <row class="card-info-header">
                         <div class="card-info-title">${cardData.title}</div>
                         <div class="card-info-subtitle">${cardData.author}</div>
                     </row>
                     <div class="card-info-description">${cardData.text}</div>
                 </div>
                 <div class="card-info-link">Learn More</div>
             </div>
         </div>`
        var toAppend = htmlToElements(card); //turn into a node 
        var container = document.getElementById('card-container');
       
        container.appendChild(toAppend[0]);
    }
    
}


//create html elements to put in the DOM, takes a string and turns into a list of nodes
function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}


//
function onLeftButtonClick() {
    console.log("left button clicked")
}

function onRightButtonClick() {
    console.log("right clicked")
}












