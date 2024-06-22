import { createSlice } from "@reduxjs/toolkit";
const initialState = 
{
    user: {
        user:{}
    }
}

const userSlice = createSlice
(
    {
        name: "Royalroy",
        initialState,

        reducers:
        {
            setUser: (state, action)=>{
                state.user.user = action.payload
            }
        }
    }
)

export const {setUser} = userSlice.actions
export default userSlice.reducer