import React from "react";
import styles from "./BottomBar.module.css";

const BottomBar = ({ setShowModal }) => {
	return (
		<div className={styles.BottomBar} onClick={(e) => setShowModal(true)}>
			<div className={styles.BBimg}></div>
			<div className={styles.title}>
				<h5>Times Two</h5>
				<p className={styles.detail} data-hover="View">
					<span>Project</span>
				</p>
			</div>
			<button>
				<div className={styles.buttonDiv}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</button>
		</div>
	);
};

export default BottomBar;
