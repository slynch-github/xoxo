import {Map} from 'immutable'
let board = Map();
const initialState = {board: board,
turn: 'X'};
//ACTIONS
const MOVE = 'MOVE';

//ACTION CREATOR
export const move = (player, positionArray) => {
  return {
    type: MOVE,
    position: positionArray,
    player: player
  }
}

//


export default function reducer(state = initialState, action){
let newState = Object.assign({}, state);
  switch (action.type){
    case MOVE:
    console.log("HELLO: ", action)
    let newBoard = newState.board.setIn(action.position, action.player)
      return {board: newBoard,
      turn: 'X'}
      //create if logic to change turn
    default: return state

  }
}

// export default function reducer(state, action) {
//   // TODO
//   return state
// }
