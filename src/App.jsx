import { useState } from "react";
import "./App.css";
import BottomBar from "./components/BottomBar/BottomBar";
import BottomModal from "./components/BottomModal/BottomModal";

function App() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			{!showModal && <BottomBar setShowModal={setShowModal} />}
			{showModal && <BottomModal setShowModal={setShowModal} />}
		</>
	);
}

export default App;
