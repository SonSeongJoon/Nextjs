import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './layout.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: '멋진 제품 사이트 | 전체 제품 확인',
    description: '멋진 제품을 확인해 보세요',
}

export default function ProductsLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav className={styles.nav}>
                <Link href='/products/WOMEN'>여성옷</Link>
                <Link href='/products/MAN'>남성옷</Link>
            </nav>
            <section className={styles.product}>
                {children}
            </section>
        </>
    )
}
