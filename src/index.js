
import { bugAdded, bugResolved, bugRemoved } from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";
import configureStore from "./store/configureStore";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log('store changed!', store.getState());
})

store.dispatch(projectAdded({ name: 'project 1' }))
store.dispatch(projectAdded({ name: 'project 2' }))
store.dispatch(projectAdded({ name: 'project 3' }))
store.dispatch(projectRemoved({ id: 2 }))
store.dispatch(bugAdded({ description: 'Bug 1' }))
store.dispatch(bugAdded({ description: 'Bug 2' }))
store.dispatch(bugAdded({ description: 'Bug 3' }))

// unsubscribe();

store.dispatch(bugRemoved({ id: 2 }))
store.dispatch(bugResolved({ id: 1 }))

// console.log(store.getState());