import React from "react";
import Minus from '../assets/minus.svg'
import Plus from "../assets/plus.svg"

function ItemCard({ image, name, state, setState}) {
    
    const increase = () => {setState(state + 1)}
    const decrease = () => {
        setState((prevCount) => {
            if(prevCount - 1 < 0){
                return 0
            }
            return prevCount - 1
        })
    }
    

  return (
    <div className="mb-8">
        <div className="shadow-card flex flex-col justify-center items-center py-[80px] ">
            <img src={image} alt="img-product" className="h-[60px] " />
            <p className="mt-8 font-light"> {name} </p>
        </div>
        <div className="flex w-full justify-between items-stretch mt-8 border rounded-lg">

            <button className="p-4 bg-[#E2E2E2] rounded-tl-lg rounded-bl-lg cursor-pointer " onClick={decrease}>
                <img src={Minus} alt="minus" className="select-none" />
            </button>
            <p className="text-lg mt-3 " > {state} </p>

            <button className="p-4 bg-[#E2E2E2] rounded-tr-lg rounded-br-lg cursor-pointer" onClick={increase}>
                <img src={Plus} alt="plus" className="select-none"  />
            </button>
        </div>
    </div>
  );
}

export default ItemCard;
