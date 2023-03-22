const pizzaListPrice = {
  focaccia: { smallT: 150, normal: 250, jumbo: 300 },
  marinara: { smallT: 150, normal: 250, jumbo: 300 },
  margarita: { smallT: 180, normal: 280, jumbo: 340 },
  vesuvio: { smallT: 190, normal: 290, jumbo: 350 },
  capricciosa: { smallT: 200, normal: 300, jumbo: 360 },
  quatroStagioni: { smallT: 230, normal: 330, jumbo: 390 },
  hawaiian: { smallT: 200, normal: 300, jumbo: 360 },
  mexican: { smallT: 220, normal: 320, jumbo: 380 },
  chicken: { smallT: 230, normal: 330, jumbo: 390 },
  pork: { smallT: 230, normal: 330, jumbo: 390 },
  bacon: { smallT: 230, normal: 330, jumbo: 390 },
  seafood: { smallT: 240, normal: 340, jumbo: 400 },
  veggie: { smallT: 220, normal: 320, jumbo: 380 },
  american: { smallT: 230, normal: 330, jumbo: 390 },
  italianPatatosa: { smallT: 220, normal: 320, jumbo: 380 },
  danishKartofler: { smallT: 230, normal: 330, jumbo: 390 },
  chefsCroatian: { smallT: 230, normal: 330, jumbo: 390 },
  calzone: { smallT: 220, normal: 320, jumbo: "x" },
  nutella: { smallT: 220, normal: 320, jumbo: 380 },
  panini: { smallT: 200, normal: 380, jumbo: 550 },
  bruschetta: { smallT: 120, normal: 220, jumbo: 320 },
};

const pizzaListNames = Object.keys(pizzaListPrice);
console.log(
  "🚀 ~ file: nav.js:62 ~ setLanguage ~ Object.keys(idText):",
  pizzaListNames
);
function GetPizzaMenu() {
  let pizzaList = "";
  for (let i = 0; i < pizzaListNames.length; i++) {
    pizzaList += `<hr class="food-horizontal-rule" />
<div class="row align-items-center menu-item">
  <div class="col-md-3 food-image">
  </div>
  <div class="col-md-9">
    <h3 class="food-title">
      <span class="food-name" id="${pizzaListNames[i]}">
        <script>
          document.getElementById("${pizzaListNames[i]}").innerHTML =
            language[selLanguage].${pizzaListNames[i]};
        </script>
      </span>

      <span class="food-price float-right"
      ><p class="jumbo">
        <script>
          document.getElementsByClassName("jumbo")[${i}].innerHTML =
            language[selLanguage].jumbo;
        </script>
      </p><sup> ${pizzaListPrice[pizzaListNames[i]].jumbo}</sup></span
    >
    <span class="food-price float-right"
      ><p class="normal">
        <script>
          document.getElementsByClassName("normal")[${i}].innerHTML =
            language[selLanguage].normal;
        </script>
      </p><sup> ${pizzaListPrice[pizzaListNames[i]].normal}</sup></span
    >
    <span class="food-price float-right"
      ><p class="smallT">
        <script>
          document.getElementsByClassName("smallT")[${i}].innerHTML =
            language[selLanguage].smallT;
        </script>
      </p><sup> ${pizzaListPrice[pizzaListNames[i]].smallT}</sup></span
    >

    </h3>
    <p class="food-ingredients" id="${pizzaListNames[i] + "Ing"}">
      <script>
        document.getElementById("${pizzaListNames[i] + "Ing"}").innerHTML =
          language[selLanguage].${pizzaListNames[i] + "Ing"};
      </script>
    </p>
  </div>
</div>
`;
  }
  //   console.log("🚀 ~ file: pizza.js:74 ~ GetPizzaMenu ~ pizzaList:", pizzaList)
  return pizzaList;
}
