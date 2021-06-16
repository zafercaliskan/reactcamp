import React from 'react'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'

import Categories from './Categories'

import { Route } from 'react-router'
import ProductDetails from '../pages/ProductDetails'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
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