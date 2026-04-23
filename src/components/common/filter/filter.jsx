import styled from "styled-components";
import arrowUrl from "../../../assets/icons/Vector.png";
import sortUrl from "../../../assets/icons/SortIcon.png";
import FilterModal from "./FilterModal";
import { useState } from "react";
import SortDropdown from "./SortDropdown"; 

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 153px;
    margin-top: 30px;
`;

const FilterList = styled.div`
    display: flex;
    gap: 12px;
`;

const FilterButton = styled.button`
   display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 8px 10px 11px 10px;
    
    color: #616161;
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 400;
    
    background: #F2F2F2;
    border: 1px solid #F2F2F2;
    border-radius: 20px;
    cursor: pointer;
    
`;

const SortButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
    color: #616161;
    font-family: Pretendard;
    font-size: 13px;
    cursor: pointer;

    
`;

const ArrowIcon = styled.img`
    width: 10px;
    height: 5px;
`

const SortIcon = styled.img`
    width: 10px;
    height: 11px;
`


const filterOptions = {
    gender: { 
        title: "성별", 
        rows: [["남성", "여성", "남녀공용"]]   // 한 줄
    },
    color: { 
        title: "색상", 
        rows: [
            ["red", "pink", "blue"],
            ["black", "gray", "denim"],
            ["multi", "rainbow", "holographic"]
        ]
    },
    size: { 
        title: "사이즈", 
        rows: [
            ["9", "10"],                    // 첫째 줄
            ["S", "M", "L", "XL"]          // 둘째 줄
        ]
    },
    price: { 
        title: "가격대", 
        rows: [["0~30", "31~60", "61~90"]]
    },
    type: { 
        title: "종류", 
        rows: [["clothes", "shoes"]]
    },
};


export default function Filter() {
    const [openModal, setOpenModal] = useState(null);
    const [sortOpen, setSortOpen] = useState(false);
    return (
        <>
        <FilterContainer>
            <FilterList>
                    <FilterButton onClick={() => setOpenModal("gender")}>
                        성별 <ArrowIcon src={arrowUrl} />
                    </FilterButton>
                    <FilterButton onClick={() => setOpenModal("color")}>
                        색상 <ArrowIcon src={arrowUrl} />
                    </FilterButton>
                    <FilterButton onClick={() => setOpenModal("size")}>
                        사이즈 <ArrowIcon src={arrowUrl} />
                    </FilterButton>
                    <FilterButton onClick={() => setOpenModal("price")}>
                        가격대 <ArrowIcon src={arrowUrl} />
                    </FilterButton>
                    <FilterButton onClick={() => setOpenModal("type")}>
                        종류 <ArrowIcon src={arrowUrl} />
                    </FilterButton>
                </FilterList>
            <SortButton onClick={() => setSortOpen(!sortOpen)}>
                    정렬순 <SortIcon src={sortUrl} />
                    {sortOpen && <SortDropdown onClose={() => setSortOpen(false)} />}
                </SortButton>
        </FilterContainer>

        {openModal && (
                <FilterModal
                    title={filterOptions[openModal].title}
                    rows={filterOptions[openModal].rows}
                    onClose={() => setOpenModal(null)}
                />   )}
        </>
    );
}