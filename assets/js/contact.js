

// createContactForm();

// function createContactForm() {
//     let contactform = document.querySelector(".contact-form-parent");
//     let form, section, label, input, p;

//     form = document.createElement("form");
//     form.name = "forma-prijava";
//     form.id = "forma-prijava";
//     contactform.appendChild(form);
  
//     // First and last name section
//     section = document.createElement("div");
//     section.classList.add("mb-3");
    
//     label = document.createElement("label");
//     label.htmlFor = "namelname";
//     label.classList.add("form-label");
//     label.innerHTML = "First name and last name";
//     section.appendChild(label);

//     input = document.createElement("input");
//     input.type = "text";
//     input.id = "namelname";
//     input.classList.add("form-control");
//     section.appendChild(input);

//     p = document.createElement("p");
//     p.id = "poruka-ime";
//     p.className = "alert alert-danger mt-3 hide";
//     section.appendChild(p);

//     form.appendChild(section);
//     // End of First and last name section

//     // Email section
//     section = document.createElement("div");
//     section.classList.add("mb-3");
    
//     label = document.createElement("label");
//     label.htmlFor = "tbEmail";
//     label.classList.add("form-label");
//     label.innerHTML = "Email";
//     section.appendChild(label);

//     input = document.createElement("input");
//     input.type = "text";
//     input.id = "tbEmail";
//     input.classList.add("form-control");
//     section.appendChild(input);

//     p = document.createElement("p");
//     p.id = "poruka-email";
//     p.className = "alert alert-danger mt-3 hide";
//     section.appendChild(p);

//     form.appendChild(section);
//     // End of Email section

//     // Address section
//     section = document.createElement("div");
//     section.classList.add("mb-3");
    
//     label = document.createElement("label");
//     label.htmlFor = "tbAdress";
//     label.classList.add("form-label");
//     label.innerHTML = "Address";
//     section.appendChild(label);

//     input = document.createElement("input");
//     input.type = "text";
//     input.id = "tbAdress";
//     input.classList.add("form-control");
//     section.appendChild(input);

//     p = document.createElement("p");
//     p.id = "poruka-adresa";
//     p.className = "alert alert-danger mt-3 hide";
//     section.appendChild(p);

//     form.appendChild(section);
//     // End of Address section

//     // Destination section
//     section = document.createElement("div");
//     section.classList.add("mb-3");
    
//     input = document.createElement("select");
//     input.id = "ddlDestination";
//     input.classList.add("form-select");

//     let destinations = ["Choose destination", "Canada", "Cruise", "Amazon", "Africa", "Europe", "Hawaii"];

//     destinations.forEach((x, i) => {
//         let option = document.createElement("option");
//         option.value = i;
//         option.innerHTML = x;
//         option.ariaPlaceholder = "Choose destination";
//         input.appendChild(option); 
//     });

//     section.appendChild(input);
 
//     p = document.createElement("p");
//     p.id = "poruka-destinacija";
//     p.className = "alert alert-danger mt-3 hide";
//     section.appendChild(p);

//     form.appendChild(section);
//     // End of Destination section

//     // Gender section
//     section = document.createElement("div");
//     section.classList.add("mb-3");
    
//     let genders = [
//         { gender: "Male",   id: "rbB", value: "B" }, 
//         { gender: "Female", id: "rbS", value: "S" }
//     ];

//     let div = document.createElement("div");

//     genders.forEach(x => {
//         let option = document.createElement("div");
//         option.classList.add("form-check");

//         let input = document.createElement("input");
//         input.type = "radio";
//         input.classList.add("form-check-input");
//         input.name = "rbGender";
//         input.id = x.id;
//         input.value = x.value;
//         option.appendChild(input);

//         let label = document.createElement("label");
//         label.classList.add("form-check-label");
//         label.htmlFor = x.id;
//         label.innerHTML = x.gender;
//         option.appendChild(label);

//         div.appendChild(option);
//     });

//     section.appendChild(div);

//     p = document.createElement("p");
//     p.id = "poruka-pol";
//     p.className = "alert alert-danger mt-3 hide";
//     section.appendChild(p);

//     form.appendChild(section);
//     // End of Gender section

//     // Terms and Conditions section
//     section = document.createElement("div");
//     section.classList.add("mb-3");

//     div = document.createElement("div");

//     let content = document.createElement("div");
//     content.classList.add("form-check");

