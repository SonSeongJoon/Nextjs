import {notFound} from 'next/navigation';
type Props = {
    params: {
        slug: string;
    }
}

export function generateMetadata({params}: Props) {
    return {
        title: `제품의 이름: ${params.slug}`
    }
}
export default function PantsPage({params}: Props) {
    if (params.slug === "nothing") {
        notFound();
    }
    return <h1>{params.slug} 제품 설명 페이지</h1>;
}

// 정적으로 만들고 싶은게 있을 때
export function generateStaticParams() {
    const product = ['pants', 'skirt'];
    return product.map(product => ({
        slug: product,
    }));
}