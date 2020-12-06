import React, { useState, useEffect } from 'react'
import { Container, Content, Title, Score, BContainer, Image, Price } from './styles'
import { AntDesign, Feather } from '@expo/vector-icons';
import Foto from '../../../../../assets/mortal-kombat-xl.png'
import { TouchableHighlight, TouchableOpacity } from 'react-native'
//import Path from 'path'



function Product({ product, onPress }) {



    //const teste = `../../../../../assets/${product.image}`

    //console.log(typeof(product.image))
    return (
        <Container>
            <Image source={Foto} resizeMode='cover' />

            <Content>
                <Title numberOfLines={2} >
                    {product.name}
                </Title>
                <BContainer>
                    <Feather name="star" size={18} color="#e67e22" />
                    <Score>
                        {product.score}
                    </Score>
                </BContainer>
                <BContainer>
                    <Price>
                        R$ {product.price}
                    </Price>
                    <TouchableOpacity onPress={() => {onPress()}} >
                        <AntDesign name="shoppingcart" size={24} color="#16a085" />
                    </TouchableOpacity>
                </BContainer>

            </Content>

        </Container>
    )

}

export default Product
