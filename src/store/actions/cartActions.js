//Yani sepet ile ilgili aksiyonlar actions klasöründe tutulur. 
//Aksiyon senin reducerlara gönderdiğin operasyonlar. 
//Recuder'da bakıyor yani redux şuna bakıyor gönderilen aksiyon hangi state'in içinde var??
//O zaman ben bunu bir tetkileyeyim diyor. 

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product) {
    //redux bana bir aksiyon yaptğın zaman bana bir obje gönder. 
    return { //Gönderiyorum alsana obje.
        //Bu objenin içinde bu aksiyonun ismi olsun. Ben bileyim neyi çalıştıracağımı. Ona "type" diyoruz.

        type: ADD_TO_CART, //reducerların içerisinde ADD_TO_CART'ın hangi stateleri etkilediğini bulacak.  //*problem var. typo yapmamk için yukarıda sabitle.
        payload: product //Tamam sepete eklemek istiyorsunda ne eklemek istiyorsun. Bana birde payload diye birşey gönder. 
        //Bizim gönderdiğimiz bu aksiyon ile beraber state'i etkilecek veri. Sepete eklenecek ya. Product göndeririz. 
    }
}

export function removeFromCart(product) {
    return { 
        type: REMOVE_FROM_CART, 
        payload: product
    }
}