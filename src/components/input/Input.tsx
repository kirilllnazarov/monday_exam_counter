import { ChangeEvent, useEffect, useState } from "react";
import s from "./Input.module.css";

type InputType = {
	initialInputValue: (value: number) => void;
};

export const Input = ({ initialInputValue }: InputType) => {
	const [value, setValue] = useState(0);

	useEffect(() => initialInputValue(value), [value]);

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(JSON.parse(event.currentTarget.value));
	};

	return (
		<input
			className={value <= 0 ? s.inputStyleIncorrectValue : ""}
			type={"number"}
			value={value}
			onChange={onChangeHandler}
		/>
	);
};
