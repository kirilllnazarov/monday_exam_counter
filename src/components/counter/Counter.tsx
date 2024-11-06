import { useEffect, useState } from "react";
import { Count } from "../count/Count";
import { СounterСontrol } from "../counterСontrol/СounterСontrol";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import s from "./Counter.module.css";

type CounterType = {
	startValue: number;
	maxValue: number;
};

export const Counter = ({ startValue, maxValue }: CounterType) => {
	const [count, setCount] = useState<number>(startValue);

	useEffect(() => getFromLocalStorage(), []);
	useEffect(() => addToLocalStorage(), [count]);

	// create local storage
	const addToLocalStorage = () => {
		localStorage.setItem("counterValue", JSON.stringify(count));
	};

	const getFromLocalStorage = () => {
		const valueAsString = localStorage.getItem("counterValue");
		console.log("Value from localStorage:", valueAsString);
		if (valueAsString) {
			setCount(JSON.parse(valueAsString));
		}
	};

	// get new conunt value after btn click
	const incCount = () => (count < maxValue ? setCount(count + 1) : undefined);

	// reset conunt value after btn click
	const resetCount = () => {
		setCount(startValue);
		localStorage.clear();
	};

	return (
		<div className={s.container}>
			<Count count={count} maxValue={maxValue} />
			<ProgressBar count={count} maxValue={maxValue} />
			<СounterСontrol
				maxValue={maxValue}
				count={count}
				startValue={startValue}
				incCount={incCount}
				resetCount={resetCount}
			/>
		</div>
	);
};
