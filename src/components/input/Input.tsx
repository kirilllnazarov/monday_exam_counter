import { ChangeEvent } from "react";
import s from "./Input.module.css";

type InputType = {
	title: string;
	value: number;
	onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ title, value, onChangeHandler }: InputType) => {
	return (
		<div>
			<label>{title}</label>
			<input
				className={value <= 0 ? s.inputStyleIncorrectValue : ""}
				type={"number"}
				value={value}
				onChange={onChangeHandler}
			/>
		</div>
	);
};
