
import * as actions from "./store/bugs";
import configureStore from "./store/configureStore";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log('store changed!', store.getState());
})

store.dispatch(actions.bugAdded('Bug 1'))
store.dispatch(actions.bugAdded('Bug 2'))
store.dispatch(actions.bugAdded('Bug 3'))

// unsubscribe();

store.dispatch(actions.bugRemoved(2))
store.dispatch(actions.bugResolved(1))

// console.log(store.getState());