'use client';

import styles from './MeowArticle.module.css'
import {useEffect, useState} from "react";
export default function MeowArticle() {
    const [text, setText] = useState('Loading...');

    useEffect(() => {
        fetch('https://meowfacts.herokuapp.com', {cache: "no-cache"})
            .then(res=> res.json())
            .then((data) => setText(data.data[0]));
    }, []);
    return (
        <>
            <article className={styles.article}>{text}</article>
        </>
    )
}