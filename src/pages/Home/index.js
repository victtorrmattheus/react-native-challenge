import React, { useEffect, useState, setState } from 'react'
import { Container, ContentContainer, Divisor, Button } from './styles'
import Product from './components/Product';
import Header from './components/Header'
import Footer from './components/Footer';
import { View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Items from '../../utils/products.json'
import { FlatList } from 'react-native-gesture-handler';
import { useLinkProps } from '@react-navigation/native';

//const navigation = useNavigation()

function Home({ navigation }) {
    let x = 0
    const [count, setCount] = useState(0)
    const countItems = () => {
        x = x + count
        x++
        setCount(x)
        console.log(count)
    }

    const [products, setProducts] = useState([])
    const [firstTime, setFirstTime] = useState(true)
    useEffect(() => {
        if (firstTime) {
            setProducts(Items)
            setFirstTime(false)
        }
        
    }, [products])

    const filter = () => {
        const newData = products.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })
        setProducts([...newData])
    }

    const loadMore = () => {
        setProducts(newData)
        setProducts(products)
    }

    return (

        <Container>

            <Header onPress={() => filter()} />

            <ContentContainer>
                <FlatList
                    data={products}
                    keyExtractor={({ id }) => String(id)}
                    renderItem={({ item }) => <Product product={item} onPress={() => countItems()} /> }
                    ItemSeparatorComponent={() => <Divisor />}
                    refreshing={true}
                    onRefresh={loadMore}
                />
                
                {/*<View>
                        <Button onPress={() => { navigation.navigate('../Cart') }}>
                            <AntDesign name="back" size={24} color="black" />
                        </Button>
                    </View>*/}

                
            </ContentContainer>

            <Footer item={count} />

        </Container >
    )

}
export default Home