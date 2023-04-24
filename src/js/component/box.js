import React, { useState } from "react";

export default function Box () {

    const[count, setCount] = useState(0)
    setTimeout(()=>{
        setCount(count=>count+1)
    },1000) //1000 milliseconds = 1 second
    let one = Math.floor(count)
    let two = Math.floor(count/10)
    let three = Math.floor(count/100)
    let four = Math.floor(count/1000)
    let five = Math.floor(count/10000)

	return (
    <div className="container">
        <div className="row" id="firstrow">
          <div className="col ps-0 pe-0">
          <i className="far fa-clock"></i>
          </div>
          </div>
          <div className="row">
          <div className="col">
          {five%10}
          </div>
          <div className="col">
          {four%10}
          </div>
          <div className="col">
          {three%10}
          </div>
          <div className="col">
            {two%10}
          </div>
          <div className="col">
            {one%10}
          </div>
        </div>
      </div>
	);
};

