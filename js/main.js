window.onload= function(){document.querySelector('#loader').style.display="none";}

//Toggle Width Sidebar and Body Content
let checker = true;
document.getElementById('toggler-sidebar').addEventListener('click', function () {
  //Check The Screen's Width
  if(window.innerWidth > 992) {
    //Large Screens
    if(checker == true) {
      checker = false;
      determineWidth('6%', '94%', 'none', 0);
    } else {
      checker = true;
      determineWidth('12%', '88%', 'inline', 1);
    }
  //Medium Screens
  } else if(window.innerWidth > 767) {
    if(checker == true) {
      checker = false;
      determineWidth('8%', '92%', 'none', 0);
    } else {
      checker = true;
      determineWidth('18%', '82%', 'inline', 1);
    }
    // Small Screens
  } else if (window.innerWidth > 500) {
    if(checker == true) {
      checker = false;
      determineWidth('13%', '87%', 'none', 0);
    } else {
      checker = true;
      determineWidth('30%', '70%', 'inline', 1);
    }
  //Extra Small Screens
  } else {
    if(checker != true) {
      checker = true;
      determineWidth('18%', '82%', 'none', 0);
    } else {
      checker = false;
      determineWidth('38%', '62%', 'inline', 1);
    }
  } 
});

//Adjust Slidebar Width and Togge links's Text
function determineWidth(navWidth, contentWidth, display, opacity) {

  //Determine Sidebar and Body Content Width Function
  document.querySelector('.navbar-Menu').style.width = navWidth;
  document.querySelector('.main-content').style.width = contentWidth;

  //Toggle Links Text
  document.querySelectorAll('.link-title').forEach(function (link) {
    link.style.cssText = 'display: ' + display + ';' +  'opacity: ' + opacity;
  });
}

//Change Active Class and Toggle Pages
const navbarLinks = document.querySelectorAll('.nav-links li');

navbarLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navbarLinks.forEach(function (li) {
      //Remove Active Class From All Links 
      li.classList.remove('active');
      //Add Active Class To The Selected Link Only 
      link.classList.add('active');

      //Hide All Pages
      document.querySelector(li.getAttribute('data-link')).style.cssText = "visibility: hidden; left: 100%; z-index: 1";
      //Show The Selected Page Only
      document.querySelector(link.getAttribute('data-link')).style.cssText = "visibility: visible; left: 0; z-index: 5";
    });
  })
});

//Show Name Litter by Litter
let nameContainer = document.getElementById('my-name'),
    nameText      = 'Hisham Barakat.',
    counterName   = setInterval(countName, 250),
    i = 0;
//Show Name Function
function countName() {
  if(i < nameText.length) {
    nameContainer.textContent += nameText[i];
    i++;
  } else {
    clearInterval(counterName);
      // document.querySelector('#loader').style.display='none';

  }
}

//Toggle Exclamation Mark Every 500 M.S
let once = 0;
setInterval(function () {
  let mark = document.getElementById('mark');
  if(once == 0) {
    mark.style.visibility = 'hidden';
    once = 1;
  } else {
    mark.style.visibility = 'visible';
    once = 0;   
  }
}, 500);
