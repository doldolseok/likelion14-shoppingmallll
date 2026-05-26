import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 181px;
`;

const ProductImage = styled.img`
    width: 181px;
    height: 237px;
    object-fit: cover;
`;

const ProductName = styled.p`
    margin: 13px 0 0 0;
    color: #333;
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
`;

const ProductPrice = styled.p`
    margin: 4px 0 0 0;
    color: #000;
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    -webkit-text-stroke: 0.3px #000;
`;

const ProductReview = styled.p`
    margin: 4px 0 0 0;
    color: #A7A7A7;
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
`;

export default function ProductCard({ product, itemId, type="clothes" }) {

    const navigate =useNavigate();

    return (
        <CardContainer onClick={()=>navigate(`/item/${type}/${itemId}`)}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price?.toLocaleString()}원</ProductPrice>
            <ProductReview>리뷰 {product.reviews?.toLocaleString()}</ProductReview>
        </CardContainer>
    );
}