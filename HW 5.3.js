let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const title = document.querySelector("#main-title");

  title.textContent = "Dom's Movie";

  // Part 2
  document.body.style.backgroundColor = "red";

  // Part 3
  function removeLastFav() {
    const lastFavThing = document.querySelector(
      "#favorite-things li:last-child"
    );
    lastFavThing.parentNode.removeChild(lastFavThing);
  }
  removeLastFav();
  removeLastFav();

  // Part 4

  const specialTitle = document.querySelectorAll(".special-title");

  for (let i of specialTitle) {
    i.style.fontSize = "2rem";
  }

  // Part 5
  const pastRaces = document.querySelectorAll("#past-races li");
  console.log(pastRaces);
  pastRaces[3].remove();

  // Part 6
  const newRaces = document.querySelector("#past-races");
  const newCity = document.createElement("LI");

  newCity.textContent = "NYC";
  newRaces.append(newCity);

  // Part 7
  const main = document.querySelector(".main");

  const blogPost = document.createElement("DIV");
  blogPost.classList.add("blog-post");

  const blogPostH2 = document.createElement("H2");
  blogPostH2.textContent = "This is the blog";

  const newParagraph = document.createElement("P");
  newParagraph.textContent = "Bla Bla";

  main.appendChild(blogPost);
  blogPost.appendChild(blogPostH2);
  blogPost.appendChild(newParagraph);
  blogPost.classList.add("purple");

  // Part 8
  const quoteTitle = document.querySelector("#quote-title");
  quoteTitle.addEventListener("click", function () {
    randomQuote();
  });

  //   // Part 9
  const blogPosts = document.querySelectorAll(".blog-post");
  blogPosts.forEach((posts) => {
    posts.addEventListener("mouseout", function (event) {
      event.currentTarget.classList.toggle("purple");
    });
    posts.addEventListener("mousein", (event) => {
      event.stopPropagation();
      event.currentTarget.classList.toggle("red");
    });
  });
});
