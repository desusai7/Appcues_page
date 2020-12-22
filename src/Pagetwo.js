import React,{useEffect} from "react";

function Pagetwo() {

  useEffect(() => {
    window.Appcues.page()
    });

  return (
    <div className="pagetwo">
      <h1> Page 2</h1>
    </div>
  );
}

export default Pagetwo;