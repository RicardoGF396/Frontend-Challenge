import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Summary from "./Summary";
import images from "../assets/Assets.js";

function Content() {
  /* Images */
  const {
    bedImg,
    refriImg,
    furnitureImg,
    ovenImg,
    sofaImg,
    tvImg,
    washerImg,
    diningImg,
    deskImg,
    wardrobeImg,
  } = images;

  /* Product Values */
  const bedVal = 1.2;
  const refrigeradorVal = 1;
  const furnitureVal = 0.5;
  const ovenVal = 0.6;
  const sofaVal = 1.5;
  const tvVal = 0.25;
  const washerVal = 0.5;
  const diningVal = 2;
  const deskVal = 0.75;
  const wardrobeVal = 3.2;

  /* Items */
  const [bed, setBed] = useState(0);
  const [refrigerador, setRefrigerador] = useState(0);
  const [furniture, setFurniture] = useState(0);
  const [oven, setOven] = useState(0);
  const [sofa, setSofa] = useState(0);
  const [tv, setTv] = useState(0);
  const [washer, setWasher] = useState(0);
  const [dining, setDining] = useState(0);
  const [desk, setDesk] = useState(0);
  const [wardrobe, setWardrobe] = useState(0);

  /* Total M2 */
  const [bedM, setBedM] = useState(0);
  const [refrigeradorM, setRefrigeradorM] = useState(0);
  const [furnitureM, setFurnitureM] = useState(0);
  const [ovenM, setOvenM] = useState(0);
  const [sofaM, setSofaM] = useState(0);
  const [tvM, setTvM] = useState(0);
  const [washerM, setWasherM] = useState(0);
  const [diningM, setDiningM] = useState(0);
  const [deskM, setDeskM] = useState(0);
  const [wardrobeM, setWardrobeM] = useState(0);

  /* Summary props */
  const [items, setItems] = useState(0);
  const [totalm, setTotalm] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [due, setDue] = useState(0);


  /* Reset data function */
  const clear = () => {
    setBed(0);
    setRefrigerador(0);
    setFurniture(0);
    setOven(0);
    setSofa(0);
    setTv(0);
    setWasher(0);
    setDining(0);
    setDesk(0);
    setWardrobe(0);
    setItems(0);
    setTotalm(0);
    setSubtotal(0);
    setTax(0);
    setTotal(0);
    setDue(0);
  };

  /* Change items count value, total m2 value and the summary props, when there is a change in the state  */
  useEffect(() => {
    setItems(
      bed +
        refrigerador +
        furniture +
        oven +
        sofa +
        tv +
        washer +
        dining +
        desk +
        wardrobe
    );

    setTotalm(
      (
        bedM +
        refrigeradorM +
        furnitureM +
        ovenM +
        sofaM +
        tvM +
        washerM +
        diningM +
        deskM +
        wardrobeM
      ).toFixed(2)
    );

    setBedM(bed * bedVal);
    setRefrigeradorM(refrigerador * refrigeradorVal);
    setFurnitureM(furniture * furnitureVal);
    setOvenM(oven * ovenVal);
    setSofaM(sofa * sofaVal);
    setTvM(tv * tvVal);
    setWasherM(washer * washerVal);
    setDiningM(dining * diningVal);
    setDeskM(desk * deskVal);
    setWardrobeM(wardrobe * wardrobeVal);
    
    /* Summary Props */

    /* Fixed Values */
    const subtotalFixed = (totalm * 200).toFixed(2)
    const taxFixed = parseFloat((subtotal * 0.16).toFixed(2))
    const totalFixed = parseFloat(subtotal + tax).toFixed(2)
    const dueFixed = (total * 0.5).toFixed(2)
    setSubtotal(subtotalFixed);
    setTax(taxFixed);
    setTotal(totalFixed);
    setDue(dueFixed);
  }, [
    bed,
    refrigerador,
    furniture,
    oven,
    sofa,
    tv,
    washer,
    dining,
    desk,
    wardrobe,
    bedM,
    refrigeradorM,
    furnitureM,
    ovenM,
    sofaM,
    tvM,
    washerM,
    diningM,
    deskM,
    wardrobeM,
    totalm,
    subtotal,
    tax,
    due,
  ]);

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-[80%] grid grid-cols-1 gap-5 px-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <ItemCard
            image={bedImg}
            name={"Beds"}
            state={bed}
            setState={setBed}
          />
          <ItemCard
            image={refriImg}
            name={"Refrigerador"}
            state={refrigerador}
            setState={setRefrigerador}
          />
          <ItemCard
            image={furnitureImg}
            name={"Furniture"}
            state={furniture}
            setState={setFurniture}
          />
          <ItemCard
            image={ovenImg}
            name={"Oven"}
            state={oven}
            setState={setOven}
          />
          <ItemCard
            image={sofaImg}
            name={"Sofa"}
            state={sofa}
            setState={setSofa}
          />
          <ItemCard image={tvImg} name={"TV"} state={tv} setState={setTv} />
          <ItemCard
            image={washerImg}
            name={"Washer-dryer"}
            state={washer}
            setState={setWasher}
          />
          <ItemCard
            image={diningImg}
            name={"Dining"}
            state={dining}
            setState={setDining}
          />
          <ItemCard
            image={deskImg}
            name={"Desk"}
            state={desk}
            setState={setDesk}
          />
          <ItemCard
            image={wardrobeImg}
            name={"Wardrobe"}
            state={wardrobe}
            setState={setWardrobe}
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className=" md:w-[75%] ">
          <button
            onClick={() => clear()}
            className="border-2 border-[#FD9255] px-20 py-4 rounded-md"
          >
            Clear
          </button>
        </div>
      </div>

      <Summary
        items={items}
        totalm={totalm}
        subtotal={subtotal}
        tax={tax}
        total={total}
        due={due}
      />
    </>
  );
}

export default Content;
