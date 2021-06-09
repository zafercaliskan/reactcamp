import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn(props) { //Burada props olarak aldık.
    //onClick={props.signOut} ile çıkış yapa tıklandığında navideki handleSignOut'u tetiklemiş oluruz.
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://cdn.discordapp.com/attachments/846995157563211806/852272554478665748/193321435_4135397806529556_7464187137182072788_n.jpg" />
                <Dropdown pointing="top left" text="Zafer">                                  
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />                    
                    </Dropdown.Menu>  
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
