import React from "react";
import { useEffect, useState } from "react";

const Hooks = () => {
  const [nilai, setNilai] = useState(5);
  useEffect(() => {
    //didmount & didupdate
    document.title = `Nilai ubah: ${nilai}`;
    console.log("didmount & didupdate");
    return () => {
      //willunmount
      console.log("willunmount");
      document.title = `Inixindo`;
    };
  }, [nilai]); //willupdate

  return (
    <>
      <div>LifecycleComp</div>
      <p>Nilai saat ini adalah : {nilai}</p>
      <button onClick={() => setNilai(nilai + 1)}>Update Nilai</button>
    </>
  );
};

export default Hooks;
