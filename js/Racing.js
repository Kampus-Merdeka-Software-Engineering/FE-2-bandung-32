const productData = [{
    id: "product1",
    itemSrc: "./image/Racing1.png",
    title: "Lewis Hamilton interview: Briton on self-doubt, Mercedes woes and a 'North Star'.",
    date: "29 November 2023 (via bbc.com)",
    sub: "Lewis Hamilton admits there have been times he has doubted himself during the 2023 Formula 1 season.  'Ultimately,' Hamilton says, 'when you have difficult seasons like this, there are always going to be moments when you're like: 'Is it me, or is it the car? Do you still have it? Has it gone?'"
  },
  {
    id: "product2",
    itemSrc: "./image/Racing2.png",
    title: "F1 Abu Dhabi Grand Prix: 'Red Bull's competitors have mountain to climb for 2024'.",
    date: "26 November 2023 (via bbc.com)",
    sub: "The 2023 Formula 1 season drew to a close in Abu Dhabi on Sunday with another crushing Max Verstappen victory, and afterwards Mercedes team principal Toto Wolff likened the task of trying to beat him next season to conquering the highest mountain in the world."
  },
  {
    id: "product3",
    itemSrc: "./image/Racing3.png",
    date: "26 November 2023 (via bbc.com)",
    title: "F1 Abu Dhabi Grand Prix: Max Verstappen wins season finale.",
    sub: "Red Bull's Max Verstappen ended the most dominant season in Formula 1 history with victory in the Abu Dhabi Grand Prix, his 19th win in 22 races.  The comfortable victory, after brushing off a brief challenge from Ferrari's Charles Leclerc on the opening lap, gives Verstappen an 86.4% win rate in 2023."
  },
  {
    id: "product4",
    itemSrc: "./image/Racing4.png",
    title: "Adrian Newey: Inside the mind of record-breaking Red Bull's design genius.",
    date: "23 November 2023 (via bbc.com)",
    sub: "Adrian Newey laughs. The greatest designer in Formula 1 history - the man behind Red Bull's record-breaking championship season this year - is being questioned on the degree of his genius."
  },
  {
    id: "product5",
    itemSrc: "./image/Racing5.png",
    title: "F1 Abu Dhabi Grand Prix: Aston Martin could extend Fernando Alonso contract.",
    date: "24 November 2023 (via bbc.com)",
    sub: "Aston Martin say they want to keep Fernando Alonso beyond the end of his current contract, which runs until the end of 2024.  The Spaniard, 42, has scored eight podiums for Aston Martin this year."
  }
];

const parentProduct = document.getElementById('parent-product');

productData.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('row');
  productCard.id = product.id;

  productCard.innerHTML = `
        <img src="${product.itemSrc}" alt="image">

        <div class="sub">
            <h4>${product.title}</h4>
            <h5>${product.date}</h5>
            <p>${product.sub}</p>
        </div>
    `;

  parentProduct.appendChild(productCard);
});
