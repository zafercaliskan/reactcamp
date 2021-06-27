//Tüm stateleri topladığım yer. Tek bir yerde toplayayım sonra uygulamaya onu ekleyeyim kafasındayım.

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({ //combineReducers birleştirmek demek. 
    //rootReducer üzerinden çalışacağımız için buraya reducer eklemek tüm projede kullanılabilir olur.
    cart: cartReducer//,
    //user: userreducer ... tüm stateleri bir yerde topladık ve ismini kendi uygulamama göre değiştirdim.
})

export default rootReducer; //Yukarıda const kullandığım için böyle yazılır. default çıkartmak için.