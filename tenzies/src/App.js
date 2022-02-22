import logo from './logo.svg';
import './App.css';
import BoxList from './Components/BoxList';

import Box from './Components/Box';
import { useEffect, useState } from 'react';

function App() {

const [boxes, setBoxes] = useState(BoxList);
const [firstNum, setFirstNum] = useState(0);
const [isFirstClick, setIsFirstClick] = useState(false);
const [isDone, setIsDone] = useState(false)

  function handleRoll(){
      setBoxes(prevBoxes => {
        return prevBoxes.map((box) =>{
           let num = Math.floor(Math.random() * 6)+1;
           return box.checked  ? {...box} : {...box, Number: num}
        })
  })
  }

function handleClick(id){
  setBoxes(prevBoxes => {
      return prevBoxes.map((box) =>{
        if(box.id === id){
            if(!isFirstClick){
              setFirstNum(box.Number)
              setIsFirstClick(true)
              return (
                {...box, 
                  checked:true,
                }
              );
            }

          if(box.Number === firstNum)  {
          return (
            {...box, 
              checked:true,
            }
          );
          }

        }
         return box;
      })
  });   
is()
}

function is(){
  let count =1;
  boxes.map(box =>
    box.checked === true ? count=count+1 : count
    )
    
  if (count ===10)
  setIsDone(true)
}


function handleReset(){
  setBoxes(prevBoxes=>{
    return prevBoxes.map(box=>{
      let num = Math.floor(Math.random() * 6)+1;
      return {
        ...box, Number:num, checked:false
      }
    })
  })
  setIsDone(false)
  setFirstNum(0)
}

console.log(boxes)

  return (
    <div className="App">
      <div className="container">
      <h1>Tenzies</h1>
      <h4>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h4>
      <div className="boxes-items">
      {
        boxes.map(box=>(
          <Box key={box.id} id={box.id} checked={box.checked} number={box.Number} handleClick={() => handleClick(box.id)}/>
        )
          )
      } 
      </div>

      <div className="btns">
          {isDone?
          <button className="btn" onClick={handleReset}>Reset Game</button>
          :
          <button className="btn" onClick={handleRoll}>Roll</button>
          }
      </div>

      
      </div>
    </div>
  );
}

export default App;
