import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    const history=useHistory()
    //desructer yapıyoruz burada
    const [isAuthenticated, setIsAuthenticated] = useState(true) //default'u ya truedur yada falsedır.
    //state bu 'isAuthenticated', state'i değiştirecek method bu 'setIsAuthenticated', buda (false) initialState.
    function handleSignOut() {
        setIsAuthenticated(false) //bu SignedOut yapacağı için false set ediyoruz. State'i navide değiştirmek gerekiyor.
        //Çıkış yapta bunun çalışması lazım. Yani alt component'e fonksiyon göndermek lazım.
        //Aşağıda signOut={handleSignOut} bu şekilde gönderiyoruz. Sanki SignedIn'in içerisinde signOut diye bir fonksiyon varda oda
        //bunu tetikliyor. Bunlara props(property) diyoruz. 
        history.push("/") //Burada çıkış yapınca anasayfaya atacağız. Navigation historysine ulaşmamı sağlar.
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />

                    <Menu.Menu position='right'>
                        <CartSummary/>
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/> /*isAuthenticated true ise  SignedIn gösterir değilse SignedOut*/}          
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}