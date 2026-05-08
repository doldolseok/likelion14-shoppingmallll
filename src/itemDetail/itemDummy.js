import product1 from "../assets/images/greyT.png";
import product2 from "../assets/images/blueT.png";
import product3 from "../assets/images/blackJK.png";
import product4 from "../assets/images/navyT.png";
import product5 from "../assets/images/sh.png";

export let itemData = [
    {
        id: 1,
        name: "아이앱 스튜디오 25 후드 라이트 그레이",
        price: 145000,
        review: 1561,
        rating: 4.6,
        image: product1,
        gender: "남녀공용",
        color: "gray",
        category: "후드",
        size: "M",
    },
    {
        id: 2,
        name: "아이앱 스튜디오 25 후드 라이트 블루",
        price: 145000,
        review: 1732,
        rating: 4.5,
        image: product2,
        gender: "남녀공용",
        color: "blue",
        category: "후드",
        size: "L",
    },
    {
        id: 3,
        name: "아디다스 블랙 져지 2016",
        price: 255000,
        review: 781,
        rating: 4.3,
        image: product3,
        gender: "남성",
        color: "black",
        category: "져지",
        size: "XL",
    },
    {
        id: 4,
        name: "슈프림 후드집업 30 딥블루",
        price: 458000,
        review: 2567,
        rating: 4.8,
        image: product4,
        gender: "남성",
        color: "blue",
        category: "후드",
        size: "L",
    },
    {
        id: 5,
        name: "나이키 에어 그레이 하운드 25",
        price: 235000,
        review: 231,
        rating: 4.1,
        image: product5,
        gender: "남녀공용",
        color: "gray",
        category: "신발",
        size: "270",
    },
];

// 더미데이터 CRUD 함수들
export const addItem = (newItem) => {
    const newId = Math.max(...itemData.map(i => i.id)) + 1;
    itemData = [...itemData, { ...newItem, id: newId }];
};

export const deleteItem = (id) => {
    itemData = itemData.filter(item => item.id !== id);
};

export const updateItem = (id, updatedItem) => {
    itemData = itemData.map(item => item.id === id ? { ...item, ...updatedItem } : item);
};

// 필터링 함수
export const filterItems = ({ gender, color, category, size, minPrice, maxPrice }) => {
    return itemData.filter(item => {
        if (gender && item.gender !== gender) return false;
        if (color && item.color !== color) return false;
        if (category && item.category !== category) return false;
        if (size && item.size !== size) return false;
        if (minPrice && item.price < minPrice) return false;
        if (maxPrice && item.price > maxPrice) return false;
        return true;
    });
};