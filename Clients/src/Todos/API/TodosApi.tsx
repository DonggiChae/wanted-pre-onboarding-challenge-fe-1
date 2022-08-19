import axios, {AxiosRequestConfig} from 'axios'

export interface ITodo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type ITodoInput = Pick<ITodo, "title" | "content">;


export interface ITodoUpdateInput {
  title: string;
  content: string;
  id: string;
}


export interface ITodoResponseDatas {
  data: ITodo[]
}

export const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://127.0.0.1:8080/todos',
};

const client = axios.create(axiosConfig);

client.defaults.headers.common['Authorization'] = localStorage.getItem('token') || ''

export const getTodos = async () => {
    const response = await client.get('/')
    return response.data
}

export const createTodoResponse = async (title: string, content: string): Promise<ITodo> => {
  const res = await client.post('/', { title, content })
  return res.data.data
}

export const getTodoByIdResponse = async (id: string): Promise<ITodo> => {
    const res= await client.get(`/${id}`)
    return res.data.data
}

export const updateTodoResponse = async (id: string, title: string, content: string): Promise<ITodo> => {
    const res= await client.put(`/${id}`, { title, content })
    return res.data.data
}

export const deleteTodoResponse = async (id: string): Promise<ITodo> => {
    const res = await client.delete(`/${id}`)
    return res.data.data
}