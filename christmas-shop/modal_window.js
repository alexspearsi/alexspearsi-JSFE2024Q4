const modalWindow = document.querySelector('.background-modal');
const closeButtonModal = document.querySelector('.modal__close-button');
const giftCards = document.querySelectorAll('.gift_item')


const liveStars = document.querySelector('.power-item1 > :nth-child(3)').children;
const createStars = document.querySelector('.power-item2 > :nth-child(3)').children;
const loveStars = document.querySelector('.power-item3 > :nth-child(3)').children;
const dreamStars = document.querySelector('.power-item4 > :nth-child(3)').children;






function closeModal() {
    modalWindow.style.display = "none";
    document.documentElement.style.overflowY = ''
    document.body.classList.remove('modal-open');
    toZeroOpacityOfStars()
}

// Close modal window through clicking on the background
modalWindow.addEventListener('click', function(event) {
  if (event.target === this) {
    closeModal();
  }
});

// Close modal window through clicking on the button
closeButtonModal.addEventListener('click', () => {
    closeModal()
})




function toZeroOpacityOfStars() {
    Array.from(liveStars).forEach(star => star.style.opacity = '0.1')
    Array.from(createStars).forEach(star => star.style.opacity = '0.1')
    Array.from(loveStars).forEach(star => star.style.opacity = '0.1')
    Array.from(dreamStars).forEach(star => star.style.opacity = '0.1')
}


function updatePicture(item) {
    const cardPicture = document.querySelector('.modal');
    switch (item.getAttribute('data-type')) {
        case 'For Work':
            cardPicture.style.backgroundImage = 'url(./assets/images/gift-for-work.png)';
            break;
        case 'For Health':
            cardPicture.style.backgroundImage = 'url(./assets/images/gift-for-health.png)';
            break;
        case 'For Harmony':
            cardPicture.style.backgroundImage = 'url(./assets/images/gift-for-harmony.png)';
            break;
    }
}

function updateCardCategory(item) {
    const cardCategory = document.querySelector('.modal__text-category');
    cardCategory.innerHTML = item.getAttribute('data-type').toUpperCase();

    switch (item.getAttribute('data-type')) {
        case 'For Work':
            cardCategory.style.color = "#4361FF";
            break;
        case 'For Health':
            cardCategory.style.color = "#06A44F";
            break;
        case 'For Harmony':
            cardCategory.style.color = "#FF43F7";
            break;
    }
}

function updateCardName(item) {
    const cardName = document.querySelector('.modal__text-name');
    cardName.innerHTML = item.getAttribute('data-name').toUpperCase();

    if (item.getAttribute('data-name').length > 25) {
        cardName.style.fontSize = "15px"
    } else {
        cardName.style.fontSize = "16px"
    }
}

function updateCardDescription(item) {
    const cardDescription = document.querySelector('.modal__text-description')
    cardDescription.innerHTML = item.getAttribute('data-description');
}

function updateScore(item) {
    const cardSuperpowerLive = document.querySelector('.power-item1').children[1];
    const cardSuperpowerCreate = document.querySelector('.power-item2').children[1];
    const cardSuperpowersLove = document.querySelector('.power-item3').children[1];
    const cardSuperpowersDream = document.querySelector('.power-item4').children[1];

    cardSuperpowerLive.innerHTML = '+' + item.getAttribute('data-live');
    cardSuperpowerCreate.innerHTML = '+' + item.getAttribute('data-create');
    cardSuperpowersLove.innerHTML = '+' + item.getAttribute('data-love');
    cardSuperpowersDream.innerHTML = '+' + item.getAttribute('data-dream');
}



// ADD EVENT HANDLER TO EACH CARD
giftCards.forEach(item => {

    item.addEventListener('click', () => {
        modalWindow.style.display = "block";
        document.documentElement.style.overflowY = 'hidden'
        
        updateCardCategory(item);
        updateCardName(item);
        updateCardDescription(item);
        updateScore(item);
        updatePicture(item);
        
        Array.from(liveStars).forEach((star, index) => {
            if (index < item.getAttribute('data-live') / 100) {
                star.style.opacity = '1';
            }
        })

        Array.from(createStars).forEach((star, index) => {
            if (index < item.getAttribute('data-create') / 100) {
                star.style.opacity = '1';
            }
        })

        Array.from(loveStars).forEach((star, index) => {
            if (index < item.getAttribute('data-love') / 100) {
                star.style.opacity = '1';
            }
        })

        Array.from(dreamStars).forEach((star, index) => {
            if (index < item.getAttribute('data-dream') / 100) {
                star.style.opacity = '1';
            }
        })
    })
})


