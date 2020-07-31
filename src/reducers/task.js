import *as taskConstant from './../constants/task';

//chứa danh sách các công việc
const initialState = {
    listTask: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case taskConstant.FETCH_TASK: {
            return {
                ...state,
                listTask: [],
            }
        }
        case taskConstant.FETCH_TASK_SUCCESS: {
            const {data} = action.payload;
            console.log(data)
            return {
                ...state,
                listTask: data,
            }
        }
        //tạm thời chưa xử lý failed
        case taskConstant.FETCH_TASK_FAILED: {
            return {
                ...state,
                listTask: [],
            }
        }
        default:
            return state;
    }
};

export default reducer;