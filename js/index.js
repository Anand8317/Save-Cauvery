const menuButton = document.querySelector('.nav-ham-icon');
const bar = document.getElementsByClassName('bar');
const navSocial = document.querySelector('.nav-social');
const navBar = document.querySelector('.nav-bar');
const header = document.querySelector('.nav');
const headerItems = document.getElementsByClassName('toggle1');
const speaker = document.querySelector('.speaker-container');

menuButton.addEventListener('click', () => {
  Array.from(bar).forEach((element) => {
    element.classList.toggle('pressed');
  });
  navSocial.classList.toggle('active');
  navBar.classList.toggle('active');
  menuButton.classList.toggle('pressed');
  header.classList.toggle('pressed');
});

Array.from(headerItems).forEach((element) => {
  element.addEventListener('click', () => {
    if (bar[0].classList.contains('pressed')) {
      Array.from(bar).forEach((element) => {
        element.classList.toggle('pressed');
      });
      navSocial.classList.toggle('active');
      navBar.classList.toggle('active');
      menuButton.classList.toggle('pressed');
      header.classList.toggle('pressed');
    }
  });
});

const speakerList = [
  {
    img: '../Images/s1.png',
    name: 'Rajendra Singh',
    des1: 'Indian water conservationist and environmentalist.',
    des2: 'Also known as "waterman of India", he won the Magsaysay Award in 2001.',
  },
  {
    img: '../Images/s2.png',
    name: 'Amla Ruia',
    des1: 'Amla Ruia, a Mumbai-based social activist',
    des2: 'she founded Aakar Charitable Trust. Up until now, the Trust has helped in the construction of 2000',
  },
  {
    img: '../Images/s3.png',
    name: 'Aabid Surti',
    des1: 'Aabid Surti runs a one-man NGO named the Drop Dead Foundation',
    des2: 'The 80-year-old does it all for free, with his team of one volunteer and a plumber.',
  },
  {
    img: '../Images/s4.png',
    name: 'Ayyappa Masagi',
    des1: 'Ayyappa Masagi has changed the lives of thousands',
    des2: 'He started planting rubber and coffee',
  },
  {
    img: '../Images/s5.png',
    name: 'Shirish Apte',
    des1: 'An executive engineer with the Minor Irrigation',
    des2: 'Recharged groundwater levels and increased agricultural output',
  },
  {
    img: '../Images/s6.png',
    name: 'Chandra Kishore Patil',
    des1: 'Chandra Kishore Patil, a resident of Indiranagar, Nashik',
    des2: 'Despite him being faced by rude people',
  },

];

for (let i = 0; i < speakerList.length; i += 1) {
  speaker.innerHTML += `
  <div class="speaker">
        <img src="${speakerList[i].img}">
        <div class="speaker-info">
          <h4>${speakerList[i].name}</h4>
          <h5>${speakerList[i].des1}</h5>
          <hr class="speaker-info-hr">
          <p>${speakerList[i].des2}</p>
      </div>
  </div>
  `;
}
