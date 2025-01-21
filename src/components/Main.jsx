import React from "react";
import { useState, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'


const Main = () => {
  const [diceValues, setDiceValues] = useState([]);

  useEffect(() => {
    setDiceValues(generateAllNewDice());
  }, []);

  const gamewon = diceValues.every(die => die.isHeld) &&
  diceValues.every(die => die.value === diceValues[0].value)

  const generateAllNewDice = () => {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  };

  const generateNumbers = () =>{
    return new Array(10).fill(0).map(()=>({
      value:math.ceil(math.random()*6),
      isFiled: true
    }))
  }

  const rollDice = () => {
    if(!gamewon){
      setDiceValues((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
    else{
      setDiceValues(generateAllNewDice)
    }
    
  };

  const hold = (id) => {
    setDiceValues((oldDice) => {
      return oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });

    console.log(diceValues);
  };

  return (
    <main className="Main">
      {gamewon && <Confetti/>}
      <h1>Tenzies</h1>
      <p className="discription">
        Roll untill all dice are the same.Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice_container">
        {diceValues.map((eachDie) => (
          <Die
            key={eachDie.id}
            value={eachDie.value}
            isHeld={eachDie.isHeld}
            setValue={() => hold(eachDie.id)}
          />
        ))}
      </div>
      <button className="Roll" onClick={rollDice}>
        {gamewon ? "New Game" : "Roll"}
      </button>
    </main>
  );
};

export default Main;
