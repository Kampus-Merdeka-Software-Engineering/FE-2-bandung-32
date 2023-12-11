const productData = [{
    id: "product1",
    itemSrc: "./image/Basketball1.png",
    title: "NBA: Kevin Durant moves into all-time scoring top 10.",
    date: "2 December 2023 (via bbc.com)",
    sub: "Kevin Durant moved to 10th on the NBA all-time scoring list but his Phoenix Suns were beaten by the Denver Nuggets.  The 35-year-old went into the game needing 17 points to move past Moses Malone and scored 30 to give him a career total of 27,423 points."
  },
  {
    id: "product2",
    itemSrc: "./image/Basketball2.png",
    title: "LeBron James' son, Bronny, cleared for basketball return after cardiac arrest.",
    date: "30 November 2023 (via bbc.com)",
    sub: "Bronny James, the son of basketball great LeBron James, has been cleared to return to basketball four months after suffering cardiac arrest.  The 19-year-old was training with his University of Southern California (USC) team when the incident happened."
  },
  {
    id: "product3",
    itemSrc: "./image/Basketball3.png",
    date: "29 November 2023 (via bbc.com)",
    title: "NBA In-Season Tournament: Giannis Antetokounmpo helps Milwaukee Bucks reach last eight.",
    sub: "Giannis Antetokounmpo scored 33 points as the Milwaukee Bucks beat the Miami Heat 131-124 to reach the knockout rounds of the inaugural NBA In-Season Tournament with a perfect record.  Damian Lillard added 32 for the Bucks, who advanced to the last eight as the top seeds in the Eastern Conference."
  },
  {
    id: "product4",
    itemSrc: "./image/Basketball4.png",
    title: "NBA: LeBron James sets league record for minutes played in Lakers defeat by Philadelphia 76ers.",
    date: "28 November 2023 (via bbc.com)",
    sub: "LeBron James set the record for most minutes played in the NBA on the same night he suffered the heaviest defeat of his career.  James, 38, scored 18 points in the LA Lakers' 138-94 defeat by the Philadelphia 76ers on Monday."
  },
  {
    id: "product5",
    itemSrc: "./image/Basketball5.png",
    title: "Plymouth City Patriots: Outgoing chairman says BBL club needs more support.",
    date: "25 November 2023 (via bbc.com)",
    sub: "The BBL took over in 2021 when Plymouth Raiders withdrew over venue issues. They were eighth and ninth respectively in the past two seasons in the 10-team league and are bottom this season. 'There needs to be some support from the city to make sure this happens, because it would be a tragedy if this was lost,' Heslop told BBC Spotlight. Heslop has been at the helm since the club was resurrected by the BBL on a voluntary basis, and says an increase in workload at his other businesses means he can no longer dedicate enough time to the Patriots. The club still plays its matches at Plymouth Pavilions - more than 12 months after the end of an agreement with the venue over hosting fees that led to the Raiders' demise."
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
