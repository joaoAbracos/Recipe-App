import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ListRecipe from './ListRecipe';
import FormRecipe from './FormRecipe';
let CreateRecipeRedux = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <FormRecipe />
                </Col>
                <Col>
                    <ListRecipe />
                </Col>
            </Row>

        </Container>
    )
};
export default CreateRecipeRedux;
