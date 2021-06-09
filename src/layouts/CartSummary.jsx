import React from 'react'
import { NavLink } from 'react-router-dom'
import {   Dropdown } from 'semantic-ui-react'
export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Language'>
                <Dropdown.Menu>
                    <Dropdown.Item>Acer</Dropdown.Item>
                    <Dropdown.Item>Asus</Dropdown.Item>
                    <Dropdown.Item>Lenovo</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
                    {/*Semanticde as={NavLink} sen bir NavLinksin. Yani react routerdaki Navlink ile çalış demiş oluyoruz.  */}
                     {/*Semanticde to="/cart" ile nereye gideceğini söylüyoruz. */}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
