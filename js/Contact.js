const productData = [{
    id: "product1",
    itemSrc: "./image/Contact1.png",
    title: "M. Arif Maritza",
    date: "Front End",
    sub: "arifmaritza@gmail.com",
  },
  {
    id: "product2",
    itemSrc: "./image/Contact2.png",
    title: "M. Arif Maritza",
    date: "Front End",
    sub: "arifmaritza@gmail.com",
  },
  {
    id: "product3",
    itemSrc: "./image/Contact3.png",
    title: "M. Arif Maritza",
    date: "Front End",
    sub: "arifmaritza@gmail.com",
  },
  {
    id: "product4",
    itemSrc: "./image/Contact4.png",
    title: "M. Arif Maritza",
    date: "Front End",
    sub: "arifmaritza@gmail.com",
  },
  {
    id: "product5",
    itemSrc: "./image/Contact5.png",
    title: "M. Arif Maritza",
    date: "Front End",
    sub: "arifmaritza@gmail.com",
  },
  {
    id: "product6",
    itemSrc: "./image/Contact6.png",
    title: "M. Arif Maritza",
    date: "Front End",
    sub: "arifmaritza@gmail.com",
  },
];

const parentProduct = document.getElementById('parent-product');

productData.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('row2');
  productCard.id = product.id;

  productCard.innerHTML = `
        <img src="${product.itemSrc}" alt="image">

        <div class="sub2">
            <h4>${product.title}</h4>
            <h5>${product.date}</h5>
            <p>${product.sub}</p>
        </div>
    `;

  parentProduct.appendChild(productCard);
});
