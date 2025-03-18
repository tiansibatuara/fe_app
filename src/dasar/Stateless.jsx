import React from "react";

function Job(props) {
  return <h1>Fullstack {props.job}</h1>;
}
const Alamat = ({ alamat }) => {
  return <h1>Bandung {alamat}</h1>;
};

const Stateless = (props) => {
  return (
    <>
      <h1>Halo, nama saya {props.nama}</h1>
      <Job job="Software Engineer" />
      <Alamat alamat="Jl. Suka Maju No. 10" />
    </>
  );
};

export default Stateless;
