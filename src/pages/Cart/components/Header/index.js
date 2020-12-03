import React from 'react'
import { Container, Icon, Icon_Container, Title} from './styles'
import { AntDesign } from '@expo/vector-icons';

function Header() {
    return (
        <Container>
            <Title>
                Carrinho
            </Title>
            <Icon_Container>
                <Icon />
                <AntDesign name="back" size={24} color="#fff" />
            </Icon_Container>

        </Container>
    )
}

export default Header