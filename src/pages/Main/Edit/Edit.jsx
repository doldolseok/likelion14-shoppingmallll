import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { itemData, updateItem } from "../../../itemDetail/itemDummy.js";

const Container = styled.div`
    display: flex;
    gap: 0;
    min-height: 100vh;
`;

const ImageSection = styled.div`
    width: 50%;
    border-right: 1px solid #D9D9D9;
    padding: 115px 160px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const ImageUploadBox = styled.div`
    width: 459px;
    height: 602px;
    background: #F5F5F5;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
`;

const PreviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const FormSection = styled.div`
    width: 50%;
    padding: 47px 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

const FormCard = styled.div`
    width: 285px;
    height: 739px;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    padding: 27px 33px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const FormTitle = styled.h2`
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 600;
    margin: 0 0 8px 0;
`;

const FieldLabel = styled.p`
    font-size: 12px;
    color: #6C6C6C;
    font-family: Pretendard;
    margin: 0 0 4px 0;
`;

const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 8px;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    font-size: 13px;
    font-family: Pretendard;
    box-sizing: border-box;
    outline: none;
    &:focus { border-color: #999; }
`;

const FieldGroup = styled.div``;

const TagRow = styled.div`
    display: flex;
    gap: 6px;
`;

const ColorTagRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
`;

const Tag = styled.div`
    flex: 1;
    display: flex;
    padding: 8px 0;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #E0E0E0;
    background: ${props => props.selected ? "#D0D0D0" : "#fff"};
    color: #333;
    font-size: 12px;
    font-family: Pretendard;
    cursor: pointer;
`;

const ColorTag = styled.div`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #E0E0E0;
    background: ${props => props.selected ? "#D0D0D0" : "#fff"};
    color: #333;
    font-size: 12px;
    font-family: Pretendard;
    cursor: pointer;
`;

const SubmitBtn = styled.button`
    width: 100%;
    height: 30px;
    background: #F2F2F2;
    color: #333;
    border: 1px solid #F2F2F2;
    border-radius: 5px;
    font-size: 14px;
    font-family: Pretendard;
    cursor: pointer;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CATEGORIES = ["의류", "신발"];
const GENDERS = ["남성", "여성", "남녀공용"];
const COLORS = ["red", "pink", "blue", "gray", "black", "denim", "multi", "rainbow", "holographic"];

export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = itemData.find(item => item.id === Number(id));

    const [imagePreview, setImagePreview] = useState(product?.image || null);
    const [form, setForm] = useState({
        name: product?.name || "",
        rating: product?.rating || "",
        review: product?.review || "",
        price: product?.price || "",
        size: product?.size || "",
        category: product?.category || "",
        gender: product?.gender || "",
        color: product?.color || "",
    });

    if (!product) return <div>상품을 찾을 수 없습니다.</div>;

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setImagePreview(URL.createObjectURL(file));
    };

    const handleChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        updateItem(Number(id), {
            name: form.name,
            rating: Number(form.rating),
            review: Number(form.review),
            price: Number(form.price),
            size: form.size,
            category: form.category,
            gender: form.gender,
            color: form.color,
            image: imagePreview,
        });
        navigate(`/item/${id}`);
    };

    return (
        <Container>
            <ImageSection>
                <ImageUploadBox onClick={() => document.getElementById("editImageInput").click()}>
                    {imagePreview ? (
                        <PreviewImage src={imagePreview} alt="preview" />
                    ) : (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                            <polyline points="17 8 12 3 7 8"/>
                            <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                    )}
                </ImageUploadBox>
                <input id="editImageInput" type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
            </ImageSection>

            <FormSection>
                <FormCard>
                    <FormTitle>상품 정보 수정</FormTitle>
                    <FieldGroup>
                        <FieldLabel>상품명</FieldLabel>
                        <Input value={form.name} onChange={e => handleChange("name", e.target.value)} />
                    </FieldGroup>
                    <FieldGroup>
                        <FieldLabel>평점</FieldLabel>
                        <Input value={form.rating} onChange={e => handleChange("rating", e.target.value)} />
                    </FieldGroup>
                    <FieldGroup>
                        <FieldLabel>리뷰수</FieldLabel>
                        <Input value={form.review} onChange={e => handleChange("review", e.target.value)} />
                    </FieldGroup>
                    <FieldGroup>
                        <FieldLabel>가격</FieldLabel>
                        <Input value={form.price} onChange={e => handleChange("price", e.target.value)} />
                    </FieldGroup>
                    <FieldGroup>
                        <FieldLabel>사이즈</FieldLabel>
                        <Input value={form.size} onChange={e => handleChange("size", e.target.value)} />
                    </FieldGroup>
                    <FieldGroup>
                        <FieldLabel>종류</FieldLabel>
                        <TagRow>
                            {CATEGORIES.map(c => (
                                <Tag key={c} selected={form.category === c} onClick={() => handleChange("category", c)}>{c}</Tag>
                            ))}
                        </TagRow>
                    </FieldGroup>
                    <FieldGroup>
                        <FieldLabel>성별</FieldLabel>
                        <TagRow>
                            {GENDERS.map(g => (
                                <Tag key={g} selected={form.gender === g} onClick={() => handleChange("gender", g)}>{g}</Tag>
                            ))}
                        </TagRow>
                    </FieldGroup>
                    <FieldGroup>
                        <FieldLabel>색상</FieldLabel>
                        <ColorTagRow>
                            {COLORS.map(c => (
                                <ColorTag key={c} selected={form.color === c} onClick={() => handleChange("color", c)}>{c}</ColorTag>
                            ))}
                        </ColorTagRow>
                    </FieldGroup>
                    <SubmitBtn onClick={handleSubmit}>상품 수정 완료</SubmitBtn>
                </FormCard>
            </FormSection>
        </Container>
    );
}