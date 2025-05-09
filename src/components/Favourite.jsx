import React from "react";
import Nav from "./Nav";
import { myContext } from "../reducers/SharedStore";
import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Favourite = () => {
  const { state, Actions, dispatch } = useContext(myContext);
  const handleDelete = (index) => {
    dispatch({ type: Actions.delete, payload: index });
  };
  return (
    <main className="m-h-full w-full flex flex-col">
      <Nav />
      <div className="text-4xl p-5 capitalize  flex items-center gap-2 h-[60px]">
        <h1>favourite</h1>
        <CiHeart size={40} className=" text-red-600 pt-2" />
      </div>
      <section className="w-full p-[20px] h-auto flex flex-col gap-4">
        {state &&
          state.favs.map((f, index) => {
            return (
              <section
                key={index}
                className="w-full lg:w-[40%]
                   bg-gray-200
                   rounded-md backdrop-blur-md
                  flex gap-[50px] flex-row items-center h-[100px]"
              >
                <img
                  src={f.randomImage}
                  alt="favourite image"
                  className="h-full rounded-lg"
                />
                <div className="details">
                  <h1 className="text-2xl capitalize">{f.details.name}</h1>
                  <p>{f.details.location}</p>
                </div>

                <div
                  className=" text-red-700 transition-all active:bg-blue-100 bg-slate-300 p-5 rounded-full delete absolute right-[40px]"
                  onClick={() => handleDelete(index)}
                >
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
