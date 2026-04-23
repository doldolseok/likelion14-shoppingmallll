import styled from "styled-components";
import ProductCard from "../productCard/ProductCard";

import product1 from "../../../assets/images/greyT.png";
import product2 from "../../../assets/images/blueT.png";
import product3 from "../../../assets/images/blackJK.png";
import product4 from "../../../assets/images/navyT.png";
import product5 from "../../../assets/images/sh.png";

const products = [
    { id: 1, name: "아이앱 스튜디오 25 후드 라이트 그레이", price: 145000, review: 1561, image: product1 },
    { id: 2, name: "아이앱 스튜디오 25 후드 라이트 블루", price: 145000, review: 1732, image: product2 },
    { id: 3, name: "아디다스 블랙 져지 2016", price: 255000, review: 781, image: product3 },
    { id: 4, name: "슈프림 후드집업 30 딥블루", price: 458000, review: 2567, image: product4 },
    { id: 5, name: "나이키 에어 그레이 하운드 25", price: 235000, review: 231, image: product5 },
]

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    row-gap: 35px;
    padding: 0 158px;
    margin-top: 61px;
    margin-bottom: 35px;
`;

export default function ProductList() {
    return (
        <ListContainer>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ListContainer>
        

    );
}