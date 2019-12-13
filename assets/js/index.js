
var cardProject = function () {
    //global variables 
    var cardToDisplay = 3;
    var start = 0;
    var end = cardToDisplay;
    var isRightArrowClickable = true;
    var isLeftArrowClickable = false;

    //loading the card info from json array
    async function loadCardData() {
        try {
            var response = await fetch(`http://localhost:3000/cards?_start=${start}&&_end=${end}`);
            var data = await response.json(); //data = list of cards
            if (start > 0) {
                isLeftArrowClickable = true;
                isRightArrowClickable = true;
            }
            if (!data || !data.length) {
                if (start < 0) {
                    //disable arrows when no more card data is given
                    start = 0
                    end = cardToDisplay
                    isLeftArrowClickable = false

                } else {
                    isRightArrowClickable = false;
                }
                return;
            }
            var cardContainer = document.getElementById('card-container');
            displayCardData(data, cardContainer);
        } catch (error) {
            console.log(error);
        }

    }


    //display all the card data on the browser
    function displayCardData(cardList, cardHtmlElement) {
        if (!cardList || !cardList.length || !cardHtmlElement) return;
        cardHtmlElement.innerHTML = "";
        
        for (var i = 0; i < cardList.length; i++) {
            var cardData = cardList[i];
            var cardText = cardData.text;
            //if statement to control overflow of description text in cards  
            if (cardText && cardText.length > 134) {
                cardText = cardText.substring(0, 134) + '...';
            }

            var card = `<div class="column">
            <div class="card">
                <div class="card-img"><img src="${cardData.image_url}"  /></div>
                <div class="card-info">
                    <div class="row-card-info-header">
                    <div class="column-info-img"><img src="assets/img/dog.jpg" /></div>
                      <div class="column-info-title">
                        <div class="card-info-title">${cardData.title}</div>
                        <div class="card-info-subtitle">${cardData.author}</div>
                      </div> 
                  </div>
                  <div class="card-info-description">${cardText}</div>
                </div>
                <div class="card-info-link">Learn More</div>
            </div>
        </div>`
            var toAppend = htmlToElements(card); //turn into a node 
            cardHtmlElement.appendChild(toAppend[0]);
        }
    

    }


    //create html elements to put in the DOM, takes a string and turns into a list of nodes
    function htmlToElements(html) {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }

    //click events for the arrows
    function onLeftButtonClick() {
        if (!isLeftArrowClickable) return;
        end = start
        start = start - cardToDisplay
        loadCardData();

    }

    function onRightButtonClick() {
        if (!isRightArrowClickable) return;
        start = end
        end = end + cardToDisplay
        loadCardData()

    }

    //exposing functions and variables to index.test.js for unit testing
    return {
        loadCardData,
        displayCardData,
        htmlToElements,
        onLeftButtonClick,
        onRightButtonClick, 
        start,
        end,
        loadCardData,
        isLeftArrowClickable,
        isRightArrowClickable
    }
}();


module.exports = cardProject;