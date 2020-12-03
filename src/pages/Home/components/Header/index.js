import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Container, Title, Icon, Icon_Container } from './styles';

function Header() {
    return (
        <Container>
            <Title>
                Games Store
            </Title>
            <Icon_Container>
                <Icon />
                <FontAwesome name="filter" size={24} color="#fff" />
            </Icon_Container>
        </Container>
    )
}

export default Header