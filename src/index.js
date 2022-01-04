<<<<<<< HEAD
import { bugAdded, bugRemoved, bugResolved, getUnresolvedBugs } from "./store/bugs";
=======

import { bugAdded, bugResolved, bugRemoved } from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";
>>>>>>> my-temp-work
import configureStore from "./store/configureStore";
import { projectAdded } from "./store/projects";

const store = configureStore();

// const unsubscribe = store.subscribe(() => {
//     console.log('store changed!', store.getState());
// })

<<<<<<< HEAD
store.dispatch(projectAdded({ name: 'Project 1' }))
store.dispatch(projectAdded({ name: 'Project 2' }))

=======
store.dispatch(projectAdded({ name: 'project 1' }))
store.dispatch(projectAdded({ name: 'project 2' }))
store.dispatch(projectAdded({ name: 'project 3' }))
store.dispatch(projectRemoved({ id: 2 }))
>>>>>>> my-temp-work
store.dispatch(bugAdded({ description: 'Bug 1' }))
store.dispatch(bugAdded({ description: 'Bug 2' }))
store.dispatch(bugAdded({ description: 'Bug 3' }))

// unsubscribe();
// store.dispatch(bugRemoved({ id: 2 }))
store.dispatch(bugResolved({ id: 1 }))

<<<<<<< HEAD
const x = getUnresolvedBugs(store.getState())
const y = getUnresolvedBugs(store.getState())
=======
store.dispatch(bugRemoved({ id: 2 }))
store.dispatch(bugResolved({ id: 1 }))
>>>>>>> my-temp-work

// console.log("URB:  ", x, y, x === y);
console.log("URB:  ", x === y);
// console.log(store.getState());