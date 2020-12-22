import React,{useEffect} from "react";
function Pageone() {

  useEffect(() => {
    window.Appcues.page()
    });

  return (
    <div className="pageone">
      <h1> Page 1</h1>
    </div>
  );
}

export default Pageone;