

import React, { useState, useEffect } from 'react'
import './popper.css'


const playArea = {};
const player = {};
const arr = new Array(16).fill(0);
// playArea.stats = document.querySelector(".stats");
// playArea.main = document.querySelector(".main");
// playArea.game = document.querySelector(".game");
// playArea.btns = Array.from(document.querySelectorAll(".btn"));
// playArea.page = Array.from(document.querySelectorAll(".page"));

function Popper() {

    const [gameObj, setGameObj] = useState([])

    const intial = arr.map((el, index) => {
        return index + 1
    })


    const [result, setResult] = useState(intial)

    function randomUp() {
        // const pops = document.querySelectorAll(".pop");
        const idx = Math.floor(Math.random() * result.length);

        if (result[idx] == playArea.last) {
            return randomUp();
        }
        playArea.last = result[idx];
        return result[idx];
    }




    function buildBoard() {

    }

    function getData() {
     
        fetch("//discoveryvip.com/shared/json.php?f=game")
            .then(function (rep) {
                return rep.json();
            }).then(function (data) {
                let gameObject = data.data;
                console.log(gameObject);
                setGameObj(gameObject)
                buildBoard();
            })
    }

    useEffect(() => {

        getData();

    }, [])


    function startPop() {
        // let newPop = randomUp();

        // const node = result.filter(()=> {
        //     return 
        // })

        // setResult()


        // newPop.classList.add("active");
     
        // const time = Math.round(Math.random() * (1500) + 750);
        // const val = Math.floor(Math.random() * gameObj.length);

        // newPop.old = newPop.innerText;
        // newPop.v = gameObj[val].value;
        // newPop.innerHTML = gameObj[val].icon + "<br>" + gameObj[val].value;
        // playArea.inPlay = setTimeout(function () {
        //     newPop.classList.remove("active");
        //     newPop.removeEventListener("click", hitPop);
        //     newPop.innerText = newPop.old;
        //     if (newPop.v > 0) {
        //         player.items--;
        //         updateScore();
        //     }
        //     if (player.items <= 0) {
        //         gameOver();
        //     }
        //     if (!player.gameOver) {
        //         startPop();
        //     }
        // }, time);
    }


    const startGame = () => {
        player.score = 0;
        player.items = 3;
        // playArea.main.classList.remove("visible");
        // playArea.game.classList.add("visible");
        player.gameOver = false;
        startPop();
        // updateScore();

    }




    const DivItem = ({ item }) => {

        return (<div onClick={hitPop} className="pop">
            {item}
        </div>)
    }


    function hitPop(e) {
        // console.log(e.target.cnt);
        // console.log(e.target.v);
        // let newPop = e.target;
        // player.score = player.score + newPop.v;
        // updateScore();
        // newPop.classList.remove("active");
        // newPop.removeEventListener("click", hitPop);
        // newPop.innerText = newPop.old;
        // clearTimeout(playArea.inPlay);
        // if (!player.gameOver) {
        //     startPop();
        // }
    }

    return (
        <div className="gamearea">
            <div className="stats">
                <span>Press Button to Start</span>
            </div>

            <div className="main page">
                <div className="starter">

                    <a onClick={startGame} className="btn newGame">New Game</a>
                </div>
            </div>

            <div className="game visible page">


                <div className='row' style={{ width: '408px', margin: 'auto' }}>

                    {result.map((item, index) => {

                        return <DivItem key={index} item={item} />

                    })}

                </div>


            </div>

        </div>
    )
}

export default Popper


// className="row"
// style={{
//     width: `${cols * 100 + (cols * 2)}`,
//     margin: 'auto'

// }}>