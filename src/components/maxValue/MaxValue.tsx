import s from "./MaxValue.module.css";

type Type = {
	maxValue: number
};

export const MaxValue = ({maxValue}: Type) => {
	return <section className={s.value}>Max value: {maxValue}</section>;
};
