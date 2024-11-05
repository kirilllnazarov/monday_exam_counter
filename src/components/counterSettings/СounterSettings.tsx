import { useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import s from "./CounterSettings.module.css";

type СounterSettingsType = {
	setMaxValuesToCounter: (max: number) => void;
	setStartValuesToCounter: (start: number) => void;
};

export const СounterSettings = ({ setMaxValuesToCounter, setStartValuesToCounter }: СounterSettingsType) => {
	const [maxValue, setMaxValue] = useState(0);
	const [startValue, setStertValue] = useState(0);

	const getMaxValueFromInput = (value: number) => {
		setMaxValue(value);
	};

	const getStartValueFromInput = (value: number) => {
		setStertValue(value);
	};

	const oncClickHandler = () => {
        setMaxValuesToCounter(maxValue)
        setStartValuesToCounter(startValue)
	};

	return (
		<div className={s.container}>
			<div className={s.selectValue}>
				<div>
					Max value: <Input initialInputValue={getMaxValueFromInput} />
				</div>
				<div>
					Start value: <Input initialInputValue={getStartValueFromInput} />
				</div>
			</div>

			<div className={s.setControl}>
				<Button className={maxValue <= 0 || startValue <= 0 ? s.disbledButton : s.button} onClick={oncClickHandler}>
					Set
				</Button>
			</div>
		</div>
	);
};
