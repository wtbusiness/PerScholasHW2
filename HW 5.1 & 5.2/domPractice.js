// Assignment 5.1 and 5.2

let menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.className = "flex-ctr";

let topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.className = "flex-around";

let topMenuLinks = [];

let showingSubmenu = false;



function menu(arr, menu1) {
  arr.forEach((element) => {
    // created anchor tags
    let newAnchor = document.createElement("a");

    let Ltext = document.createTextNode(element.text)

    newAnchor.appendChild(Ltext);

    newAnchor.href = element.href;
    // created href attributes
    // newAnchor.setAttribute("href", element.href);

   

    menu1.append(newAnchor);
    topMenuLinks.push(newAnchor);
  });
}

function buildSubMenu(subLinks) {

  let anchorsToDelete = document.querySelectorAll("#sub-menu a")

  anchorsToDelete.forEach((a) => {
    a.parentNode.removeChild(a)
  })

  subLinks.forEach((i) => {
    let a = document.createElement("a");
    a.href = i.href;
    let Ltext = document.createTextNode(i.text);
    a.appendChild(Ltext);
    subMenuEl.append(a);
  }) 
}
menu(menuLinks, topMenuEl);

let subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

 topMenuEl.addEventListener("click", function(e){
   e.preventDefault();
   let textName = e.target;

   if (textName.nodeName !== "A") {
    return console.log("Invalid element");
   } else {

   //console.log(textName.textContent);
   //console.log(textName.nodeName);

    if (textName.classList === "active") {
      textName.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = "0";
      return;
    }
      topMenuLinks.forEach( (textName) =>  {
        textName.classList.remove("active");
      });

    textName.classList.add("active");
    console.log(textName);



    menuLinks.forEach((lObj) =>  {
      // console.log(lObj);
      // console.log(textName);
      if (lObj.hasOwnProperty("subLinks")) {
        showingSubMenu = true;
        if(lObj.text === textName.text) {
            buildSubMenu(lObj.subLinks);
            subMenuEl.style.top = "100%";
        }
        
      } else {
        showingSubmenu = false;
        subMenuEl.style.top = 0;
    }

    })
      if(textName.text === "about") {
        mainEl.innerHTML = `<h1>${textName.text}</h1>`;
      }
   
  }
    //console.log(showingSubmenu);
    //console.log(topMenuLinks);
 });

 subMenuEl.addEventListener("click", function(e){
   e.preventDefault();
    let textName = e.target;
   if (textName.nodeName !== "A") {
    return console.log("Invalid element");
   } else {
    console.log(textName);
    showingSubmenu = false;
    subMenuEl.style.top = 0;
    topMenuLinks.forEach((textName) => {
       textName.classList.remove("active");
     });
      mainEl.innerHTML = `<h1>${textName.text}</h1>`;
   }
  });

//   console.log(topMenuEl.childNodes); ;
//  })











 
