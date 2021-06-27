import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'

export default function CartSummary() {

    const { cartItems } = useSelector(state => state.cart) //state'deki cartItems'ı çekeceğiz. Redux'a abone olduk.

    return (
        <div>
            <Dropdown item text='sepetiniz'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem) => (
                            <Dropdown.Item key={cartItem.product.id}>
                                {cartItem.product.productName}
                                <Label>{cartItem.quantity}</Label>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
                    {/*Semanticde as={NavLink} sen bir NavLinksin. Yani react routerdaki Navlink ile çalış demiş oluyoruz.  */}
                    {/*Semanticde to="/cart" ile nereye gideceğini söylüyoruz. */}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}