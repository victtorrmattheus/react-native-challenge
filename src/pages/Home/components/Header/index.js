import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Container, Title, Icon, Icon_Container, Icon_Container_Touch } from './styles';
import { TouchableHighlight, TouchableOpacity } from 'react-native'


function Header({ onPress }) {
    return (
        <Container>
            <Title>
                Games Store
            </Title>
            <Icon_Container>
                <Icon />
                <TouchableOpacity  onPress={() => onPress()} >
                    <FontAwesome name="filter" size={24} color="#fff" />
                </TouchableOpacity>
            </Icon_Container>
        </Container>
    )
}

export default Header