import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Container, Items, Price, Button } from './style';
import { View } from 'react-native';


function Footer({ count }) {
    return (
        <Container>
            <Price>
                R$ 55,69
            </Price>
            <Items>
                itens ({count})
            </Items>
            <AntDesign name="shoppingcart" size={24} color="#fff" />
        </Container>
    )
}

export default Footer