import React, { useRef, useState } from 'react'
import './highlow.css'


function HighLow() {

  const [curC, setCurC] = useState([]);

  // const gameplay = document.querySelector(".gameplay");

  const messageRef = useRef()

  let curCardValue = 0;
  let scoreValue = 0;
  let deck = [];
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = ["hearts", "diams", "clubs", "spades"];



  function playGame(e) {
    let temp = e.target.innerText;
    let myCard = drawCard();
    // console.log(myCard)


    if (temp == "Start") {
      messageRef.current.value = "Higher or Lower";


      // gameplay.innerHTML = "";
      // console.log(myCard)

      setCurC(myCard);
      makeCard(myCard);

      // toggleButtons();
      return;
    }
    // if (myCard.value == curCardValue) {
    //   message.innerHTML = "Draw";
    // }
    // else {
    //   if ((temp == "Higher" && (myCard.value > curCardValue)) || (temp == "Lower" && (myCard.value < curCardValue))) {
    //     scoreValue++;
    //     score.innerHTML = scoreValue;
    //     message.innerHTML = "Correct, Next?";
    //   }
    //   else {
    //     message.innerHTML = "Wrong Game Over";
    //     toggleButtons();
    //   }
    // }
    // makeCard(myCard);

  }




  function drawCard() {

    // console.log(deck);

    if (deck.length > 0) {
      let randIndex = Math.floor(Math.random() * deck.length);
      let card = deck.splice(randIndex, 1)[0];
      return card;
    }
    else {
      makeDeck();
      return drawCard();
    }
  }


  function makeDeck() {
    deck = [];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        let card = {};
        card.suit = suits[i];
        card.rank = ranks[j];
        card.value = (j + 1);
        deck.push(card);
      }
    }
  }

  function makeCard(card) {

    // let html1 = card.rank + "<br>&" + card.suit + ";";
    // let html2 = card.rank + "&" + card.suit + ";";

    // let curCards = document.querySelectorAll(".card");
    // let div = document.createElement("div");
    // div.setAttribute("class", "card");
    // div.style.left = (curCards.length * 25) + "px";
    // curCardValue = card.value;
    // if (card.suit === "hearts" || card.suit === "diams") {
    //   div.classList.add("red");
    // }
    // let span1 = document.createElement("span");
    // span1.setAttribute("class", "tiny");
    // span1.innerHTML = html2;
    // div.appendChild(span1);
    // let span2 = document.createElement("span");
    // span2.setAttribute("class", "big");
    // span2.innerHTML = html1;
    // div.appendChild(span2);

    // gameplay.appendChild(div);





  }




  // let html1 = curC.rank + "<br>&" + curC.suit + ";";
  // let html2 = curC.rank + "&" + curC.suit + ";";


  return (
    <>
      <div>Streak:
        <div className="score">0</div>
      </div>
      <div className="message" ref={messageRef}>Click to Start</div>
      <div className="gameplay">



        <div className="card" style={{ left: '25px' }}>
<span> </span>
     

        </div>



      </div>

      <button onClick={playGame} type="button">Start</button>
      <button onClick={playGame} type="button" className="hideButton">Higher</button>
      <button onClick={playGame} type="button" className="hideButton">Lower</button>


    </>
  )
}

export default HighLow