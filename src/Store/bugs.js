import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugRemoved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs.splice(index, 1)
        }
    }
})
export const { bugAdded, bugRemoved, bugResolved } = slice.actions
export default slice.reducer

// // import { createAction } from "@reduxjs/toolkit";

// const action = createAction('bugUpdated');
// console.log('----action----', action);

// // Action Types
// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

// // Action Creators
// export const bugAdded = description => ({
//     type: BUG_ADDED,
//     payload: {
//         description,
//     }
// })
// export const bugRemoved = id => ({
//     type: BUG_REMOVED,
//     payload: {
//         id,
//     }
// })
// export const bugResolved = (id) => ({
//     type: BUG_RESOLVED,
//     payload: {
//         id
//     }
// })


// // Reducer

// export default function reducer(state = [], action) {
//     switch (action.type) {
//         case BUG_ADDED:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ];
//         case BUG_REMOVED:
//             return state.filter(bug => bug.id !== action.payload.id)

//         case BUG_RESOLVED:
//             return state.map(bug =>
//                 bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//             )
//         default:
//             return state

//     }
// }