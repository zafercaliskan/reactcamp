import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export function configureStore() {
    return createStore(rootReducer, devToolsEnhancer())
    
}
// devToolsEnhancer() bu redux devtools'u kullanmamıza yardım edecek.