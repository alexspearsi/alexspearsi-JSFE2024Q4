const cards = [
    {
      "name": "Bug Magnet",
      "description": "Able to find bugs in code like they were placed there on purpose.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+200",
        "dream": "+400"
      }
    },
  
    {
      "name": "Console.log Guru",
      "description": "Uses console.log like a crystal ball to find any issue.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+200",
        "dream": "+400"
      }
    },
  
    {
      "name": "Shortcut Cheater",
      "description": "Knows every keyboard shortcut like they were born with them.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+400",
        "dream": "+200"
      }
    },
  
    {
      "name": "Merge Master",
      "description": "Merges branches in Git without conflicts, like a wizard during an exam.",
      "category": "For Work",
      "superpowers": {
        "live": "+200",
        "create": "+500",
        "love": "+200",
        "dream": "+300"
      }
    },
  
    {
      "name": "Async Tamer",
      "description": "Handles asynchronous code and promises like well-trained pets.",
      "category": "For Work",
      "superpowers": {
        "live": "+100",
        "create": "+400",
        "love": "+200",
        "dream": "+300"
      }
    },
  
    {
      "name": "CSS Tamer",
      "description": "Can make Flexbox and Grid work together like they were always best friends.",
      "category": "For Work",
      "superpowers": {
        "live": "+200",
        "create": "+500",
        "love": "+200",
        "dream": "+300"
      }
    },
  
    {
      "name": "Time Hacker",
      "description": "Writes code at the last moment but always meets the deadline.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+500",
        "dream": "+200"
      }
    },
  
    {
      "name": "Layout Master",
      "description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+300",
        "love": "+200",
        "dream": "+200"
      }
    },
  
    {
      "name": "Documentation Whisper",
      "description": "Understands cryptic documentation as if they wrote it themselves.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+200",
        "dream": "+100"
      }
    },
  
    {
      "name": "Feedback Master",
      "description": "Accepts client revisions with the Zen calm of Buddha.",
      "category": "For Work",
      "superpowers": {
        "live": "+300",
        "create": "+500",
        "love": "+300",
        "dream": "+400"
      }
    },
  
    {
      "name": "Code Minimalist",
      "description": "Writes code so concise that one line does more than a whole file.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+500",
        "dream": "+200"
      }
    },
  
    {
      "name": "Pixel-Perfect Magician",
      "description": "Aligns elements to the last pixel, even when the design looks abstract.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+400",
        "dream": "+400"
      }
    },
  
    {
      "name": "Posture Levitation",
      "description": "Can sit for hours, but maintains perfect posture like a ballerina.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+500",
        "love": "+500",
        "dream": "+400"
      }
    },
  
    {
      "name": "Step Master",
      "description": "Gets 10,000 steps a day even while sitting at the computer.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+300",
        "love": "+500",
        "dream": "+400"
      }
    },
  
    {
      "name": "Snack Resister",
      "description": "Ignoring desktop snacks like a strict dietician.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+100",
        "love": "+200",
        "dream": "+400"
      }
    },
  
    {
      "name": "Hydration Bot",
      "description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
      "category": "For Health",
      "superpowers": {
        "live": "+500",
        "create": "+300",
        "love": "+500",
        "dream": "+500"
      }
    },
  
    {
      "name": "Sleep Overlord",
      "description": "Sleeps 6 hours but feels like they had 10.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+500",
        "love": "+500",
        "dream": "+500"
      }
    },
  
    {
      "name": "Break Guru",
      "description": "Takes a stretch break every hour without forgetting, no matter how focused.",
      "category": "For Health",
      "superpowers": {
        "live": "+300",
        "create": "+300",
        "love": "+300",
        "dream": "+400"
      }
    },
  
    {
      "name": "Eye Protector",
      "description": "Can work all day at the monitor without feeling like their eyes are on fire.",
      "category": "For Health",
      "superpowers": {
        "live": "+100",
        "create": "+300",
        "love": "+500",
        "dream": "+400"
      }
    },
  
    {
      "name": "Stress Dodger",
      "description": "Masters meditation right at the keyboard.",
      "category": "For Health",
      "superpowers": {
        "live": "+100",
        "create": "+400",
        "love": "+200",
        "dream": "+400"
      }
    },
  
    {
      "name": "Yoga Coder",
      "description": "Easily switches from coding to yoga and back.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+400",
        "love": "+400",
        "dream": "+400"
      }
    },
  
    {
      "name": "Healthy Snacker",
      "description": "Always picks fruit, even when chocolate is within arm’s reach.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+300",
        "love": "+200",
        "dream": "+400"
      }
    },
  
    {
      "name": "Chair Exerciser",
      "description": "Manages to work out without leaving the chair.",
      "category": "For Health",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+500",
        "dream": "+400"
      }
    },
  
    {
      "name": "Caffeine Filter",
      "description": "Drinks coffee at night and still falls asleep with no problem.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+300",
        "love": "+500",
        "dream": "+200"
      }
    },
  
    {
      "name": "Joy Charger",
      "description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+200",
        "create": "+200",
        "love": "+500",
        "dream": "+500"
      }
    },
  
    {
      "name": "Error Laugher",
      "description": "Laughs at code errors like they’re jokes instead of getting angry.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+500",
        "dream": "+500"
      }
    },
  
    {
      "name": "Bug Acceptance Guru",
      "description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+500",
        "dream": "+400"
      }
    },

  
    {
      "name": "Deadline Sage",
      "description": "Remains zen even when the deadline is close and the project manager is stressed.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+200",
        "create": "+200",
        "love": "+300",
        "dream": "+500"
      }
    },
  
    {
      "name": "Inspiration Maestro",
      "description": "Finds inspiration on an empty screen as if masterpieces are already there.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+400",
        "dream": "+100"
      }
    },
  
    {
      "name": "Peace Keeper",
      "description": "Maintains inner calm even in moments of intense crisis.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+200",
        "create": "+200",
        "love": "+500",
        "dream": "+500"
      }
    },
  
    {
      "name": "Empathy Guru",
      "description": "Feels the team’s mood and can lift everyone’s spirits.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+500",
        "create": "+200",
        "love": "+500",
        "dream": "+500"
      }
    },
  
    {
      "name": "Laughter Generator",
      "description": "Can lighten any tense situation with a joke that even bugs laugh at.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+200",
        "dream": "+500"
      }
    },
  
    {
      "name": "Pause Master",
      "description": "Knows when to just step back from the keyboard and breathe.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+100",
        "dream": "+100"
      }
    },
  
    {
      "name": "Coder Healer",
      "description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+500",
        "dream": "+500"
      }
    },
  
    {
      "name": "Music Code Curator",
      "description": "Creates work playlists so good, even deadlines follow the rhythm.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+300",
        "dream": "+200"
      }
    }
]

