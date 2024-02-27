"use clinet";
import React, { useState } from "react";

const Page = () => {
    const handleForm = async () => {
        "user server";
        console.log("Hello");
    };
    return (
        <div>
            <form action={handleForm}>
                <input type="text" />
            </form>
        </div>
    );
};

export default Page;
