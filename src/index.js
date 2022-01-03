import { bugAdded, bugRemoved, bugResolved, getUnresolvedBugs } from "./store/bugs";
import configureStore from "./store/configureStore";
import { projectAdded } from "./store/projects";

const store = configureStore();

// const unsubscribe = store.subscribe(() => {
//     console.log('store changed!', store.getState());
// })

store.dispatch(projectAdded({ name: 'Project 1' }))
store.dispatch(projectAdded({ name: 'Project 2' }))

store.dispatch(bugAdded({ description: 'Bug 1' }))
store.dispatch(bugAdded({ description: 'Bug 2' }))
store.dispatch(bugAdded({ description: 'Bug 3' }))

// unsubscribe();
// store.dispatch(bugRemoved({ id: 2 }))
store.dispatch(bugResolved({ id: 1 }))

const x = getUnresolvedBugs(store.getState())
const y = getUnresolvedBugs(store.getState())

// console.log("URB:  ", x, y, x === y);
console.log("URB:  ", x === y);
// console.log(store.getState());