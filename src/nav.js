if (localStorage.getItem("language") === null) {
  localStorage.setItem("language", "chinese");
}
let selLanguage = localStorage.getItem("language");

function setLanguage(lang) {
  localStorage.setItem("language", lang);

  let jumbo = document.getElementsByClassName("jumbo").length;
  for (let i = 0; i < jumbo; i++) {
    document.getElementsByClassName("jumbo")[i].innerHTML =
      language[lang].jumbo;
    document.getElementsByClassName("normal")[i].innerHTML =
      language[lang].normal;
    document.getElementsByClassName("smallT")[i].innerHTML =
      language[lang].small;
  }

  const idText = {
    0: ["language-home", "home"],
    1: ["language-english", "english"],
    2: ["language-chinese", "chinese"],
    3: ["language-aboutus", "aboutUs"],
    4: ["onTheMove", "onTheMove"],
    5: ["onTheMove1", "onTheMove"],
    6: ["onTheMove2", "onTheMove"],
    7: ["onTheMove3", "onTheMove"],
    8: ["ordernow", "orderNow"],
    9: ["ordernow1", "orderNow"],
    10: ["ordernow2", "orderNow"],
    11: ["ordernow3", "orderNow"],
    12: ["aboutUsTitle", "aboutUsTitle"],
    13: ["traditionPassion", "traditionPassion"],
    14: ["openingHoursTitle", "openingHoursTitle"],
    15: ["openingHours", "openingHours"],
    16: ["location", "location"],
    17: ["address", "address"],
    18: ["followUs", "followUs"],
    19: ["rights", "rights"],
    20: ["focaccia", "focaccia"],
    21: ["focacciaIng", "focacciaIng"],
    22: ["marinara", "marinara"],
    23: ["marinaraIng", "marinaraIng"],
    24: ["margarita", "margarita"],
    25: ["margaritaIng", "margaritaIng"],
    26: ["vesuvio", "vesuvio"],
    27: ["vesuvioIng", "vesuvioIng"],
    28: ["capricciosa", "capricciosa"],
    29: ["capricciosaIng", "capricciosaIng"],
    30: ["quatroStagioni", "quatroStagioni"],
    31: ["quatroStagioniIng", "quatroStagioniIng"],
    32: ["hawaiian", "hawaiian"],
    33: ["hawaiianIng", "hawaiianIng"],
    34: ["mexican", "mexican"],
    35: ["mexicanIng", "mexicanIng"],
    36: ["chicken", "chicken"],
    37: ["chickenIng", "chickenIng"],
    38: ["pork", "pork"],
    39: ["porkIng", "porkIng"],
    40: ["bacon", "bacon"],
    41: ["baconIng", "baconIng"],
    42: ["seafood", "seafood"],
    43: ["seafoodIng", "seafoodIng"],
    44: ["veggie", "veggie"],
    45: ["veggieIng", "veggieIng"],
    46: ["american", "american"],
    47: ["americanIng", "americanIng"],
    48: ["italianPatatosa", "italianPatatosa"],
    49: ["italianPatatosaIng", "italianPatatosaIng"],
    50: ["danishKartofler", "danishKartofler"],
    51: ["danishKartoflerIng", "danishKartoflerIng"],
    52: ["chefsCroatian", "chefsCroatian"],
    53: ["chefsCroatianIng", "chefsCroatianIng"],
    54: ["calzone", "calzone"],
    55: ["calzoneIng", "calzoneIng"],
    56: ["nutella", "nutella"],
    57: ["nutellaIng", "nutellaIng"],
    58: ["panini", "panini"],
    59: ["paniniIng", "paniniIng"],
    60: ["bruschetta", "bruschetta"],
    61: ["bruschettaIng", "bruschettaIng"],
    62: ["navbarDropdownMenu", "menu"],
    63: ["pizzaMenuLabel", "pizzaMenuLabel"],
    64: ["coomingSoon", "coomingSoon"],
  };
  if (lang === "english") {
    let elem = document.getElementById("traditionPassion");
    if (elem !== null) {
      elem.style.fontFamily = "Fredericka the Great";
    }
    document.getElementById("navbarDropdownLanguage").innerHTML =
      language[lang].english;
  } else {
    let elem = document.getElementById("traditionPassion");
    if (elem !== null) {
      elem.style.fontFamily = "chineseFont";
    }
    document.getElementById("navbarDropdownLanguage").innerHTML =
      language[lang].chinese;
  }

  for (let i = 0; i < Object.keys(idText).length; i++) {
    let elem = document.getElementById(idText[i][0]);
    if (elem !== null) {
      elem.innerHTML = language[lang][idText[i][1]];
    }
  }

  //       document.getElementById('language-home').innerHTML = language[lang].home;
  //       document.getElementById('language-english').innerHTML = language[lang].english;
  //       document.getElementById('language-chinese').innerHTML = language[lang].chinese;
  //       let checkAboutUs =  document.getElementById('language-aboutus')
  // if (checkAboutUs !== null) {
  //   checkAboutUs.innerHTML = language[lang].aboutUs
  //       document.getElementById('onTheMove').innerHTML = language[lang].onTheMove;
  //       document.getElementById('onTheMove1').innerHTML = language[lang].onTheMove;
  //       document.getElementById('onTheMove2').innerHTML = language[lang].onTheMove;
  //       document.getElementById('onTheMove3').innerHTML = language[lang].onTheMove;
  //       // document.getElementById('navbarDropdownMenu').innerHTML = language[lang].menu;
  //       document.getElementById('ordernow').innerHTML = language[lang].orderNow;
  //       document.getElementById('ordernow1').innerHTML = language[lang].orderNow;
  //       document.getElementById('ordernow2').innerHTML = language[lang].orderNow;
  //       document.getElementById('ordernow3').innerHTML = language[lang].orderNow;
  //       document.getElementById('aboutUsTitle').innerHTML = language[lang].aboutUsTitle
  //       document.getElementById('traditionPassion').innerText = language[lang].traditionPassion

  //       document.getElementById('openingHoursTitle').innerHTML = language[lang].openingHoursTitle
  //       document.getElementById('openingHours').innerHTML = language[lang].openingHours
  //       document.getElementById('location').innerHTML = language[lang].location
  //       document.getElementById('address').innerHTML = language[lang].address
  //       document.getElementById('followUs').innerHTML = language[lang].followUs
  //       document.getElementById('rights').innerHTML = language[lang].rights

  //     }
}

