import Link from 'next/link';
import {getProducts} from "@/app/service/products";
import styles from './page.module.css'
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import MeowArticle from "@/app/component/MeowArticle";
import error = Simulate.error;
import clothesImage from '../../../public/images/clothes.jpg'
import Image from 'next/image'
export default async function ProductsPage() {
    const products = await getProducts();
    return (
        <>
            <h1>제품 소개 페이지!</h1>
            <Image src={clothesImage} alt="Clothes" width={200} height={200} priority/>
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