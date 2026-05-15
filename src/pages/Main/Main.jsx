import ProductList from "../../components/common/productList/ProductList";
import { useEffect, useState } from "react";
import { getItems, postItem, deleteItem } from "../../api/shop";
import { itemData } from "../../itemDetail/itemDummy";

const resetAndSeed = async () => {
    // 기존 clothes, shoes 데이터 전부 삭제
    const existingClothes = await getItems("clothes");
    for (const item of existingClothes) {
        await deleteItem("clothes", item.id);
    }
    const existingShoes = await getItems("shoes");
    for (const item of existingShoes) {
        await deleteItem("shoes", item.id);
    }

    // 본인 더미데이터 5개 등록
    for (const item of itemData) {
        const type = item.category === "신발" ? "shoes" : "clothes";
        await postItem(type, {
            name: item.name,
            price: item.price,
            reviews: item.review,
            rating: item.rating,
            image: item.image,
            gender: item.gender,
            color: item.color,
            category: item.category,
            size: item.size,
            soldout: false,
        });
    }
};

export default function Main(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try{
                if (!localStorage.getItem("myDataSeeded")) { // 최초 1회만 실행
                    await resetAndSeed();
                    localStorage.setItem("myDataSeeded", "true");
                }
                const clothes = await getItems("clothes");
                const shoes = await getItems("shoes");
                // 각 아이템에 _type을 붙여서 카드 클릭 시 올바른 경로로 이동
                const all = [
                    ...clothes.map(item => ({ ...item, _type: "clothes" })),
                    ...shoes.map(item => ({ ...item, _type: "shoes" })),
                ];
                if (!cancelled) setItems(all);
            }catch{
                if(!cancelled) setItems([]);
            }
        })();
        return () => { cancelled = true; };
    }, []);

    return(
        <ProductList items={items} type="clothes"/>)


}