import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem, deleteItem } from "../api/shop.js";
import styled from "styled-components";
import { useDeleteModal } from "../context/DeletemodalContext";

const Container = styled.div`
    display: flex;
    gap: 0;
`;

const ImageSection = styled.div`
    width: 50%;
    border-right: 1px solid #D9D9D9;
    padding: 70px 160px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const ProductImage = styled.img`
    width: 366px;
    height: 468px;
    object-fit: contain;
`;

const InfoSection = styled.div`
    width: 50%;
    padding-top: 204px;
    padding-left: 160px;
    box-sizing: border-box;
`;

const Price = styled.h2`
    color: #000;
    font-family: Pretendard;
    font-size: 32px;
    font-weight: 400;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    margin: 0 0 24px 0;
`;

const Name = styled.p`
    color: #333;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 8px 0;
`;

const RatingRow = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const StarIcon = styled.span`
    color: #1A1A1A;
    font-size: 13px;
`;

const RatingText = styled.span`
    color: #949494;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 400;
`;

// 삭제 확인 모달
const ModalOverlay = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

const Modal = styled.div`
    width: 296px;
    height: 136px;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
`;

const ModalText = styled.p`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: #000;
    margin: 0;
`;

const ModalButtons = styled.div`
    display: flex;
    gap: 7px;
`;

const ModalBtn = styled.button`
    width: 102px;
    height: 30px;
    padding: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Pretendard;
    font-size: 13px;
    background: ${props => props.primary ? "#000" : "#fff"};
    color: ${props => props.primary ? "#fff" : "#000"};
`;

export default function ItemDetail() {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { showDeleteModal, setShowDeleteModal } = useDeleteModal();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getItem(type, id);
                setProduct(data);
            } catch {
                setProduct(null);
            }
        })();
    }, [type, id]);

    if (!product) return <div>상품을 찾을 수 없습니다.</div>;

    const handleDelete = async () => {
        await deleteItem(type, id);
        setShowDeleteModal(false);
        navigate("/");
    };

    return (
        <>
           <Container>
                <ImageSection>
                    <ProductImage src={product.image} alt={product.name} />
                </ImageSection>
                <InfoSection>
                    <Price>{product.price.toLocaleString()}원</Price>
                    <Name>{product.name}</Name>
                    <RatingRow>
                        <StarIcon>★</StarIcon>
                        <RatingText>{product.rating}</RatingText>
                        <RatingText>리뷰 {product.reviews?.toLocaleString()}</RatingText>
                    </RatingRow>
                </InfoSection>
            </Container>

            {showDeleteModal && (
                <ModalOverlay>
                    <Modal>
                        <ModalText>상품을 삭제하시겠습니까?</ModalText>
                        <ModalButtons>
                            <ModalBtn onClick={() => setShowDeleteModal(false)}>취소</ModalBtn>
                            <ModalBtn primary onClick={handleDelete}>확인</ModalBtn>
                        </ModalButtons>
                    </Modal>
                </ModalOverlay>
            )}
        </>
    );
}