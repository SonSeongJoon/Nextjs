import {notFound, redirect} from 'next/navigation';
import {getProduct, getProducts} from "@/app/service/products";
import Image from "next/image";
import GoProductsButton from '../../component/GoProductsButton'


type Props = {
    params: {
        slug: string;
    }
}

export function generateMetadata({params}: Props) {
    return {
        title: `제품의 이름: ${params}`
    }
}

export default async function ProductPage({params: {slug}}: Props) {
    const product = await getProduct(slug);
    if (!product) {
        redirect('/products');
    }
    return (
        <>
            <h1>{product.name} 제품 설명 페이지</h1>
            <Image
                src={`/images/${product.image}`}
                alt={product.name}
                width={300}
                height={300}
            />
            <GoProductsButton/>
        </>
    )
}

// 정적으로 만들고 싶은게 있을 때
export async function generateStaticParams() {
    const products = await getProducts();
    return products.map(product => ({
        slug: product.id,
    }));
}