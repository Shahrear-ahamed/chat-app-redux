import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {userLoggedIn} from "../features/auth/authSlice";

const UseAuthCheck = () => {
    const dispatch = useDispatch()
    const [authCheck, setAuthCheck] = useState(false)

    useEffect(() => {
        const localAuth = localStorage?.getItem("auth");

        if (localAuth) {
            const auth = JSON.parse(localAuth);
            dispatch(userLoggedIn({
                accessToken: auth.accessToken, user: auth.user
            }))
        }
        setAuthCheck(true)
    }, [dispatch, authCheck])

    return authCheck
};

export default UseAuthCheck;