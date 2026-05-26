import styled from "styled-components";
import xIconUrl from "../../../assets/icons/XIcon.png";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalBox = styled.div`
    display: inline-flex;
    flex-direction: column;
    padding: 30px 33px 48px 35px;
    border-radius: 25px;
    background: #FFF;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const Title = styled.p`
    margin: 0;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    -webkit-text-stroke: 0.3px #000;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    padding: 0;
    color: #000;
`;

const OptionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const OptionRow = styled.div`
    display: flex;
    gap: 12px;                /* 줄 안의 버튼 사이 간격 */
`;

const OptionButton = styled.button`
    min-width: 80px;
    padding: 8px 20px;
    border: none;
    border-radius: 999px;
    background: #F5F5F5;
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    
    &:hover {
        background: #E5E5E5;
    }
`;

const XIconUrl = styled.img`
    width: 13px;
    height: 13px;
`

export default function FilterModal({ title, rows, onClose }) {
    return (
        <Overlay onClick={onClose}> 
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <Title>{title}</Title>
                    <CloseButton onClick={onClose}><XIconUrl src = {xIconUrl}/></CloseButton>
                </ModalHeader>
                <OptionList>
                    {rows.map((row, rowIndex) => (
                        <OptionRow key={rowIndex}>
                            {row.map(rows => (
                                <OptionButton key={rows}>{rows}</OptionButton>
                            ))}
                        </OptionRow>
                    ))}
                </OptionList>
            </ModalBox>
        </Overlay>
    );
}
