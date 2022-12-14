let url=location.href;
//SERVICES
if(url.indexOf("index.html")!=-1){
  let services=document.querySelector("#services");

let printServices=`<div class="container">
                        <div class="row align-items-center text-center">`;

let servicesImg=['destination.png','gallery.png','price-tag.png'];
let servicesH3=['Destinations','Best photos','Best prices'];
let servicesP=['We offer you the best destinations in whole world!','Places where you can taka the most beautiful photos!','Right place to find best prices for top-rated destinations!'];

const BASE_IMG='assets/img/';

for(let i=0;i<servicesImg.length;i++){
    printServices+=`<div class="col-lg-4" id="icon-card">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 p-2">
                            <img src="${BASE_IMG}${servicesImg[i]}" alt="serviceIcon"/>
                            <h3>${servicesH3[i]}</h3>
                            <p class="lead mb-0">${servicesP[i]}</p>
                        </div>
                    </div>`
}

printServices+=`</div></div>`;

services.innerHTML=printServices;

//END SERVICES
//////////////////////////////////////////     

//BEST OFFERS
//////////////////////////////////////////
let products = {
    data: [
      {
        productName: "Europe",
        category: "Nature",
        price: "500",
        image: "assets/img/europe.jpg",
      },
      {
        productName: "Africa",
        category: "Exotic",
        price: "550",
        image: "assets/img/africa.jpg",
      },
      {
        productName: "Amazon",
        category: "Exotic",
        price: "600",
        image: "assets/img/amazon river.jpg",
      },
      {
        productName: "Canada",
        category: "Nature",
        price: "400",
        image: "assets/img/canada.jpg",
      },
      {
        productName: "Hawaii",
        category: "Sea",
        price: "700",
        image: "assets/img/hawaii.jpg",
      },
      {
        productName: "Cruise",
        category: "Sea",
        price: "800",
        image: "assets/img/cruise.jpg",
      },
    ],
  };

  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category);
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);

    let cardParent =  document.createElement("div");
    cardParent.classList.add("card-parent", "d-flex","justify-content-center");
    cardParent.appendChild(card);
    document.getElementById("products").appendChild(cardParent);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.parentElement.classList.remove("hide");
        element.parentElement.classList.add("d-flex");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.parentElement.classList.remove("hide");
          element.parentElement.classList.add("d-flex");
        } else {
          //hide other elements
          element.parentElement.classList.remove("d-flex");
          element.parentElement.classList.add("hide");
        }
      }
    });
  }
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  //END BEST OFFERS
//////////////////////////////////////////


 //JQUERY
 /////////////////////////////////////////
 $(document).ready(function() {
  $('.button-value').hover
  (function(){
    $(this).css('background-color','#0d1f3a')
  },
  function(){
    $(this).css('background-color','#e4e2e2')
  })
});
}
//////////////////////////////////////////////////////////////////
//  CONTACT PAGE
/////////////////////////////////////////////////////////////////
if(url.indexOf("contact.html")!=-1){
  createContactForm();
var numErorr=0;
  function createContactForm() {
      let contactform = document.querySelector(".contact-form-parent");
      let form, section, label, input, p;
  
      form = document.createElement("form");
      form.name = "forma-prijava";
      form.id = "forma-prijava";
      contactform.appendChild(form);
    
      // First and last name section
      section = document.createElement("div");
      section.classList.add("mb-3");
      
      label = document.createElement("label");
      label.htmlFor = "namelname";
      label.classList.add("form-label");
      label.innerHTML = "First name and last name";
      section.appendChild(label);
  
      input = document.createElement("input");
      input.type = "text";
      input.id = "namelname";
      input.classList.add("form-control");
      section.appendChild(input);
  
      p = document.createElement("p");
      p.id = "poruka-ime";
      p.className = "alert alert-danger mt-3 hide";
      section.appendChild(p);
  
      form.appendChild(section);
      // End of First and last name section
  
      // Email section
      section = document.createElement("div");
      section.classList.add("mb-3");
      
      label = document.createElement("label");
      label.htmlFor = "tbEmail";
      label.classList.add("form-label");
      label.innerHTML = "Email";
      section.appendChild(label);
  
      input = document.createElement("input");
      input.type = "text";
      input.id = "tbEmail";
      input.classList.add("form-control");
      section.appendChild(input);
  
      p = document.createElement("p");
      p.id = "poruka-email";
      p.className = "alert alert-danger mt-3 hide";
      section.appendChild(p);
  
      form.appendChild(section);
      // End of Email section
  
      // Address section
      section = document.createElement("div");
      section.classList.add("mb-3");
      
      label = document.createElement("label");
      label.htmlFor = "tbAdress";
      label.classList.add("form-label");
      label.innerHTML = "Address";
      section.appendChild(label);
  
      input = document.createElement("input");
      input.type = "text";
      input.id = "tbAdress";
      input.classList.add("form-control");
      section.appendChild(input);
  
      p = document.createElement("p");
      p.id = "poruka-adresa";
      p.className = "alert alert-danger mt-3 hide";
      section.appendChild(p);
  
      form.appendChild(section);
      // End of Address section
  
      // Destination section
      section = document.createElement("div");
      section.classList.add("mb-3");
      
      input = document.createElement("select");
      input.id = "ddlDestination";
      input.classList.add("form-select");
  
      let destinations = ["Choose destination", "Canada", "Cruise", "Amazon", "Africa", "Europe", "Hawaii"];
  
      destinations.forEach((x, i) => {
          let option = document.createElement("option");
          option.value = i;
          option.innerHTML = x;
          option.ariaPlaceholder = "Choose destination";
          input.appendChild(option); 
      });
  
      section.appendChild(input);
   
      p = document.createElement("p");
      p.id = "poruka-destinacija";
      p.className = "alert alert-danger mt-3 hide";
      section.appendChild(p);
  
      form.appendChild(section);
      // End of Destination section
  
      // Gender section
      section = document.createElement("div");
      section.classList.add("mb-3");
      
      let genders = [
          { gender: "Male",   id: "rbB", value: "B" }, 
          { gender: "Female", id: "rbS", value: "S" }
      ];
  
      let div = document.createElement("div");
  
      genders.forEach(x => {
          let option = document.createElement("div");
          option.classList.add("form-check");
  
          let input = document.createElement("input");
          input.type = "radio";
          input.classList.add("form-check-input");
          input.name = "rbGender";
          input.id = x.id;
          input.value = x.value;
          option.appendChild(input);
  
          let label = document.createElement("label");
          label.classList.add("form-check-label");
          label.htmlFor = x.id;
          label.innerHTML = x.gender;
          option.appendChild(label);
  
          div.appendChild(option);
      });
  
      section.appendChild(div);
  
      p = document.createElement("p");
      p.id = "poruka-pol";
      p.className = "alert alert-danger mt-3 hide";
      section.appendChild(p);
  
      form.appendChild(section);
      // End of Gender section
  
      // Terms and Conditions section
      section = document.createElement("div");
      section.classList.add("mb-3");
  
      div = document.createElement("div");
  
      let content = document.createElement("div");
      content.classList.add("form-check");
  
      input = document.createElement("input");
      input.classList.add("form-check-input");
      input.type = "checkbox";
      input.value = "WD";
      input.id = "chbWD";
      input.name = "chbPredmeti";
      content.appendChild(input);
  
      label = document.createElement("label");
      label.classList.add("form-check-label");
      label.htmlFor = "chbWD";
      label.innerHTML = "I agree with terms and conditions";
      content.appendChild(label);
  
      div.appendChild(content);
  
      section.appendChild(div);
      
      p = document.createElement("p");
      p.id = "poruka-uslovi-koriscenja";
      p.className = "alert alert-danger mt-3 hide";
      section.appendChild(p);
  
      form.appendChild(section);
      // End of Terms and Conditions section
  
      // Note section
      section = document.createElement("div");
      section.classList.add("mb-3");
  
      label = document.createElement("label");
      label.htmlfor = "taNapomena";
      label.classList.add("form-label");
      label.innerHTML = "Ask us question..";
      section.appendChild(label);
  
      let textarea = document.createElement("textarea");
      textarea.id = "taNapomena";
      textarea.classList.add("form-control");
      section.appendChild(textarea);
  
      p = document.createElement("p");
      p.id = "poruka-napomena";
      p.className = "alert alert-danger mt-3 hide";
      section.appendChild(p);
  
      form.appendChild(section);
      // End of Note section
  
      // Submit Button section
      section = document.createElement("div");
  
      input = document.createElement("input");
      input.type = "button";
      input.value = "Send";
      input.className = "btn btn-primary";
      input.id = "btnPrijava";
      input.addEventListener("click", proveraForme);
      section.appendChild(input);
      
      p = document.createElement("p");
      p.id = "porukaUspeh";
      p.className = "alert alert-success mt-3 hide";
      section.appendChild(p);

      form.appendChild(section);
      // End of Submit Button section
  }
  
  function proveraForme() {
  
      let porukaIme = document.querySelector("#poruka-ime");
      let inputIme = document.querySelector("#namelname");
      ProveraRegularnogIzraza(inputIme, porukaIme, reImePrezime, "First and last name are not in good format: Example: Ketrin Pirs");
  
      let porukaEmail = document.querySelector("#poruka-email");
      let inputEmail = document.querySelector("#tbEmail");
      ProveraRegularnogIzraza(inputEmail, porukaEmail, reEmail, "Email is not in good format. Example: ketrinpirs@gmail.com");
  
      let porukaAdresa = document.querySelector("#poruka-adresa");
      let inputAdresa = document.querySelector("#tbAdress");
      ProveraRegularnogIzraza(inputAdresa, porukaAdresa, reAdresa, "Adress is not in good format. Example: Kralja Petra I 44 ");
  
      let ddlDestinacija = document.querySelector("#ddlDestination");
      let porukaDestinacija = document.querySelector("#poruka-destinacija");
  
      if (ddlDestinacija.value == 0) {
          porukaDestinacija.classList.remove("hide");
          porukaDestinacija.innerHTML = "Choose destination!";
          numErorr++;
      } else {
          porukaDestinacija.classList.add("hide");
          porukaDestinacija.innerHTML = "";
      }
  
      let rbGenderValue = document.querySelector('input[name="rbGender"]:checked');
      let porukaPol = document.querySelector("#poruka-pol");
  
      if (!rbGenderValue) {
          porukaPol.classList.remove("hide");
          porukaPol.innerHTML = "Choose gender!";
          numErorr++;
      } else {
          porukaPol.classList.add("hide");
          porukaPol.innerHTML = "";
      }
  
      let cbUslovi = document.querySelector("#chbWD");
      let porukaUslovi = document.querySelector("#poruka-uslovi-koriscenja");
  
      if (!cbUslovi.checked) {
          porukaUslovi.classList.remove("hide");
          porukaUslovi.innerHTML = "You need to accept terms and conditions!";
          numErorr++;
      } else {
          porukaUslovi.classList.add("hide");
          porukaUslovi.innerHTML = "";
      }


      if(numErorr==0){
        document.querySelector("#forma-prijava").reset();
        porukaUspeh.classList.remove("hide");
        porukaUspeh.innerHTML = "Success!";
      }
  }
    
  let reImePrezime = /^[A-Z][a-z]{1,10}\s[A-Z][a-z]{1,10}$/;
  let reEmail = /^\w([\.-]?\w+\d*)*@\w+\.\w{2,6}$/;
  let reAdresa = /^(([A-Z][a-z]{1,15}(\.)?)|([1-9][0-9]{0,2}(\.)?))[a-zA-Z0-9\s\/\-]+$/;
  
  function ProveraRegularnogIzraza(objekat, porukaObjekat, re, poruka)
  {
      if (!re.test(objekat.value)) {
          porukaObjekat.classList.remove("hide");
          porukaObjekat.innerHTML = poruka;
          numErorr++;
      } else {
          porukaObjekat.classList.add("hide");
          porukaObjekat.innerHTML = "";
      }
  }
//JQUERY
///////////////////////////////////////////////////////////
    $(document).ready(function () {
      $('#centerTextContact').fadeIn(3000).removeClass('hide');
    });
}











