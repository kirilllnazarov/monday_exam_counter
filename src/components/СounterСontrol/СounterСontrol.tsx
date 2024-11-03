import { Button } from "../button/Button";
import s from "./СounterСontrol.module.css";

type Type = {
	maxValue: number;
	count: number;
	startValue: number;
	incCount: () => void;
	resetCount: () => void;
};

export const СounterСontrol = ({ maxValue, count, startValue, incCount, resetCount }: Type) => {
	return (
		<div className={s.buttonSection}>
			<Button className={count >= maxValue ? s.disbledButton : s.button} onClick={incCount}>
				Inc
			</Button>
			<Button className={count === startValue ? s.disbledButton : s.button} onClick={resetCount}>
				Reset
			</Button>
		</div>
	);
};
