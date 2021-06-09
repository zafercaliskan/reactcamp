import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import { Grid, Image } from 'semantic-ui-react'

import Categories from './Categories'
import Navi from './Navi'
import { Route } from 'react-router'
import ProductDetails from '../pages/ProductDetails'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {/*Burada / anasayfayı temsil eder. Ana sayfada ProductList'i gösterir */} 
                        {/*Burada exact vermemizin sebebi /asdasd gibi birşeyde de anasayfayı göstermemesi için tam eşileşme arar.*/}
                        <Route exact path="/" component={ProductList}/> 

                        {/*Bu path alt satıra da uyumlu olduğu için ikisi aynı anda çalışır. O yüzden exac eklemek gerekir.*/}
                        <Route exact path="/products" component={ProductList}/>  

                        {/* :id parametre demek alacağı parametre ismi* name olarak güncelledik. apide name göre getirme olduğu için*/}  
                        <Route path="/products/:name" component={ProductDetails}/>    

                        <Route path="/cart" component={CartDetail}/>       
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}