import Image from 'next/image'
import styles from './page.module.css'
import {notFound} from 'next/navigation';
import type {metadata} from "@/app/layout";
import os from 'os'
import Counter from "@/app/component/Counter"; //노드 api
export default function Home() {
    return (
        <>
            <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="shop"
            width={400}
            height={400}/>

            <h1>홈페이지다.버전5</h1>
            <Counter />
        </>
)
}
