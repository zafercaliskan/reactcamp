import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems //sağ taraf bir yerde tanımlı değilken. initialValues oluşturmadan burada da yazabilirdim ama uygulamanın başlangıç değerlerini
    //özellikle büyük bir projede gidip kodların içerisinde boğulmadan klasörün içerisinde güncellemenizi yaparız.  
}

//default ifadesini yoksa {} içinde import edilir. default olanlar direk yazılır. default örneği.:import ProductService from "../services/productService";
export default function cartReducer(state = initialState, { type, payload }) { //reducer sepetin son halini tutuğumuz yer. 
    //Neye göre gönderdiğimiz aksiyona göre son hali burası.
    //Bir obje gelecek "{ type, payload }" type ve payload değerleri olacak. Böyle bir veri gönderilecek.

    switch (type) { //Gönderilecek type göre state'i değiştirmemiz gerekli. Bu redux patterni. 
        case ADD_TO_CART: //Sepette varsa +1 artır yoksa ekle.
            let product = state.cartItems.find(c => c.product.id === payload.id) //statedeki cart itemler içinde bul.
            if (product) { //product varsa
                product.quantity++; //quantity bir bir artar arkaplanda da eklenir fakat ekrna güncellenmez. Ekran güncellenmesi için referansın değişmesi gerekir.
                return {
                    ...state //newlemek gibi yeni obje oluşturur. //spread operatörü içindeki objeleri ayrırarak yeni bir nesne olarak göndürür.
                };
            } else {
                return {
                    ...state, //yazmasakda olur. carditemsda birden fazla itemde olabilir. o yüzden yazıyoruz.
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }] //burada yeni bir array oluşturuyoruz. 
                };
            }

        case REMOVE_FROM_CART:
            return {
                ...state, //mevcut cartitemlar gitmemesi için
                cartItems: state.cartItems.filter(c => c.product.id !== payload.id) //silecek olduğumu filterlemez. Yep yeni bir array oluştururuz. 
                //filter yeni referans oluşturur.
            };

        default:
            return state;
    }
}