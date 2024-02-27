"use client";
import React, { useState } from "react";
// import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";
import { authenticate } from "@/app/lib/actions";

const LoginForm = () => {
    const [err, setError] = useState();
    // const [state, fromAction] = useFormState(authenticate, undefined);
    const handleLogin = async (formData) => {
        const data = await authenticate(formData);
        data.error && setError(data.error);
    };

    return (
        <div className={styles.container}>
            <form action={handleLogin} className={styles.form}>
                <h1>Login</h1>
                <input type={"text"} placeholder="username" name="username" />
                <input type={"text"} placeholder="password" name="password" />
                <button>Login</button>
                {err && err}
                {/* {state && state} */}
            </form>
        </div>
    );
};

export default LoginForm;
