import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Task } from '../db'

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getAllTasks: builder.query<Task[],void>({
      query: () => 'tasks',
    }),
    deleteTask: builder.mutation<{success: boolean;id: number},number>({
      query(id){
        return{
          url: `tasks/${id}`,
          method: 'DELETE'
        }
      }
    })
  }),
})

export const { useGetAllTasksQuery, useDeleteTaskMutation } = taskApi