import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: workoutsDispatch } = useWorkoutsContext();
    
    const logout = () => {
        // 2 thing to do to logout a person
        // clear the local storage jwt and clear the global auth state
        localStorage.removeItem("user")

        dispatch( { type: "LOGOUT"} )
        workoutsDispatch( { type: "SET_WORKOUTS", payload: null })
    } 

    return { logout }
}