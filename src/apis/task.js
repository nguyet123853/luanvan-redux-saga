//nơi chứa tất cả các hàm gọi api riêng biệt cho từng module. mà từng module riêng biệt đó khi gọi sẽ gọi axiosService 
import axiosService from './../commons/axiosService';
import { API_ENDPOINT } from './../constants';

//http://localhost:3000
const url = 'tasks';

export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}