var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

  for (var i = 0; i < menuLinks.length; i++);
  let link = document.createElement('a');
  let text = document.createElement('text');

function menuBar() {
  var topMenu = document.getElementById("top-menu");
  if (topMenu.className === "topnav") {
    topMenu.className += " responsive";
  } else {
    topMenu.className = "topnav";
  }
}


const mainE1 = document.querySelector('main');

mainE1.style.backgroundColor ='var(--main-bg)';
mainE1.innerHTML = '<h1>SEI ROCKS!</h1>';
mainE1.classList.add('flex-ctr');

topMenuE1 = document.getElementById('top-menu');
topMenuE1.innerHTML = 'ABOUT CATALOG ORDERS ACCOUNT';
topMenuE1.style.backgroundColor = 'var(--top-menu-bg)';
topMenuE1.classList.add('flex-around');

subMenu1 = document.getElementById('sub-menu');
subMenu1.style.backgroundColor = 'var(--sub-menu-bg';
subMenu1.classList.add('flex-around');
subMenu1.style.position = absolute;
subMenu1.style.top = 0;

topMenuLinks = document.querySelector('a');
































/*
function()

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  for (var i = 0; i < menuLinks.length; i++); {
    navItem = document.createElement("li");
    navLink = document.createElement("a");

    navLink.innerHTML = menuLinks[i].text;
    navLink.href = menuLinks[i].href;
  
  };



{

};
.topMenuE1.style.backgroundColor = 'blue';

const main = document.createElement('mainE1');
const newElement = document.createElement('flex-ctr');

const topMenuE1 = document.
*/