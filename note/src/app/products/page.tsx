import Link from 'next/link';
import {getProducts} from "@/app/service/products";
import styles from './page.module.css'
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import MeowArticle from "@/app/component/MeowArticle";
import error = Simulate.error;

export default async function ProductsPage() {
    throw new Error();
    const products = await getProducts();
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
            <MeowArticle/>
        </>

    );
}