const productData = [{
    id: "product1",
    itemSrc: "./image/Badminton1.png",
    title: "Nguyen Hands Marin Shock Defeat",
    date: "22 November 2023 (via bwfbadminton.com)",
    sub: "World No.22 Nguyen Thuy Linh caused a stir at the LI-NING China Masters 2023 today, beating fifth seed Carolina Marin in the opening round. In what was their first meeting, the Vietnamese showed no sign of being intimidated by the higher-ranked Marin, and kept her nerve at tense moments, showing great defensive abilities to thwart Marin’s attack. She fought off a 9-13 deficit in the third and it was level pegging at 15-all, after which Marin suddenly appeared to lose the plot and Nguyen came away victorious with the last six points in succession: 10-21 21-19 21-15. The win will count as the biggest of her career, although she has beaten other top players like Michelle Li and Gregoria Mariska Tunjung this year."
  },
  {
    id: "product2",
    itemSrc: "./image/Badminton2.png",
    title: "Momota Breaks Dry Spell.",
    date: "12 November 2023 (via bwfbadminton.com)",
    sub: "Former No.1 Kento Momota tasted title success after nearly two years, taking the Korea Masters 2023 with a straight-games defeat of compatriot Koki Watanabe. The two-time world champion, who has slid to No.52 on the back of a lacklustre season, hasn’t topped the podium since winning the Indonesia Masters in November 2021. Since then, he has been in only one other final – the Malaysia Open in July 2022. This year he has crashed out in the first round of eight events. Momota was mostly in control against Watanabe, and he looked sharp except at the very end, when he nearly lost his way. At 17-5 in the second, it looked headed for a rout, but Momota suffered a shaky spell, losing a series of points to keep Watanabe in the contest. Yet, his opponent had made his charge too late, and Momota closed it out before it got any trickier, 21-16 21-15."
  },
  {
    id: "product3",
    itemSrc: "./image/Badminton3.png",
    date: "3 December 2023 (via bwfbadminton.com)",
    title: "Day Of The Underdog.",
    sub: "World No.48 Chi Yu Jen achieved the biggest result of his career as he won the Syed Modi India International 2023 beating No.12 Kenta Nishimoto. And with men’s doubles No.93 Choong Hon Jian/Muhammad Haikal achieving a win of similar magnitude against No.16 Akira Koga/Taichi Saito, it was quite the day of the underdog. Chi Yu Jen, who has had mostly unremarkable results on the circuit, had entered the final after winning his last three matches in three games. That didn’t seem to affect him, for even though he lost a close opening game, he bounced back to take the match after a 79-minute battle, 20-22 21-12 21-17."
  },
  {
    id: "product4",
    itemSrc: "./image/Badminton4.png",
    title: "HS Prannoy Loses In Japan Masters, Indian Challenge Ends.",
    date: "16 November 2023 (via sports.ndtv.com)",
    sub: "Indian shuttler HS Prannoy lost a closely-fought second round match against Chou Tien Chen of Chinese Taipei to bow out of the Japan Masters Super 500 badminton tournament in Kumamoto on Thursday. The Asian Games bronze medallist Indian, who returned to action after recovering from a back injury, squandered an opening game advantage to lose 21-19 16-21 19-21 to world no. 12 Chen in a 73-minute men's singles match that went down the wire. Prannoy's defeat brought curtains on India's campaign at the tournament."
  },
  {
    id: "product5",
    itemSrc: "./image/Badminton5.png",
    title: "Indonesian Badminton Player Jonatan Christie Is Now World Number 2.",
    date: "31 January 2023 (via tempo.co)",
    sub: "Indonesian badminton athlete Jonatan Christie overtook his compatriot, Anthony Sinisuka Ginting, to become the world number two in men's singles. His rank surged following his success in securing the 2023 Indonesia Masters title in Jakarta last weekend. Jonatan, who is familiarly called Jojo, defeated his other compatriot Chico Aura Dwi Wardoyo in the final in two straight games 21-15, 21-13. Quoted from the official Badminton World Federation (BWF) website on Tuesday, January 31, 2023, Jonatan has collected 80,612 points, while Anthony is below him with 77,579 points. Meanwhile, Chico with his achievement as the runner-up of the Indonesia Masters made his rank shoot up to 15th, or up by 8 from his position last week. Men's singles world number one is still Danish player Viktor Axelsen with a collection of 114,156 points."
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