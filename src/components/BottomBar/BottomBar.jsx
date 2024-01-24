import React from "react";
import styles from "./BottomBar.module.css";

const BottomBar = ({ setShowModal }) => {
	return (
		<div className={styles.BottomBar}>
			<div className={styles.BBimg}></div>
			<div className={styles.title}>
				<h5>Times Two</h5>
				<p>Project</p>
			</div>
			<button onClick={(e) => setShowModal(true)}>open</button>
		</div>
	);
};

export default BottomBar;
