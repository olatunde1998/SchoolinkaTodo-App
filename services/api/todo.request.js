// import { apiService } from "../index";
import {apiService} from "../index"

/** Todo. The React-Query key is "CreateTodoApi" */
export const CreateLGAApi = async (data) => {
  const payload = { ...data };
  const response = await apiService.post({
    url: "/posts",
    payload,
  });
  return response;
};

/** Todo. The React-Query key is "getTodoApi" */
export const getTodoApi = async () => {
  const response = await apiService.get('/posts');
  return response;
};


/** Todo. The React-Query key is "editTodoApi" */
export const editTodoApi = async ({data,id}) => {
  const payload = { ...data };
  const response = await apiService.patch({
    url: `/posts/${id}`,
    payload,
  });
  return response;
};

/** Todo. The React-Query key is "deleteTodoApi" */
export const deleteTodoApi = async ({data,id}) => {
  const payload = { ...data };
  const response = await apiService.delete({
    url: `/posts/${id}`,
    payload,
  });
  return response;
};

