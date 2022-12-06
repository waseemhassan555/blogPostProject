export const LoginStart =(userCredentials)=>({
    type:"LOGIN_START"
});
export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payeload:user,
});
export const LoginFailure=()=>({
type:"LOGIN_FAILURE"

})
export const UpdateStart =(userCredentials)=>({
    type:"UPDATE_START"
});
export const UpdateSuccess=(user)=>({
    type:"UPDATE_SUCCESS",
    payeload:user,
});
export const UpdateFailure=()=>({
type:"UPDATE_FAILURE"

})
export const LOGOUT=()=>({
    type:"LOGOUT"
    
    })