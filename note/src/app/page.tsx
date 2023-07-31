import Image from 'next/image'
import styles from './page.module.css'
import {notFound} from 'next/navigation';
import type {metadata} from "@/app/layout";
import os from 'os'
import Counter from "@/app/component/Counter"; //노드 api
export default function Home() {
    console.log("안녕 - 서버에서만 동작");
    console.log(os.hostname());
    return (
        <>
            <h1>홈페이지다.</h1>
            <Counter />
        </>
)
}
