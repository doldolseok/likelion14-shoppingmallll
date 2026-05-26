import axios from "axios"; // 라이브러리

const api = axios.create({ // 만들어줌
    baseURL: import.meta.env.VITE_API_BASE_URL, // .env의 URL을 써줌 만약 안쓰면 매번 axios.get("http://localhost:3000~")이걸 해줘야함
});

export const getItems = async (type = "clothes", params = {}) => { // 하나의 함수로 처리해줌, async: 비동기 함수서버에게 요청을 할때 시간이 걸리는데 동기를 하면 멈춰버린다
    const res = await api.get(`/${type}`,{params}); // 응답이 올때까지 기다려줌
    return res.data; // 데이터를 반환해줌
};

export const getItem = async (type, id) => {
    const res = await api.get(`/${type}/${id}`);
    return res.data;
};

export const postItem = async (type, data) => {
    const res = await api.post(`/${type}`, data);
    return res.data;
};

export const putItem = async (type, id, data) => {
    const res = await api.put(`/${type}/${id}`, data);
    return res.data;
};

export const patchItem = async (type, id, data) => {
    const res = await api.patch(`/${type}/${id}`, data);
    return res.data;
};

export const deleteItem = async (type, id) => {
    const res = await api.delete(`/${type}/${id}`);
    return res.data;
};