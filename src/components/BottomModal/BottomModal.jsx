import React from "react";
import styles from "./BottomModal.module.css";

const BottomModal = ({ setShowModal }) => {
	return (
		<div className={styles.BottomModal}>
			<div className={styles.header}>
				<div onClick={(e) => setShowModal(false)}></div>
				<h1>TIMES TWO</h1>
			</div>
			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p>About</p>
				</div>
			</div>
			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p>About</p>
				</div>
			</div>
			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p>About</p>
				</div>
			</div>
			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p>About</p>
				</div>
			</div>
			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p>About</p>
				</div>
			</div>
			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p>About</p>
				</div>
			</div>
			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p>About</p>
				</div>
			</div>
			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p>About</p>
				</div>
			</div>
			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p>About</p>
				</div>
			</div>
			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p>About</p>
				</div>
			</div>
		</div>
	);
};

export default BottomModal;
