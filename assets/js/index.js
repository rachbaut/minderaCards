//global variables

var cardToDisplay = 3;
//initial variables
var start = 0;
var end = cardToDisplay;
var isRightArrowClickable = true;
var isLeftArrowClickable = false;

async function loadCardData() {
    
    //loading data
    var response = await fetch(`http://localhost:3000/cards?_start=${start}&&_end=${end}`);
    var data = await response.json(); //data = list of cards
    if (start > 0) {
        isLeftArrowClickable = true;
        isRightArrowClickable = true;
    }
    if (!data || !data.length) {
        if (start < 0) {
            //disable button
            start = 0
            end = cardToDisplay
            isLeftArrowClickable = false
            
        } else {
            isRightArrowClickable = false;
        }
        return;
    }
    displayCardData(data);
} 



 function displayCardData(data) {
    if(!data || !data.length) return;
    var container = document.getElementById('card-container');
    container.innerHTML = "";
     for (var i = 0; i < data.length; i++) {
       
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
        
        container.appendChild(toAppend[0]);
    }
    
}


//create html elements to put in the DOM, takes a string and turns into a list of nodes
function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}



//on click events, slider


function onLeftButtonClick() {
    //if button clicked call loadCardData
    if (!isLeftArrowClickable) return;
    end = start
    start = start - cardToDisplay
    
    loadCardData()
    
    
}

function onRightButtonClick() {
    if (!isRightArrowClickable) return;
    start = end
    end = end + cardToDisplay
    loadCardData()
    
}












