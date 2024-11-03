import { useRef, useState } from "react";
import s from "./Counter.module.css";
import { MaxValue } from "../maxValue/MaxValue";
import { Count } from "../count/Count";
import { СounterСontrol } from "../СounterСontrol/СounterСontrol";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const Counter = () => {
	function getRandomNumber(min: number, max: number) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	const rangeRandomMaxValues = getRandomNumber(3, 10);
	const startValue = 0;

	const [count, setCount] = useState<number>(startValue);

	const ref = useRef<number>(rangeRandomMaxValues);
	const maxValue = ref.current;

	const incCount = () => (count < maxValue ? setCount(count + 1) : undefined);

	const resetCount = () => {
		ref.current = rangeRandomMaxValues;
		setCount(startValue);
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
