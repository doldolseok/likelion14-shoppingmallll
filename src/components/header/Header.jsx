import styled from "styled-components";
import logoUrl from "../../assets/images/kream_image.png";
import homeUrl from "../../assets/icons/home_icon.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeleteModal } from "../../context/DeleteModalContext";


const LogoImage = styled.img`width: 166px; height: 141px;`;
const HomeIcon = styled.img`width: 61px; height: 24px;`;
const HeaderContainer = styled.div`
    padding-right: 160px;
    padding-left: 160px;
    display: flex;
    justify-content: space-between;
`;
const Button = styled.div`
    color: #6C6C6C;
    font-size: 13px;
    font-family: Pretendard;
    font-weight: 400;
    cursor: pointer;
    &:hover { text-decoration: underline; }
`;
const HeaderRight = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    display: inline-flex;
    align-items: flex-end;
    gap: 36px;
`;
const ButtonRow = styled.div`
    display: flex;
    gap: 24px;
`;

export default function Header() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { setShowDeleteModal } = useDeleteModal();
    const isItemDetail = pathname.startsWith("/item/");
    const itemId = isItemDetail ? pathname.split("/")[2] : null;

    return (
        <div>
            <HeaderContainer>
                <LogoImage src={logoUrl} onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
                <HeaderRight>
                    <ButtonRow>
                        {isItemDetail ? (
                            <>
                                <Button onClick={() => navigate("/register")}>상품등록</Button>
                                <Button onClick={() => setShowDeleteModal(true)}>상품삭제</Button>
                                <Button onClick={() => navigate(`/item/${itemId}/edit`)}>상품수정</Button>
                            </>
                        ) : (
                            <Button onClick={() => navigate("/register")}>상품등록</Button>
                        )}
                    </ButtonRow>
                    <HomeIcon src={homeUrl} onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
                </HeaderRight>
            </HeaderContainer>
        </div>
    );
}