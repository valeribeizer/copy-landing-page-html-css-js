const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotContainer = document.querySelector(".dots");
const optionEl = document.getElementsByClassName("option-h4");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector(".btn--close-modal");
const btn = document.querySelector('.btn-modal');

function addLinks() {
  var data = [
    { "section--1": "Home appliance repair" },
    { "section--2": "Commercial appliance repair" },
    { "section--3": "HVAC repair" },
    { "section--4": "Brands" },
    { "section--5": "Coverage area" },
    { "section--6": "Prices" },
    { "section--7": "About ABV" },
  ];

  data.forEach((obj) => {
    let $link = $('<li class="nav__item" />');
    let addedHTML = "";
    const modifiedData = Object.entries(obj);
    addedHTML += `<a class="nav__link" href="#${modifiedData[0][0]}">${modifiedData[0][1]}</a>`;
    $link.append(addedHTML);
    $(".nav__links").append($link);
  });
}

addLinks();

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
btn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth", block: 'nearest' });
  }
});

let currSlide = 0;
const maxSlides = slides.length;

function goToSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}

function createDots() {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
}

function activateDot(slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide='${slide}']`)
    .classList.add("dots__dot--active");
}

function nextSlide() {
  if (currSlide === maxSlides - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
}

function prevSlide() {
  if (currSlide === 0) {
    currSlide = maxSlides - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
}

goToSlide(0);
createDots();
activateDot(0);

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

function addAdvantages() {
  var data = [
    {
      adv1: "img/adv1.svg",
      "Expert technicials":
        "Our technicians are highly trained and experienced in repairing a wide range of home appliances and HVAC, ensuring quality and reliable repairs.",
    },
    {
      adv2: "img/adv2.svg",
      "Convenient service":
        "We offer flexible scheduling options and on-site repairs to minimize disruptions to your daily routine and save you time.",
    },
    {
      adv3: "img/adv3.svg",
      "Affordable prices":
        "Our repair services are affordably priced to provide you with cost-effective solutions without compromising on quality.",
    },
    {
      adv4: "img/adv4.svg",
      Warranty:
        "We stand behind our work with a warranty on parts and labor, giving you peace of mind and assurance that your appliance will be repaired properly.",
    },
  ];

  data.forEach((obj) => {
    let $advantage = $('<div class="advantage" />');
    let addedHTML = "";
    const modifiedData = Object.entries(obj);
    addedHTML += `<img src="${modifiedData[0][1]}" alt="${modifiedData[0][0]}" /><h3>${modifiedData[1][0]}</h3><h6>${modifiedData[1][1]}</h6>`;
    $advantage.append(addedHTML);
    $(".advantages").append($advantage);
  });
}

addAdvantages();

function animateValue(id, start, end, duration) {
  if (start === end) return;
  const range = end - start;
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const obj = document.getElementById(id);
  const timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

const greenContainer = document.querySelector(".jobs");

const observerOptions = {
  threshold: 0.1,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateValue("counter", 450, 465, 4000);
    }
  });
};

const greenContainerObserver = new IntersectionObserver(callback, observerOptions);

greenContainerObserver.observe(greenContainer);

function addOptions() {
  let data = [
    {
      "Refregirator repair": `"Need a reliable refrigerator repair in Boston? Contact us now for fast, affordable service."<br />"Our certified technicians can fix any make and model."`,
    },
    { "Washer repair": "2" },
    { "Dryer repair": "3" },
    { "Cooktop repair": "4" },
    { "Range repair": "5" },
  ];

  let data2 = [
    {
      "Stove repair": "6",
    },
    { "Dishwasher repair": "7" },
    { "Oven repair": "8" },
    { "Wine cooler repair": "9" },
    { "Freezer repair": "10" },
  ];

  let data3 = [
    {
      "Refrigeration units": "11",
    },
    { "Commercial laundry appliance": "12" },
    { "Other commercial appliances": "13" },
  ];

  data.forEach((obj) => {
    let $option = $('<div class="har--option" />');
    let addedHTML = "";
    const modifiedData = Object.entries(obj);
    addedHTML += `
        <div class="har--option__visible">
          <h4 class="option-h4">${modifiedData[0][0]}</h4>
          <button>
            <img src="img/upper right arrow 1.svg" alt="arrow" />
          </button>
        </div>
        <h6 class="har--option__hidden">
          ${modifiedData[0][1]} 
        </h6>
        </div>`;

    $option.append(addedHTML);
    $(".har--options__column.1").append($option);
  });

  data2.forEach((obj) => {
    let $option = $('<div class="har--option" />');
    let addedHTML = "";
    const modifiedData = Object.entries(obj);
    addedHTML += `
        <div class="har--option__visible">
          <h4 class="option-h4">${modifiedData[0][0]}</h4>
          <button>
            <img src="img/upper right arrow 1.svg" alt="arrow" />
          </button>
        </div>
        <h6 class="har--option__hidden">
          ${modifiedData[0][1]} 
        </h6>
        </div>`;

    $option.append(addedHTML);
    $(".har--options__column.2").append($option);
  });

  data3.forEach((obj) => {
    let $option = $('<div class="har--option" style="width: 100%" />');
    let addedHTML = "";
    const modifiedData = Object.entries(obj);
    addedHTML += `
        <div class="har--option__visible">
          <h4 class="option-h4">${modifiedData[0][0]}</h4>
          <button>
            <img src="img/upper right arrow 1.svg" alt="arrow" />
          </button>
        </div>
        <h6 class="har--option__hidden">
          ${modifiedData[0][1]} 
        </h6>
        </div>`;

    $option.append(addedHTML);
    $(".har.2").append($option);
  });
}

addOptions();

const array = [...optionEl];

array.forEach((e) =>
  e.addEventListener("click", function (elem) {
    elem.target
      .closest(".har--option")
      .querySelector(".har--option__hidden")
      .classList.toggle("open");

    elem.target.parentNode.parentNode.classList.toggle("har--option__opened");

    if (
      elem.target.parentNode.parentNode.classList.contains(
        "har--option__opened"
      )
    ) {
      elem.target.nextElementSibling.firstElementChild.src =
        "img/upper right arrow.svg";
    } else {
      elem.target.nextElementSibling.firstElementChild.src =
        "img/upper right arrow 1.svg";
    }
  })
);
