import {apiSlice} from "../api/apiSlice";
import {userLoggedIn} from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const userCredential = {
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }
                    localStorage.setItem("Auth", JSON.stringify(userCredential))
                    dispatch(userLoggedIn(userCredential))
                } catch (e) {

                }
            }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const userCredential = {
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }
                    localStorage.setItem("Auth", JSON.stringify(userCredential))
                    dispatch(userLoggedIn(userCredential))
                } catch (e) {

                }
            }
        }),
    }),
});
export const {useRegisterMutation, useLoginMutation} = authApi;
