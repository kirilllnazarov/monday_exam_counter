import { ChangeEvent, useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import s from "./CounterSettings.module.css";

type СounterSettingsType = {
	setMaxValuesToCounter: (max: number) => void;
	setStartValuesToCounter: (start: number) => void;
};

export const СounterSettings = ({setMaxValuesToCounter, setStartValuesToCounter}: СounterSettingsType) => {
	const [maxValue, setMaxValue] = useState(0);
	const [startValue, setStartValue] = useState(0);

	const getMaxValueFromInput = (event: ChangeEvent<HTMLInputElement>) => {
		setMaxValue(JSON.parse(event.currentTarget.value));
	};

	const getStartValueFromInput = (event: ChangeEvent<HTMLInputElement>) => {
		setStartValue(JSON.parse(event.currentTarget.value));
	};

	const onClickHandler = () => {
		setMaxValuesToCounter(maxValue);
		setStartValuesToCounter(startValue);
		setMaxValue(0);
		setStartValue(0);
	};

	return (
		<div className={s.container}>
			<div className={s.selectValue}>
				<Input value={maxValue} title={"Max value:"} onChangeHandler={getMaxValueFromInput} />
				<Input value={startValue} title={"Start value:"} onChangeHandler={getStartValueFromInput} />
			</div>
			<div className={s.setControl}>
				<Button className={maxValue <= 0 || startValue <= 0 ? s.disbledButton : s.button} onClick={onClickHandler}>
					Set
				</Button>
			</div>
		</div>
	);
};