const navBar = `<header>
 <!-- NAVBAR -->


 <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand animated pulse" href="index.html">
        <img src="src/media/logo/pecat.svg" width="30" height="30" alt="Olli">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="index.html" id="language-home">
              <script>
                  document.getElementById('language-home').innerHTML = language[selLanguage].home;
              </script> 
              <span class="sr-only">(current)</span></a>
          </li>
                <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="pizza.html" id="navbarDropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
              </a>
              <div class="dropdown-menu text-center text-lg-left" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="pizza.html" id="pizzaMenuLabel">Pizza<a>
                <script>
                console.log('test')</script>
                </a>
                <!--  <a class="dropdown-item" id="coomingSoon" >Coming Soon</a> -->
                <!--  <a class="dropdown-item" href="desserts.html">Desserts</a>
                <a class="dropdown-item" href="drinks.html">Drinks</a> -->
              </div>
               
             </li> 

             <!--  <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="album.html">Album</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://l.facebook.com/l.php?u=https%3A%2F%2Flinevoom.line.me%2Fuser%2F_dePvThKUjsSfoY-KdaDV7sLhSpneKuS1eNEwbjA%3Ffbclid%3DIwAR3E70p6UG0UzU87NJQP_4vSyIwwGwCVoDl7S7LG4jC5ZcrW8pNpvYJQxJk&h=AT0HbSU8zOrgdI0KKWTyZpnkZAomvaQXM3_6cktlnt1g2leHyMf1BtuIQt6M_reMQhPindw852zZzs6_hxFIVA-0Ac1tcCO-kRuU7gyWlkX99_8pZQzoZfFLP9hcQRuQrHo8kDnmeAjT5CD2KBs">Reservations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li> -->
 
            <li class="nav-item dropdown" id="language-menu">
              <a class="nav-link dropdown-toggle" id="navbarDropdownLanguage" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <script>
                  document.getElementById('navbarDropdown').innerHTML = selLanguage === 'english' ? language[selLanguage].english : language[selLanguage].chinese;
               </script> 
              </a>
              <div class="dropdown-menu text-center text-lg-left" aria-labelledby="navbarDropdown">
                <a class="dropdown-item"  onclick="setLanguage('english')" id="language-english">
                  <script>
                      document.getElementById('language-english').innerHTML = language[selLanguage].english;
                  </script> 
                  </a>
                  <a class="dropdown-item"  onclick="setLanguage('chinese')" id="language-chinese">
                    <script>
                        document.getElementById('language-chinese').innerHTML = language[selLanguage].chinese;
 
 
                
                    </script> 
                    </a>
              </div>
            </li>
          <!-- <li class="nav-item" id="chose-language">
            <a class="nav-link"  onclick="setLanguage('english')" id="language-english">
            
              </a>
 
          </li>
          <li  id="chose-language">
            <a class="nav-link"  onclick="setLanguage('chinese')" id="language-chinese">
       
                </a>
 
            <div id="div1"></div>
          </li> -->
          <!-- </ul>
          <div class="ml-auto">
            <a class="nav-social mr-2" href="https://github.com/PictureElement"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a class="nav-social mr-2" href="https://github.com/PictureElement"><i class="fa fa-tripadvisor" aria-hidden="true"></i></a>
            <a class="nav-social mr-2" href="https://github.com/PictureElement"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a class="nav-social" href="https://github.com/PictureElement"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </div> -->
      </div>
    </nav>
    </header>
      `;

// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", navBar);
let selLang = localStorage.getItem("language");
setTimeout(() => {
  setLanguage(selLang);
}, 100);
