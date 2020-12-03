import React from 'react'
import { Container, ContentContainer, Divisor, Button } from './styles'
import Product from './components/Product';
import Header from './components/Header'
import Footer from './components/Footer';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//const navigation = useNavigation()

function Home( {navigation} ) {

    return (
        <Container>

            <Header />
            
            <ContentContainer>


                <Product />
                <Divisor />
                <Product />
                <Divisor />
                <View>
                    <Button onPress={() => {navigation.navigate('Cart')}}>
                        <AntDesign name="back" size={24} color="black" />  
                    </Button>
                </View>


            </ContentContainer>
            
            <Footer />
            
        </Container>
    )

}
export default Home