import React from "react";
import { Box } from "./box"
// import { Counter } from "./SecondsCounter"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
		<main className="container">
		<Box/>
		{/* <Counter/> */}
		</main>
		</React.Fragment>
	);
};

export default Home;
