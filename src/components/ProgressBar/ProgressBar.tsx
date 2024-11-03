import s from "./ProgressBar.module.css";

type Type = {
	count: number;
	maxValue: number;
};

export const ProgressBar = ({ count, maxValue }: Type) => {
	return (
		<div className={s.progressBarContainer}>
			<div className={s.progressBar} style={{ width: `${(count / maxValue) * 100}%` }}></div>
		</div>
	);
};
