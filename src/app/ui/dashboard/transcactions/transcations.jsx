import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";

const Transcations = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transcations</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavater.png" alt="" width={40} height={40} className={styles.userImage} />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavater.png" alt="" width={40} height={40} className={styles.userImage} />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavater.png" alt="" width={40} height={40} className={styles.userImage} />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$300</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Transcations;
