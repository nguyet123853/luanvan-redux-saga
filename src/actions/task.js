import * as taskApis from './../apis/task';
import * as taskConstants from './../constants/task'

export const fetchListTask = () => {
    return {
        type: taskConstants.FETCH_TASK,
    }
}

//đây là một func nhận vào data
export const fetchListTaskSuccess = data => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        //payload:data
        payload: {
            data,
        }
    }
}

export const fetchListTaskFailed = error => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload: {
            error,
        }
    }
}

/*
Mô tả quá trình lấy danh sách các task:
    + bước 1: gọi fetchListTaskRequest()
    + bước 2: tôi muốn f5 cái state task về rỗng: state task => [] chỉ  việc dùng FETCH_TASK.
    khi gọi api thành công nó vào .then()
    + bước 3: dispatch session fetchListTaskSuccess và truyền vào cái data reponse: fetchListTaskSuccess (data reponse)
*/

export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTask()); //buoc 2
        taskApis
        .getList()
        //resp:response: data.data =>state objects => store
        .then(resp => {
            const { data } = resp;
            dispatch(fetchListTaskSuccess(data))
        }).catch(error => {
            dispatch(fetchListTaskFailed(error))
        })
    }
}