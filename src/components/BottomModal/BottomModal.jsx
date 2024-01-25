import React from "react";
import styles from "./BottomModal.module.css";

const BottomModal = ({ setShowModal }) => {
	return (
		<div className={styles.BottomModal}>
			<div className={styles.header} onClick={(e) => setShowModal(false)}>
				<div></div>
				<h1>TIMES TWO</h1>
			</div>

			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Times Two</h5>
					<p className={styles.detail} data-hover="View">
						<span>About</span>
					</p>
				</div>
			</div>

			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Due</h5>
					<p className={styles.detail} data-hover="View">
						<span>Project</span>
					</p>
				</div>
			</div>

			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Pinecast</h5>
					<p className={styles.detail} data-hover="View">
						<span>Project</span>
					</p>
				</div>
			</div>

			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Google Pixel</h5>
					<p className={styles.detail} data-hover="View">
						<span>Project</span>
					</p>
				</div>
			</div>

			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Gantry</h5>
					<p className={styles.detail} data-hover="View">
						<span>Project</span>
					</p>
				</div>
			</div>

			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Spacefor</h5>
					<p className={styles.detail} data-hover="View">
						<span>Venture</span>
					</p>
				</div>
			</div>

			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>What we do</h5>
					<p className={styles.detail} data-hover="View">
						<span>Services</span>
					</p>
				</div>
			</div>

			<div className={styles.listItem}>
				<div className={styles.liImg}></div>
				<div className={styles.txt}>
					<h5>Let's Partner</h5>
					<p className={styles.detail} data-hover="View">
						<span>Connect</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default BottomModal;
