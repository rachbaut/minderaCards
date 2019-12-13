var cardProject = require('./index');
var testData = [
    {
        "id": 1,
        "title": "We are Humans",
        "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
        "author": "António Capelo",
        "image_url": "http://lorempixel.com/300/150/"
    },
    {
        "id": 2,
        "title": "We work together",
        "text": "We insist on working collaborativelly. <strong>No rockstars</strong>. No departments. The whole owns the whole project together.",
        "author": "José Tavares",
        "image_url": "http://lorempixel.com/300/150/"
    },
    {
        "id": 3,
        "title": "We change",
        "text": "Nothing is sacred, from our habits to our rituals, to our enviroment. Change is a natural part of the human life, and we prefer to embrace it.",
        "author": "Pedro Almeida",
        "image_url": "http://lorempixel.com/300/150/"
    },
    {
        "id": 4,
        "title": "We hire differently",
        "text": "Most companies operate under the premise that employees should be replaceable like parts of an assembly line. We choose our people more carefully.",
        "author": "Marta Fernandes",
        "image_url": "http://lorempixel.com/300/150/"
    },
    {
        "id": 5,
        "title": "Get autonomous",
        "text": "You’re given an incredible amount of freedom and autonomy at Mindera. That goes for everyone.",
        "author": "Luís Couto",
        "image_url": "http://lorempixel.com/300/150/"
    },
    {
        "id": 6,
        "title": "Work together",
        "text": "Our flat structure calls for it by necessity. Being a leader may feel unnatural at first, but we expect everyone to step up and own part of the project.",
        "author": "César Aguiar",
        "image_url": "http://lorempixel.com/300/150/"
    },
    {
        "id": 7,
        "title": "Human Truths #1",
        "text": "Humans are not perfect. Don’t be afraid to fail. And when you do, you might as well fail spectacularly. This is how we grow and learn.",
        "author": "Luís Almeida",
        "image_url": "http://lorempixel.com/300/150/"
    },
    {
        "id": 8,
        "title": "Human Truths #2",
        "text": "Humans are unique. Do you love Portugueses Pop Music (<em>Pimba</em>)? Do you prefer your desk covered with sunflowers? There’s no need to hide it. Be yourself. That’s how you’ll fit in here.",
        "author": "João Almeida",
        "image_url": "http://lorempixel.com/300/150/"
    },
    {
        "id": 9,
        "title": "Humans are not \"resources\"",
        "text": "We don’t have an HR department. New hires are interviewed by the people who will be working with them. So get ready to care a lot about the people you work with.",
        "author": "Tiago Fernandes",
        "image_url": "http://lorempixel.com/300/150/"
    }
]


describe('card project', function () {
    it('should not be null', function () {
        expect(cardProject).not.toBeNull();
    })
    describe('displayCardData', function () {
        it('should not display card data if data given is null or empty', function () {
            // check to see how jest can mock the DOM 
            const element = document.createElement('div');
            expect(element).not.toBeNull();
            cardProject.displayCardData(null, element);
            expect(element.innerHTML).toBe("");
        })
    
        it('should display card data if given the correct data', function () {
            // check to see how jest can mock the DOM 
            var element = document.createElement('div');
            expect(element).not.toBeNull();
            document.body.append(element);
            cardProject.displayCardData(testData, element);
            expect(element.innerHTML).not.toBe("");
        })
    })
    describe('onLeftButtonClick', function () {
        var clone = cardProject;
        beforeEach(function() {
            clone.isLeftArrowClickable = false;
            clone.start = 0;
            clone.end = 3;
            clone.loadCardData = jest.fn();
        })
        it('should not execute if left arrow is disabled', function () {
            clone.onLeftButtonClick();
            expect(clone.start).toBe(0);
            expect(clone.end).toBe(3);
            expect(clone.loadCardData).not.toHaveBeenCalled()
        })
    })
      
})