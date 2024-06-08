// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // Define a service using a base URL and expected endpoints
// export const gradesBotApi = createApi({
//   reducerPath: "gradesBotApi",
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_DJANGO_API_URL }),
//   endpoints: (builder) => ({
//     // get all courses
//     getCourses: builder.query<any, { page: number; pageSize: number }>({
//       query: ({ page = 1, pageSize = 10 }) =>
//         `api/courses/?page=${page}&page_size=${pageSize}`,
//     }),
//     // get single course by ID
//     getCourseById: builder.query<any, number>({
//       query: (id) => `api/courses/${id}/`,
//     }),
//     // create a course
//     createCourse: builder.mutation<any, { newCourse: object; accessToken: string }>({
//       query: ({ newCourse, accessToken }) => ({
//         url: "/api/courses/",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: newCourse,
//       }),
//     }),
//     // update a course
//     updateCourse: builder.mutation<any, { id: number; updatedCourse: object; accessToken: string }>({
//       query: ({ id, updatedCourse, accessToken }) => ({
//         url: `/api/courses/${id}/`,
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: updatedCourse,
//       }),
//     }),
//     // delete a course
//     deleteCourse: builder.mutation<any, { id: number; accessToken: string }>({
//       query: ({ id, accessToken }) => ({
//         url: `/api/courses/${id}/`,
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }),
//     }),
//     // get all users
//     getUsers: builder.query<any, { page: number; pageSize: number }>({
//       query: ({ page = 1, pageSize = 10 }) =>
//         `api/users/?page=${page}&page_size=${pageSize}`,
//     }),
//     // get single user by ID
//     getUserById: builder.query<any, number>({
//       query: (id) => `api/users/${id}/`,
//     }),
//   }),
// });

// // Export hooks for usage in components
// export const {
//   useGetCoursesQuery,
//   useGetCourseByIdQuery,
//   useCreateCourseMutation,
//   useUpdateCourseMutation,
//   useDeleteCourseMutation,
//   useGetUsersQuery,
//   useGetUserByIdQuery,
// } = gradesBotApi;
