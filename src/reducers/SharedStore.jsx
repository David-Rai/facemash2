import { useReducer } from "react";
import  {createContext} from 'react'

//All the actions to do
const Actions = {
  add: "addFav",
  delete: "deleteFav",
};


export const myContext=createContext()

//Reducer functions
const reducer = (state, action) => {
  switch (action.type) {
    case Actions.add:
      return { favs: [...state.favs, action.payload] };

      case Actions.delete:
      return {favs:state.favs.filter((f,index)=> index != action.payload)}
  }
};

const SharedStore=({children})=>{
const [state,dispatch]=useReducer(reducer,{favs:[]})

return (
  <>
    <myContext.Provider value={{ state, dispatch, Actions }}>
      {children}
    </myContext.Provider>

  </>
  )
}


export default SharedStore;