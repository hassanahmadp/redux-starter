import { createSlice } from "@reduxjs/toolkit";


let lastId = 0;

const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name
            })
        }
    }
})

// console.log(projectSlice);

export const { userAdded } = slice.actions
export default slice.reducer;