const productData = [{
    id: "product1",
    itemSrc: "./image/Soccer1.png",
    title: "Indonesia failed to qualify for the last 16 of the U-17 World Cup after Morocco won 4-0 against New Zealand.",
    date: "18 November 2023 (via voi.id)",
    sub: "The Indonesian national team certainly failed to qualify for the last 16 of the U-17 World Cup after Mexico had four goals against New Zealand in the Group F match of the U-17 World Cup, which was played at Si Jalak Harupat Stadium, Bandung, Saturday. The result also boosted Mexico to second place in Group F's final standings, with a collection of four points. The collection of points is the same as Venezuela's, but Mexico is ahead on goal difference. Meanwhile, New Zealand ended its journey at the U-17 World Cup this year with zero points, and recorded one goal and conceded nine goals. The 4-0 victory of the team nicknamed El Tri also ensured Mexico qualified for the last 16 as the second-placed team, while Venezuela advanced to the knockout phase with the status of the fourth-placed third-placed team, shifting Indonesia."
  },
  {
    id: "product2",
    itemSrc: "./image/Soccer2.png",
    title: "No penalty, no problem! Cristiano Ronaldo in good spirits despite drawing a blank in Al-Nassr's AFC Champions League clash with Persepolis.",
    date: "28 November 2023 (via goal.com)",
    sub: "Ronaldo's team played out a goalless draw on home soil despite being awarded a penalty early on when the Portugal star was brought down in the box. The 38-year-old told the referee that he was not fouled, however, and the decision was reversed after a VAR review. The draw was enough to ensure Al-Nassr progress to the knockout round of the AFC Champions League. They will finish top of the group, with Persepolis sitting five points behind them with just one match left to play in the first round of the competition. Ronaldo and his Al-Nassr team-mates will hope to continue their unbeaten run when they return to Saudi Pro League action with a game against Al-Hilal on Friday. Al-Hilal sit top of the table and four points ahead of Al-Nassr."
  },
  {
    id: "product3",
    itemSrc: "./image/Soccer3.png",
    date: "27 November 2023 (via espn.com)",
    title: "Man United plot surprise move for Timo Werner.",
    sub: "Werner, 27, has been linked with a loan move to a variety of interested clubs in January, including Real Madrid, but Plettenberg believes the German will prefer to see out the season at RB Leipzig before making a permanent move. Werner is said to be disgruntled with the way things are going in Saxony despite only having rejoined Leipzig from Chelsea in 2022, while Man United are keen to strengthen their firepower in attack. United have reportedly enquired about Werner's availability, but no offer has been made and there have been no negotiations at this stage. Reds boss Erik Ten Hag will now monitor Werner's situation over the next couple of weeks before the transfer window opens. If Werner were to move to Old Trafford in January, he would join the likes of Odion Ighalo and Wout Weghorst on a growing list of stop-gap striking options that the once dominant Premier League side have turned to in recent history. Werner has only scored twice this campaign, but he managed to register 16 goals last season back in the Bundesliga."
  },
  {
    id: "product4",
    itemSrc: "./image/Soccer4.png",
    title: "Man United's Garnacho scores overhead stunner in 3-0 win at Everton.",
    date: "27 November 2023 (via espn.com)",
    sub: "Manchester United's Alejandro Garnacho scored with a magical overhead kick in the third minute to send the visitors on their way to a 3-0 win on Sunday over an Everton team already reeling in their first Premier League game after being docked 10 points. The 19-year-old Argentine leapt acrobatically to meet Diogo Dalot's cross, firing the ball into the opposite corner past stranded goalkeeper Jordan Pickford before celebrating with a Cristiano Ronaldo-style pirouette at Goodison Park. A Marcus Rashford penalty and clever Anthony Martial finish wrapped up the victory in the second half Garnacho's stunning strike drew comparisons to Wayne Rooney's famous goal for United in the 2011 Manchester derby. Erik ten Hag's United team are now sixth in the standings on 24 points after 13 games, while Sean Dyche's Everton side, who were 14th before their points deduction for breaches of the league's financial rules, are second-bottom on four points."
  },
  {
    id: "product5",
    itemSrc: "./image/Soccer5.png",
    title: "Unstoppable Erling Haaland has another record.",
    date: "25 November 2023 (via goal.com)",
    sub: "The Norwegian put the Blues in command, but his strike partner fluffed a golden chance to end the game as a contest and the Merseysiders capitalised Erling Haaland had trained with ‘niggles’ just two days before Manchester City's crunch game with Liverpool, but once the first whistle went, he looked as physically sharp and hungry as ever and smashed his side into the lead, becoming the fastest player in Premier League history to reach 50 goals. City looked on top for most of the game, but Julian Alvarez spurned a glorious chance crafted by the electric Jeremy Doku and Liverpool grabbed an equaliser from out of nowhere via Trent Alexander-Arnold with just over 10 minutes left to play. City went looking for the winner deep into added-time, but couldn't find it and their long winning streak at home finally came to end on 23 victories. Pep Guardiola's side are still top of the Premier League, but they were reminded once more of Liverpool's capacity to keep them in check like no other side has been able to do in the last seven years."
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
  