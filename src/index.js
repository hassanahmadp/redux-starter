
import { bugAdded, bugRemoved, bugResolved } from "./actions";
import store from "./store";

// const unsubscribe = store.subscribe(() => {
//   console.log('store changed!', store.getState());
// })

store.dispatch(bugAdded('this is bug 1'))

// unsubscribe();

// store.dispatch(bugRemoved(2))
store.dispatch(bugResolved(1))

console.log(store.getState());