import {gradesbotApi } from "../api";

export const userApi = gradesbotApi.injectEndpoints({
    endpoints: (builder) => ({
        chanagePassword:builder.mutation<any,{changePasswordBody:object}>({
            query: ({changePasswordBody}) => ({
                url: `/users/me/change-password`,
                method: "PUT",
                body: changePasswordBody,
            }),
        })   
        
})
})

export const {
    useChanagePasswordMutation,
} = userApi;