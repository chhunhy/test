import {gradesbotApi } from "../api";
export const authApi = gradesbotApi.injectEndpoints({
    endpoints: (builder) => ({
        //register user
        register: builder.mutation<any, { data: object}>({
            query: ({ data }) => ({
                url: `/auth/register`,
                method: "POST",
                body: data,
            }),
        }),
        forgetPassword: builder.mutation<any, { email: object}>({
            query: ({ email }) => ({
                url: `/auth/forgot-password`,
                method: "POST",
                body: email,
            }),
        }),
        resetPassword:builder.mutation<any,{resetPasswordBody:object}>({
            query: ({resetPasswordBody}) => ({
                url: `/auth/reset-password`,
                method: "POST",
                body: resetPasswordBody,
            }),
        }),
        resetVerify:builder.mutation<any,{resentCode:object}>({
            query: ({resentCode}) => ({
                url: `/auth/resend-verification`,
                method: "POST",
                body: resentCode,
            }),
        }),
        VerifyCode:builder.mutation<any,{codeVerify:object}>({
            query: ({codeVerify}) => ({
                url: `/auth/verify-email`,
                method: "POST",
                body: codeVerify,
            }),
        }),
          
})
})

export const {
	useRegisterMutation,
    useForgetPasswordMutation,
    useResetPasswordMutation,
    useResetVerifyMutation,
    useVerifyCodeMutation,
} = authApi;