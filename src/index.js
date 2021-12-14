import * as actions from "./store/bugs";
import configureStore from "./store/configureStore";
import { projectAdded } from "./store/projects";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log('store changed!', store.getState());
})

store.dispatch(projectAdded({ name: 'Project 1' }))
store.dispatch(projectAdded({ name: 'Project 2' }))

store.dispatch(actions.bugAdded({ description: 'Bug 1' }))
store.dispatch(actions.bugAdded({ description: 'Bug 2' }))
store.dispatch(actions.bugAdded({ description: 'Bug 3' }))

// unsubscribe();
// store.dispatch(actions.bugRemoved({ id: 2 }))
store.dispatch(actions.bugResolved({ id: 1 }))

// console.log(store.getState());