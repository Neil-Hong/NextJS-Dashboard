import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src={"/astronaut.png"} alt="" fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin Bashboard?</h3>
                    <span className={styles.subtitle}>Take 4 minutes to learn</span>
                    <p className={styles.desc}>
                        To use the new dashboard, You have to be df aefa sdfes sdf asde ksdfhe ksh wsfa.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src={"/astronaut.png"} alt="" fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin Bashboard?</h3>
                    <span className={styles.subtitle}>Take 4 minutes to learn</span>
                    <p className={styles.desc}>
                        To use the new dashboard, You have to be df aefa sdfes sdf asde ksdfhe ksh wsfa.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;
