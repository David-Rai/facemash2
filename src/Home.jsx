import React from "react";
import Nav from "./components/Nav";
import getDatas from "./db/datas.js";
import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import {myContext} from './reducers/SharedStore.jsx'

const Home = () => {
     //Context  api
  const {dispatch,Actions}=useContext(myContext)

  const [details,setDetails]=useState({})
  const [randomImage, setRandomImage] = useState("thispersondoesnotexist.com");

  //Function to fetch random image
  async function getData() {
    const res = await getDatas();
    setDetails({name:res.results[0].name.first,location:res.results[0].location.country})
    setRandomImage(res.results[0].picture.large);
  }
 

  //adding to the favourite
  const addFav=()=>{
   dispatch({type:Actions.add,payload:{randomImage,details}})
   getData()
  }

      //fetching the random image from the database
  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="h-screen w-full bg-slate-100 flex flex-col items-center justify-center">
      <Nav addition={"absolute top-0"} />
      <div className="centerw-[40%] h-[40vh]">
        <img src={randomImage} alt="randomimage" className="h-[90%] object-contain"/>

        <div className="icons flex w-full items-center justify-evenly  py-3">
          <RxCross1 className="text-white rounded-full bg-red-500 p-4" size={60}/>
          <CiHeart  onClick={addFav} className="text-white rounded-full bg-blue-500 p-4" size={60}/>
        </div>
      </div>
    </main>
  )
};

export default Home;
