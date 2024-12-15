//                                Walid Jerjawi                  
//                     Final-Sprint -FrontEnd Technology 
//                         Dec 02, 2024- Dec 15, 2024




document.addEventListener('DOMContentLoaded', () => {
  // -------------------Applying explosion on logo - header section-------------
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    logo.classList.add('explode');
    setTimeout(() => logo.classList.remove('explode'), 500);
  });

  // Add a pulse effect on page load
  window.addEventListener('load', () => {
    logo.style.transition = 'transform 0.5s ease';
    logo.style.transform = 'scale(1.2)';
    setTimeout(() => (logo.style.transform = 'scale(1)'), 500);
  });

  // ---------------Rotating social icons on hero section---------------
  const icons = document.querySelectorAll('.hero-social-links a i');
  icons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'rotate(360deg)';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'rotate(0)';
    });
  });

  // ---------------------Show details clicking button - About section-------------------------
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const tabContentContainer = document.querySelector('.tab-content');
  tabContentContainer.style.display = 'none';

  tabLinks.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabContentContainer.style.display = 'block';
      tabLinks.forEach((link) => link.classList.remove('active'));
      tabPanes.forEach((pane) => pane.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.getAttribute('data-tab'));
      target.classList.add('active');
    });
  });

  // ---------------Skills Percentage and rotating circle - About section---------------------------
  document.querySelectorAll('.circle').forEach((circle) => {
    const percentage = parseInt(circle.getAttribute('data-percentage'));
    const progressCircle = circle.querySelector('.progress');
    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = `${circumference}`;
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;

    circle.classList.add('rotating');
  });

  // -------------------Apply filter for Portfolio section------------------------
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const filter = e.target.getAttribute('data-filter');
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      e.target.classList.add('active');

      document.querySelectorAll('.portfolio-item').forEach((item) => {
        item.classList.remove('active');
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          if (filter !== 'all') {
            item.classList.add('active');
          }
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ------------------------Enlarge images on portfolio section with X-----------------------------
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const closeModalButton = document.querySelector('.close-btn');
  const modalOverlay = document.querySelector('.modal-overlay');

  portfolioItems.forEach((item) => {
    item.addEventListener('click', () => {
      const image = item.querySelector('img');
      modal.classList.add('active');
      modalImage.src = image.src;
      modalImage.alt = image.alt;
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    modalImage.src = '';
    modalImage.alt = '';
  };

  closeModalButton.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // ----------------------Sliding images section scrolling mouse---------------
  let isScrolling;
  const upperImages = document.querySelectorAll('.split-image.upper img');
  const lowerImages = document.querySelectorAll('.split-image.lower img');

  function pauseAnimations() {
    upperImages.forEach((img) => (img.style.animationPlayState = 'paused'));
    lowerImages.forEach((img) => (img.style.animationPlayState = 'paused'));
  }

  function resumeAnimations() {
    upperImages.forEach((img) => (img.style.animationPlayState = 'running'));
    lowerImages.forEach((img) => (img.style.animationPlayState = 'running'));
  }

  window.addEventListener('scroll', () => {
    pauseAnimations();
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      resumeAnimations();
    }, 300);
  });

  // ----------------Memory Game------------------------
  const cards = document.querySelectorAll('.card');
  const celebration = document.querySelector('.celebration');
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    checkForMatch();
  }

  function checkForMatch() {
    const isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();

    if (Array.from(cards).every((card) => card.classList.contains('flip'))) {
      showCelebration();
    }
  }

  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1000);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  function showCelebration() {
    celebration.classList.remove('hidden');
    setTimeout(() => {
      celebration.classList.add('hidden');
    }, 5000);
  }

  (function shuffle() {
    cards.forEach((card) => {
      const randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

  cards.forEach((card) => card.addEventListener('click', flipCard));


  
  document.querySelector('.restart-game-btn').addEventListener('click', () => {
    location.reload(); 
  });

  
});


