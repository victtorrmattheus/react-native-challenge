import React from 'react'
import { Container, Content, Title, Score, BContainer, Image, Price, Amount } from './styles'
import { AntDesign, Feather } from '@expo/vector-icons';
import Foto from '../../../../../assets/call-of-duty-infinite-warfare.png'
import { Text } from 'react-native';

function ProductCart() {

    return (
        <Container>
            <Image source={Foto} resizeMode='cover' />
            <Content>
                <Title numberOfLines={2} >
                    Call Of Duty - Infinite Warfare
                </Title>
                <BContainer>
                    <Feather name="star" size={18} color="#e67e22" />
                    <Score>
                        80
                    </Score>
                </BContainer>
                <BContainer>
                    <Price>
                        R$ 49.99
                    </Price>

                </BContainer>

            </Content>

        </Container>
    )

}

export default ProductCart
