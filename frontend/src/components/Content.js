import React from 'react'
import Container from "react-bootstrap/Container";
import Card from './Card'

export const Content = () => {
    return (
        <Container>
        <div className='content_container'>
            <Card/>
        </div>
        </Container>
    )
}
