import Link from 'next/link';
import {getProducts} from "@/app/service/products";
import styles from './page.module.css'
import {revalidate} from "@/app/products/[slug]/page";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

// export const revalidate = 3;
export default async function ProductsPage() {
    const products = await getProducts();
    const res = await fetch("https://meowfacts.herokuapp.com", {cache: 'no-store'});
    const data = await res.json();
    const factText = data.data[0];


    return (

        <>
            <h1>제품 소개 페이지!</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <article className={styles.article}>
                {factText}
            </article>
        </>

    );
}