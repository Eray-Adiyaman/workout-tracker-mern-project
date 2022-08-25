import { useAuthContext } from "./useAuthContext"


export const useLogout = () => {
    const { dispatch } = useAuthContext();
    
    const logout = () => {
        // 2 thing to do to logout a person
        // clear the local storage jwt and clear the global auth state
        localStorage.removeItem("user")

        dispatch( { type: "LOGOUT"} )
    } 

    return { logout }
}