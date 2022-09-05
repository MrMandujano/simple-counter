import React from "react";

//include images into your bundle


//create your first component
const Home = ({ dig1, dig2, dig3, dig4, dig5, dig6 }) => {
	return (
		<>
			<div className="counter">
			<div className="num" >
			<i class="fa-solid fa-timer"></i>
			</div>
			<div className="num" >
					{dig6}
				</div>
			<div className="num" >
					{dig5}
				</div>
			<div className="num" >
					{dig4}
				</div>
				<div className="num" >
					{dig3}
				</div>
				<div className="num" >
					{dig2}
				</div>
				<div className="num" >
					{dig1}
				</div>
				
			</div>
		</>
	);
};

export default Home;
