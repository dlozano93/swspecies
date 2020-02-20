import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./species";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<>
			<Navbar />

			<Card />
		</>
	);
}
