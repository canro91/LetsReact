import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import headshot from '../assets/headshot.png';

const Styles = styled.div`
    .jumbotron {
        background: url(${headshot}) no-repeat;
        height:300px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        opacity: 0.6;
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        text-align: right;
    }
`;

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay">
                    <Container>
                        <h1>D'ou!</h1>
                        <h2>Operator! Give Me The Number For 911!</h2>
                    </Container>
                </div>

            </Jumbo>
        </Styles>
    );
}

export default Jumbotron;