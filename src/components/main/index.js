import React, { } from 'react'
import styled, { keyframes } from 'styled-components'

const openAnimation = keyframes`
0% { height: 0px; min-height: 0px; max-height: 0px; min-width: 0px; max-width: 0px; width: 0px;}
30% { height: 30%; min-height: 30%; max-height: 30%; min-width: 30%; max-width: 30%; width: 30%;}
100% { height: 100%; min-height: 100%;  max-height: 100%; min-width:100%;  max-width:100%;  width:100%;}
`
const closeAnimation = keyframes`
0% { height: 100%; min-height: 100%;  max-height: 100%; min-width:100%;  max-width:100%;  width:100%;}
30% { height: 70%; min-height: 70%; max-height: 70%; min-width: 70%; max-width: 70%; width: 70%;}
100% { height: 0px; min-height: 0px; max-height: 0px; min-width: 0px; max-width: 0px; width: 0px;}
`


const Bit = styled.h1`
    font-weight: 800;
    font-size: 29px;
    color: blue;
`;

const Fixed = styled.div`
    position: fixed;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    bottom: 0px;
    right: 0px;

    max-width:0px;
    width:0px;
    min-width:0px;
    
    height:0px;
    max-height:0px;
    min-height:0px;

    border: 16px solid;
    
    animation-duration: 500ms;
    animation-iteration-count: 1;

`;

const OpenFixed = styled(Fixed)`
    animation-name: ${props => props.open? props.open === "OPEN"? openAnimation : closeAnimation:null };
    max-width: ${props => props.open? props.open === "OPEN"? "100%" : "0px": "0px" };
    min-width: ${props => props.open? props.open === "OPEN"? "100%" : "0px": "0px" };
    width: ${props => props.open? props.open === "OPEN"? "100%" : "0px": "0px" };
    max-height: ${props => props.open? props.open === "OPEN"? "100%" : "0px": "0px" };
    min-height: ${props => props.open? props.open === "OPEN"? "100%" : "0px": "0px" };
    height: ${props => props.open? props.open === "OPEN"? "100%" : "0px": "0px" };
`;


function MC(props) {
    const { open } = props;
    return (
        <OpenFixed open={open}>
            <p style={{color: 'red'}}>Testing to see if my component renders!</p>
            <Bit>
                Hello world! 1111
            </Bit>
        </OpenFixed>
    )
}

export default MC;