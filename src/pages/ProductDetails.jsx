import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductDetails() {
    let { name } = useParams() //parametreleri obje olarak veriyor. Yine desructer işlemi yapacağız. 
    //{id:id} aslında ama iki taraf aynıysa yazma 1 kez yazabilirsin.

    const [product, setProduct] = useState({}) //boş değeri boş bir obje array değil!!!
    //licecycle hook react yaşam döngüsüne müdahale etmemizi sağlar.
    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductName(name).then(result => setProduct(result.data.data)) //name ile parametre geçiyoruz.
    },[]) 

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg'/>
                        <Card.Header>{product.productName}</Card.Header>
                        {/* <Card.Meta>{product.category.categoryName}</Card.Meta> */}
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>Approve</Button>
                            <Button basic color='red'>Decline</Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
