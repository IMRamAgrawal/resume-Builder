import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    id:0,
    userName:"",
    // users:[]
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state,action){
      state.id=action.payload.id
      state.userName=action.payload.userName
      // state.users = [...state.users, action.payload]
    },
  
  },
})

export const { addUser} = userSlice.actions;
export default userSlice.reducer;