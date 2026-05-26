import { useState } from "react";
import styled from "styled-components";
import checkUrl from "../../../assets/icons/check.png";  

const DropdownContainer = styled.div`
    position: absolute;
    top: 40px;          /* 정렬순 버튼 바로 아래 */
    right: 0;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    
    padding: 15px 14.5px 15px 11px;
    background: #FFF;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    z-index: 100;

    width: 118px;
    height: 105px;
`;

const SortOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
    
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    
    color: ${props => props.$selected ? "#333" : "#AFAFAF"};
    -webkit-text-stroke: ${props => props.$selected ? "0.2px #333" : "0.2px #AFAFAF"};
`;

const CheckIcon = styled.img`
    width: 9px;
    height: 6px;
`;

const sortOptions = ["기본 정렬순", "평점 높은순", "리뷰 많은순"];

export default function SortDropdown({ onClose }) {
    const [selected, setSelected] = useState("기본 정렬순");
    
    return (
        <DropdownContainer onClick={(e) => e.stopPropagation()}>
            {sortOptions.map(option => (
                <SortOption 
                    key={option}
                    $selected={selected === option}
                    onClick={() => {setSelected(option);
                        onClose();
                    }}
                    
                >
                    {option}
                    {selected === option && <CheckIcon src={checkUrl} />}
                </SortOption>
            ))}
        </DropdownContainer>
    );
}