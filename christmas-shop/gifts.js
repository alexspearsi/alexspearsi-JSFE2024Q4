import { cards } from './cards.js'

function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleCards(cards)


const listOfCards = document.querySelector('.gifts__list')

function showCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardHTML = `<div class="gift_item gift1" data-type="${card.category}">
                            <div class="gift__item-description">
                                <h4 class="gift__item-heading">${card.category.toUpperCase()}</h4>
                                <p class="gift__item-paragraph">${card.name.toUpperCase()}</p>
                            </div>
                        </div>`
        listOfCards.insertAdjacentHTML('beforeend', cardHTML)
    }
}

showCards(cards)

const workCards = document.querySelectorAll('[data-type="For Work"]')
const healthCards = document.querySelectorAll('[data-type="For Health"]')
const harmonyCards = document.querySelectorAll('[data-type="For Harmony"]')

const allButton = document.getElementById('all')
const workButton = document.getElementById('work')
const healthButton = document.getElementById('health')
const harmonyButton = document.getElementById('harmony')


function toDisplayCard(nameOfCard, value) {
    nameOfCard.forEach(item => {
        item.style.display = `${value ? 'block' : 'none'}`;
    })
}

function toAddActiveDisplay(nameOfCard) {
    nameOfCard.classList.add('active')
}

function toRemoveActiveDisplay(nameOfCard) {
    nameOfCard.classList.remove('active')
}

allButton.addEventListener('click', () => {
    toDisplayCard(workCards, true)
    toDisplayCard(healthCards, true)
    toDisplayCard(harmonyCards, true)

    allButton.classList.add('active')
    toRemoveActiveDisplay(workButton)
    toRemoveActiveDisplay(healthButton)
    toRemoveActiveDisplay(harmonyButton)
})

workButton.addEventListener('click', () => {
    toDisplayCard(workCards, true)
    toDisplayCard(healthCards, false)
    toDisplayCard(harmonyCards, false)

    toAddActiveDisplay(workButton)
    toRemoveActiveDisplay(allButton)
    toRemoveActiveDisplay(healthButton)
    toRemoveActiveDisplay(harmonyButton)
})

healthButton.addEventListener('click', () => {
    toDisplayCard(workCards, false)
    toDisplayCard(healthCards, true)
    toDisplayCard(harmonyCards, false)

    toAddActiveDisplay(healthButton)
    toRemoveActiveDisplay(allButton)
    toRemoveActiveDisplay(harmonyButton)
    toRemoveActiveDisplay(workButton)
})

harmonyButton.addEventListener('click', () => {
    toDisplayCard(workCards, false)
    toDisplayCard(healthCards, false)
    toDisplayCard(harmonyCards, true)

    toAddActiveDisplay(harmonyButton)
    toRemoveActiveDisplay(allButton)
    toRemoveActiveDisplay(healthButton)
    toRemoveActiveDisplay(workButton)
})




















// allButton.addEventListener('click', () => {
//     workCards.forEach(item => {
//         item.style.display = 'block';
//     })

//     healthCards.forEach(item => {
//         item.style.display = 'block';
//     })
    
//     harmonyCards.forEach(item => {
//         item.style.display = 'block';
//     })
// })

// workButton.addEventListener('click', () => {
//     workCards.forEach(item => {
//         item.style.display = 'block';
//     })

//     healthCards.forEach(item => {
//         item.style.display = 'none';
//     })
    
//     harmonyCards.forEach(item => {
//         item.style.display = 'none';
//     })
// })

// healthButton.addEventListener('click', () => {
//     workCards.forEach(item => {
//         item.style.display = 'none';
//     })

//     healthCards.forEach(item => {
//         item.style.display = 'block';
//     })
    
//     harmonyCards.forEach(item => {
//         item.style.display = 'none';
//     })
// })

// harmonyButton.addEventListener('click', () => {
//     workCards.forEach(item => {
//         item.style.display = 'none';
//     })

//     healthCards.forEach(item => {
//         item.style.display = 'none';
//     })
    
//     harmonyCards.forEach(item => {
//         item.style.display = 'block';
//     })
// })