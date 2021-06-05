import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import { Grid, Image } from 'semantic-ui-react'

import Categories from './Categories'
import Navi from './Navi'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <ProductList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}