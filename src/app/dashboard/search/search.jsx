"use client";
import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    // const { replace } = useRouter();
    const pathname = usePathname();

    console.log(searchParams);
    console.log(pathname);

    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);

        if (e.targe.value) {
            e.target.value.length > 1 && params.set("q", e.target.value);
        } else {
            params.delete("q");
        }
        replace(`${pathname}?${params}`);
    }, 500);

    return (
        <div className={styles.container}>
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
        </div>
    );
};

export default Search;
