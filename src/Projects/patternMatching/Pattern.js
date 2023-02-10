import React, { useEffect, useState } from 'react'

import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.css';
import './pattern.css'

const gameColors = ["red", "blue", "green", "yellow"];

function Pattern() {


    const [inPlay, setInPlay] = useState(false)
    const [gameClicks, setGameClicks] = useState([])
    const [userClicks, setUserClicks] = useState([])
    const [disabled, setDisabled] = useState(false)
    const stor = []
    function checkAnswer(e) {
        if (inPlay) {
         
            let el = e.target.style;


            let clik = el.color;



            setUserClicks(prv => {
                return ([...prv, clik])
            })






            el.opacity = "1";
            setTimeout(function () {
                el.opacity = "0.5";
            }, 500);




       



        }

    }

    function endGame() {
        console.log("game over");
        setDisabled(false)


        if (userClicks.toString() == gameClicks.toString()) {
            // playNum++;
            console.log("correct");
        } else {
            console.log("not correct");
        }
    }








   

    const play = (e) => {
        e.preventDefault();
     
        if (!inPlay) {
            player();
        }

    }

    function player() {
        setDisabled(true);
        setGameClicks([]);
        setUserClicks([])
        runSequence(2);
       
    }

    function runSequence(num) {

      

        let squares = document.querySelectorAll(".box");
        num--;
        if (num < 0) {
            setInPlay(true)

            return;
        }
        let randomNum = Math.floor(Math.random() * gameColors.length);
     
        let result = gameColors[randomNum]

   

        setGameClicks( prv => {
            
           return ([...prv , result])
        }
            
            )
   



        squares[randomNum].style.opacity = "1";

        setTimeout(function () {
         
            squares[randomNum].style.opacity = "0.5";
            setTimeout(function () {
                runSequence(num);
            }, 100);
        }, 500);
    }



    useEffect(() => {
     
        console.log('gamecliks in Effect' , gameClicks)
        console.log('usercliks in' , userClicks)

        if (inPlay) {


         

            if (userClicks.length == gameClicks.length) {
               
                setInPlay(false)

             
                endGame();
            }


        }


        return ()=> {
            // console.log('gamecliks in memory ' , gameClicks)
        }

    }, [userClicks, gameClicks])


    return (<>

        <div className="message">Press Start Button</div>
        <div className='gamearea'>

            {gameColors.map((item, index) => {

                return (<div
                    onClick={checkAnswer}
                    className='box'
                    key={index}

                    style={{ backgroundColor: `${item}`, opacity: 0.5, color: `${item}` }}


                />)

            })
            }
        </div>
        <br />

        <button onClick={play} type="button" disabled={disabled}>Start</button>

        {gameClicks}

    </>

    )
}






export default Pattern



const Div = styled.div`


                background - color : ${props => props.mycol};
            opacity: 0.5;
            color: ${(props) => props.mycol};



            `