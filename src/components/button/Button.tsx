import { ButtonHTMLAttributes } from "react";

type Type = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Type) => {
	const { onClick, ...rest } = props;
	return (
		<button className={rest.className} onClick={onClick}>
			{rest.children}
		</button>
	);
};
