import styled from 'styled-components'

export const Container = styled.View`
    flex-direction: row;
    padding: 10px; 
    background-color: #fff; 
    border-radius: 5px; 
`

export const Content = styled.View`
    flex: 1;
    justify-content: space-around;
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: 700;
`
export const BContainer = styled.View`
    flex-direction: row; 
    align-items: center;
`

export const Score = styled.Text`
    font-size: 14px;
    font-weight: 500; 
    margin-left: 6px;
`

export const Image = styled.Image`
    width: 100px;
    height: 100px; 
`

export const Price = styled.Text`
    font-size: 16px; 
    font-weight: 500; 
    color: #16a085;
    flex: 1;
`

export const Amount = styled.Text`
    font-size: 16px;
    color: #fff;
`