//     input = document.createElement("input");
//     input.classList.add("form-check-input");
//     input.type = "checkbox";
//     input.value = "WD";
//     input.id = "chbWD";
//     input.name = "chbPredmeti";
//     content.appendChild(input);

//     label = document.createElement("label");
//     label.classList.add("form-check-label");
//     label.htmlFor = "chbWD";
//     label.innerHTML = "I agree with terms and conditions";
//     content.appendChild(label);

//     div.appendChild(content);

//     section.appendChild(div);
    
//     p = document.createElement("p");
//     p.id = "poruka-uslovi-koriscenja";
//     p.className = "alert alert-danger mt-3 hide";
//     section.appendChild(p);

//     form.appendChild(section);
//     // End of Terms and Conditions section

//     // Note section
//     section = document.createElement("div");
//     section.classList.add("mb-3");

//     label = document.createElement("label");
//     label.htmlfor = "taNapomena";
//     label.classList.add("form-label");
//     label.innerHTML = "Ask us question..";
//     section.appendChild(label);

//     let textarea = document.createElement("textarea");
//     textarea.id = "taNapomena";
//     textarea.classList.add("form-control");
//     section.appendChild(textarea);

//     p = document.createElement("p");
//     p.id = "poruka-napomena";
//     p.className = "alert alert-danger mt-3 hide";
//     section.appendChild(p);

//     form.appendChild(section);
//     // End of Note section

//     // Submit Button section
//     section = document.createElement("div");

//     input = document.createElement("input");
//     input.type = "button";
//     input.value = "Send";
//     input.className = "btn btn-primary";
//     input.id = "btnPrijava";
//     input.addEventListener("click", proveraForme);
//     section.appendChild(input);

//     form.appendChild(section);
//     // End of Submit Button section
// }

// function proveraForme() {
//     let porukaIme = document.querySelector("#poruka-ime");
//     let porukaEmail = document.querySelector("#poruka-email");
//     let porukaAdresa = document.querySelector("#poruka-adresa");

//     ProveraRegularnogIzraza(porukaIme, reImePrezime, "First and last name is not in good format. Example: Damon Salvatore");
//     ProveraRegularnogIzraza(porukaEmail, reEmail, "Email is not in good format. Example: damonsalvatore@gmail.com");
//     ProveraRegularnogIzraza(porukaAdresa, reAdresa, "Adress is not in good format. Example: Kralja Petra I 44");

//     let ddlDestinacija = document.querySelector("#ddlDestination");
//     let porukaDestinacija = document.querySelector("#poruka-destinacija");

//     if (ddlDestinacija.value == 0) {
//         porukaDestinacija.classList.remove("hide");
//         porukaDestinacija.innerHTML = "You need to chose destination.";
//     } else {
//         porukaDestinacija.classList.add("hide");
//         porukaDestinacija.innerHTML = "";
//     }

//     let rbGenderValue = document.querySelector('input[name="rbGender"]:checked');
//     let porukaPol = document.querySelector("#poruka-pol");

//     if (!rbGenderValue) {
//         porukaPol.classList.remove("hide");
//         porukaPol.innerHTML = "You need to chose gender.";
//     } else {
//         porukaPol.classList.add("hide");
//         porukaPol.innerHTML = "";
//     }

//     let cbUslovi = document.querySelector("#chbWD");
//     let porukaUslovi = document.querySelector("#poruka-uslovi-koriscenja");

//     if (!cbUslovi.checked) {
//         porukaUslovi.classList.remove("hide");
//         porukaUslovi.innerHTML = "You need to agree with terms and conditions.";
//     } else {
//         porukaUslovi.classList.add("hide");
//         porukaUslovi.innerHTML = "";
//     }
// }
  
// let reImePrezime = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;
// let reEmail = /^\w([\.-]?\w+\d*)*@\w+\.\w{2,6}$/;
//  let reAdresa = /^(([A-Z][a-z]{1,15}(\.)?)|([1-9][0-9]{0,2}(\.)?))[a-zA-Z0-9\s\/\-]+$/;

// function ProveraRegularnogIzraza(objekat, re, poruka)
// {
//     if (!re.test(objekat.value)) {
//         objekat.classList.remove("hide");
//         objekat.innerHTML = poruka;
//     } else {
//         objekat.classList.add("hide");
//         objekat.innerHTML = "";
//     }
// }