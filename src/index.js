
import { bugAdded, bugResolved, bugRemoved, getUnresolvedBugs, bugAssignedToUser, getBugsByUser } from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";
import { userAdded } from "./store/users";
import configureStore from "./store/configureStore";
// import { projectAdded } from "./store/projects";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log('store changed!', store.getState());
})

store.dispatch(userAdded({ name: 'user 1' }))
store.dispatch(userAdded({ name: 'user 2' }))
store.dispatch(projectAdded({ name: 'project 1' }))
store.dispatch(projectAdded({ name: 'project 2' }))
store.dispatch(projectAdded({ name: 'project 3' }))
store.dispatch(projectRemoved({ id: 2 }))
store.dispatch(bugAdded({ description: 'Bug 1' }))
store.dispatch(bugAdded({ description: 'Bug 2' }))
store.dispatch(bugAdded({ description: 'Bug 3' }))
store.dispatch(bugAdded({ description: 'Bug 4' }))
store.dispatch(bugAdded({ description: 'Bug 5' }))
store.dispatch(bugAdded({ description: 'Bug 6' }))
// unsubscribe();
store.dispatch(bugResolved({ id: 1 }))
store.dispatch(bugRemoved({ id: 2 }))
store.dispatch(bugResolved({ id: 5 }))

store.dispatch(bugAssignedToUser({ bugId: 3, userId: 1 }))
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }))
store.dispatch(bugAssignedToUser({ bugId: 5, userId: 1 }))

const unresolvedBugs = getUnresolvedBugs(store.getState())
console.log(unresolvedBugs);

const bugAssignedToUser1 = getBugsByUser(1)(store.getState())
console.log(bugAssignedToUser1);
// console.log("URB:  ", x, y, x === y);
// console.log("URB:  ", x === y);
// console.log(store.getState());