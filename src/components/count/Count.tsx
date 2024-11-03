import s from "./Count.module.css";

type Type = {
    maxValue: number 
    count: number
}

export const Count = ({maxValue, count}: Type) => {
	return <div className={count === maxValue ? s.counterSectionMaxValue : s.counterSection}>{count}</div>;
};
