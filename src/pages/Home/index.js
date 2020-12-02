import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container } from './styles'
import { FontAwesome, AntDesign, Feather } from '@expo/vector-icons';
import Product from './components/Product';

function Home() {

    return (
        <Container>
            <View style={{ backgroundColor: '#2c3e50', paddingVertical: 15, justifyContent: 'center', paddingHorizontal: 20, flexDirection: 'row' }}>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#fff', textAlign: 'center', position: 'absolute', alignSelf: 'center' }}>
                    Games Store
                </Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }} />
                    <FontAwesome name="filter" size={24} color="#fff" />
                </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#ecf0f1' }}>
                
                <View style={{ height:10 }} />
                <Product />
                <Product />
                <Product />
                <Product />


            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center', backgroundColor: '#16a085', flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontWeight: '600', marginRight: 6, }}>
                    R$ 55,69
                </Text>
                <Text style={{ color: '#fff', fontWeight: '600', marginRight: 6, flex: 1, textAlign: 'center' }}>
                    itens (5)
                </Text>
                <AntDesign name="shoppingcart" size={24} color="#fff" />
            </View>
        </Container>
    )

}
export default Home