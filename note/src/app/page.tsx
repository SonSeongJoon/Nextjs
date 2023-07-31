import Image from 'next/image'
import styles from './page.module.css'
import {notFound} from 'next/navigation';
import type {metadata} from "@/app/layout";

export default function Home() {
  return (
    <h1>홈페이지다.</h1>
  )
}
