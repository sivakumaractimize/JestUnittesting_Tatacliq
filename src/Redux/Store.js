import { createStore} from "redux"

import Reducer from "./Reducer/ProductsReducer";

const Store = createStore(Reducer);

export default Store;