const modalWindow = document.querySelector('.background-modal');
const closeButtonModal = document.querySelector('.modal__close-button');
const giftCards = document.querySelectorAll('.bestgifts__list-gift');

const liveStars = document.querySelector('.power-item1 > :nth-child(3)').children;
const createStars = document.querySelector('.power-item2 > :nth-child(3)').children;
const loveStars = document.querySelector('.power-item3 > :nth-child(3)').children;
const dreamStars = document.querySelector('.power-item4 > :nth-child(3)').children;

// Shuffle the cards
function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array.slice(0, 4);
}
shuffleCards(cards)

const fourCards = cards.slice(0, 4);






function toZeroOpacityOfStars() {
    Array.from(liveStars).forEach(star => star.style.opacity = '0.1')
    Array.from(createStars).forEach(star => star.style.opacity = '0.1')
    Array.from(loveStars).forEach(star => star.style.opacity = '0.1')
    Array.from(dreamStars).forEach(star => star.style.opacity = '0.1')
}

function updatePicture(item) {
  const cardPicture = document.querySelector('.modal');
  console.log(cardPicture);
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
    console.log(cardCategory);

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

giftCards.forEach((item, index) => {
    const wholeGiftCard = item;
    const giftCategory = item.children[0].children[0]
    const giftName = item.children[0].children[1]
    giftCategory.innerHTML = fourCards[index].category.toUpperCase();
    giftName.innerHTML = fourCards[index].name.toUpperCase();
    
    wholeGiftCard.setAttribute('data-type', fourCards[index].category);
    wholeGiftCard.setAttribute('data-name', fourCards[index].name);
    wholeGiftCard.setAttribute('data-description', fourCards[index].description);
    wholeGiftCard.setAttribute('data-live', fourCards[index].superpowers.live.slice(1));
    wholeGiftCard.setAttribute('data-create', fourCards[index].superpowers.create.slice(1));
    wholeGiftCard.setAttribute('data-love', fourCards[index].superpowers.love.slice(1));
    wholeGiftCard.setAttribute('data-dream', fourCards[index].superpowers.dream.slice(1));

    // change the color of category
    switch (item.getAttribute('data-type')) {
        case 'For Work':
            item.children[0].children[0].style.color = "#4361FF";
            break;
        case 'For Health':
            item.children[0].children[0].style.color = "#06A44F";
            break;
        case 'For Harmony':
            item.children[0].children[0].style.color = "#FF43F7";
            break;
    }

    // switch the picture of cards
    switch (item.getAttribute('data-type')) {
      case 'For Work':
          item.style.backgroundImage = 'url(./assets/images/gift-for-work.png)';
          break;
      case 'For Health':
          item.style.backgroundImage = 'url(./assets/images/gift-for-health.png)';
          break;
      case 'For Harmony':
          item.style.backgroundImage = 'url(./assets/images/gift-for-harmony.png)';
          break;
  }



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
