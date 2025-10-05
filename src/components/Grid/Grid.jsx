import Card from "../Card/Card";
import './Grid.css'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function checkWinner(board,symbol){
    if((board[0]===symbol && board[1]===symbol && board[2]===symbol)||
    (board[3]===symbol && board[4]===symbol && board[5]===symbol)||
    (board[6]===symbol && board[7]===symbol && board[8]===symbol)||
    (board[0]===symbol && board[3]===symbol && board[6]===symbol)||
    (board[1]===symbol && board[4]===symbol && board[7]===symbol)||
    (board[2]===symbol && board[5]===symbol && board[8]===symbol)||
    (board[0]===symbol && board[4]===symbol && board[8]===symbol)||
    (board[2]===symbol && board[4]===symbol && board[6]===symbol)){
        return symbol;
    }
    return "";
}

function Grid({numberOfCards}) {
    const[Turn,setTurn]=useState(true);//true for O falsse for X
    const[board,setBoard]=useState(Array(numberOfCards).fill(null));
    const[winner,setWinner]=useState("");

    function play(index){
    // Prevent playing if the square is taken or if there's already a winner
    if(board[index] || winner) {
        return;
    }

    // 1. Create a copy of the board array FIRST.
    const newBoard = [...board]; 

    // 2. Update the copy, not the original state.
    if(Turn == true){
        newBoard[index]="0";
    }
    else{
        newBoard[index]="x";
    }
    
    // 3. Check for a winner using the updated copy.
    const win=checkWinner(newBoard, Turn ? "0" : "x");

    // 4. Set the new state using the copy.
    setBoard(newBoard);
    setTurn(!Turn); // It's now the next player's turn.

    if(win){
        setWinner(win);
        toast(`Winner is ${win}`);
    }
}

    function reset(){
        setBoard(Array(numberOfCards).fill(null));
        setTurn(true);
        setWinner("");
    }

  return (
    <div className="grid-wrapper">
        <ToastContainer position="top-center" />
        {winner && 
            <>
        <h1 className="turn-highlight">Winner is:{winner}</h1>
        <button className="reset-button" onClick={reset}>Reset Game</button>
        
        </>
        }
        <h1 className="turn-highlight">Current Turn:{(Turn)?'0':'x'}</h1>
        <div className="grid">
            {board.map((value, idx) => {
            return <Card onPlay={play} player={value} key={idx} index={idx}/>
            })}
        </div>
  </div>
  )
}  
export default Grid;