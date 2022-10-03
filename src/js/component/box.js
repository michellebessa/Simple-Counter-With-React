import React, { useState } from "react";

export const Box = () => {

    const[count, setCount] = useState(0)
    setTimeout(()=>{
        setCount(count=>count+1)
    },1000)
    let one = Math.floor(count)
    let two = Math.floor(count/10)
    let three = Math.floor(count/100)
    let four = Math.floor(count/1000)
    let five = Math.floor(count/10000)
    let six = Math.floor(count/100000)

	return (
        <div class="row">
          <div class="col">
          <i class="far fa-clock"></i>
          </div>
          <div class="col">
          {six%10}
          </div>
          <div class="col">
          {five%10}
          </div>
          <div class="col">
          {four%10}
          </div>
          <div class="col">
          {three%10}
          </div>
          <div class="col">
            {two%10}
          </div>
          <div class="col">
            {one%10}
          </div>
        </div>
	);
};

