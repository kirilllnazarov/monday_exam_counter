import { useEffect, useRef, useState } from "react";
import s from "./Counter.module.css";
import { MaxValue } from "../maxValue/MaxValue";
import { Count } from "../count/Count";
import { СounterСontrol } from "../counterСontrol/СounterСontrol";
import { ProgressBar } from "../ProgressBar/ProgressBar";

type CounterType = {
	startValueFromInput: number
	maxValueFromInput: number
};

export const Counter = ({ startValueFromInput, maxValueFromInput }: CounterType) => {
	// // data start & max values
	// const rangeRandomMaxValues = getRandomNumber(3, 10);
	const startValue = startValueFromInput
	const maxValue = maxValueFromInput

	const [count, setCount] = useState<number>(0);

	useEffect(() => getFromLocalStorage(), []);
	useEffect(() => addToLocalStorage(), [count]);

	// const ref = useRef<number>(rangeRandomMaxValues);
	// const maxValue = ref.current;

	// get new conunt value after btn click
	const incCount = () => (count < maxValue ? setCount(count + 1) : undefined);

	// reset conunt value after btn click
	const resetCount = () => {
		// ref.current = rangeRandomMaxValues;
		setCount(startValue);
	};

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

	return (
		<div className={s.container}>
			<MaxValue maxValue={maxValue} />
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
