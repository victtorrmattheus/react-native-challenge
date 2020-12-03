import React from 'react'
import Header from './components/Header'
import ProductCart from './components/ProductCart'
import { Container, ContentContainer, Divisor } from './styles'
import Footer from './components/Footer'



function Cart() {
    return (
        <Container>

            <Header />

            <ContentContainer>

                <ProductCart />
                <Divisor />
                <ProductCart />

            </ContentContainer>

            <Footer />
            
        </Container>
    )
}

export default Cart