import React from "react";
import Nav from "./Nav";
import { myContext } from "../reducers/SharedStore";
import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Favourite = () => {
  const { state,Actions,dispatch } = useContext(myContext);
  const handleDelete=(index)=>{
     dispatch({type:Actions.delete,payload:index})
}
  return (
    <main className="m-h-full w-full bg-slate-100 flex flex-col">
      <Nav />
      <div className="text-4xl p-5 capitalize  flex items-center gap-2">
        favourite <CiHeart size={30} className=" text-red-600" />
      </div>
      <section className="w-full p-[20px] h-auto flex flex-col gap-4">
        {state &&
          state.favs.map((f, index) => {
            return (
                <section
                  key={index}
                  className="w-full
                   flex gap-[50px] flex-row items-center h-[100px] bg-slate-400"
                >
                  <img
                    src={f.randomImage}
                    alt="favourite image"
                    className="h-full"
                  />
                  <div className="details">
                    <h1 className="text-2xl capitalize">{f.details.name}</h1>
                    <p>{f.details.location}</p>
                  </div>

                  <div className="delete absolute right-[40px]" onClick={()=> handleDelete(index)}>
                    <RiDeleteBin6Line />
                  </div>
                </section>
            );
          })}
      </section>
    </main>
  );
};

export default Favourite;
