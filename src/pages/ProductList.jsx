import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function ProductList() {

    const dispatch = useDispatch() //Aksiyonlara abone olmak. Hook. useDispatch ne demek?: 
    //Aksiyonlarımızı fonksiyonlarımı çağırmak için dispacth ifasesi kullanırız. 

    //desructre
    const [products, setProducts] = useState([])
    //licecycle hook react yaşam döngüsüne müdahale etmemizi sağlar.
    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.data))
    }, []) //Boş array atıyoruz. Aksi taktirde yine çalışır fakat sürekli istek atar.
    //Nedeni de şu: React'in yaşam döngüsü için bir nesnenin her değişikliğe uğradığında yeniden render edilmesini istersek
    //koyduğumuzun arrayin içerisine koyarak takibini yapabiliyoruz. Aksi taktirde sürekli elemanlar değiştiğinde sürekli istek atar.

    const handleAddToCart = (product) => { //değişken oluştur değişkene fonksiyon ata. 
        dispatch(addToCart(product)); //addToCart aksiyonunu çağıracağız.
        toast.success(`${product.productName} sepete eklendi!`)
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {products.map((product) => (
                        <Table.Row key={product.id}>
                            {/*Altgr+ , virgül ile ` ` bu işareti koyarız. ${} yaptıktan sonra işerisine kod yazabiliriz. */}
                            <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
                            <Table.Cell>{product.unitPrice}</Table.Cell>
                            <Table.Cell>{product.unitsInStock}</Table.Cell>
                            <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                            <Table.Cell>{product.category.categoryName}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={()=>handleAddToCart(product) /* Direk fonk. çalıştırma fonk ata*/}>Sepete ekle</Button> 
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="3">
                            <Menu floated="right" pagination>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron left" />
                                </Menu.Item>
                                <Menu.Item as="a">1</Menu.Item>
                                <Menu.Item as="a">2</Menu.Item>
                                <Menu.Item as="a">3</Menu.Item>
                                <Menu.Item as="a">4</Menu.Item>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron right" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
