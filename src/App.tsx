import { Counter } from "./components/counter/Counter";
import { СounterSettings } from "./components/counterSettings/СounterSettings";
import s from "./App.module.css";
import { useState } from "react";

function App() {
	const [maxValue, setMaxValue] = useState(0);
	const [startValue, setStartValue] = useState(0);

	const setMaxValuesToCounter = (max: number) => {setMaxValue(max)};
	const setStartValuesToCounter = (start: number) => {setStartValue(start)};

	const getInitialValues = () => {}
	return (
		<div className={s.app}>
			<СounterSettings
				setMaxValuesToCounter={setMaxValuesToCounter}
				setStartValuesToCounter={setStartValuesToCounter}
			/>
			<Counter maxValueFromInput={maxValue} startValueFromInput={startValue}/>
		</div>
	);
}

export default App;
