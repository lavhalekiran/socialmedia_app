import { createSlice } from "@reduxjs/toolkit";
const initialState={
    posts:{},
};
const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
       getPosts(state,action){
            state.posts=action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload));
        },
    }
});
export default postSlice.reducer;
export function SetPosts(post){
    return(dispatch,getstate)=>{
        dispatch(postSlice.actions.getPosts(post));
    };
}