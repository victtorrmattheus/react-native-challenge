import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Container, Items, Price } from './style';

function Footer() {
    return (
        <Container>
            <Price>
                R$ 55,69
            </Price>
            <Items>
                itens (5)
            </Items>
            <AntDesign name="shoppingcart" size={24} color="#fff" />
        </Container>
    )
}

export default Footer