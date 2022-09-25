import styled, { keyframes } from 'styled-components'
import { ChevronDownIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef, useState } from 'react';

import useTrottle from '../../useThrottle'

const Some = styled.div`
        font-size: 2rem;
        text-align: center;
        color: blue;
        position: fixed;
        right: 0px;
        bottom: 0px;
        width:60px;
        height: 60px;
        border-radius: 50%;
        background: blue;
        color: wheat;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

const chevAnimation = keyframes`
0% {transform: scale(30%) rotate(290deg);}
30% {transform: scale(60%) rotate(90deg);}
100% {transform: scale(100%) rotate(0deg);}
`;

const bubbleAnimation = keyframes`
0% {transform: scale(0) rotate(90deg);}
30% {transform: scale(30%) rotate(60deg);}
100% {transform: scale(100%) rotate(0deg);}
`;

const ChevronAnimation = styled.div`
    animation-name: ${chevAnimation};
    animation-duration: 200ms;
    animation-iteration-count: 1;   
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const BubbleAnimation = styled.div`
    animation-name: ${bubbleAnimation};
    animation-duration: 200ms;
    animation-iteration-count: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


function Launcher() {
    const initialState = { button: false };
    const [state, setState] = useState(initialState)
    const firstRender = useRef();

    useEffect(() => {
        if (!firstRender.current) {
            firstRender.current = true;
            return;
        }

        if (window.parent) {
            if (window.parent.PPMessage) {
                window.parent.PPMessage.launch(state);
            }
        }
    }, [state]);

    const onclick = useTrottle(e => {
        setState({ button: !state.button })
    }, 500);

    return (
        <Some onClick={onclick}>
            {!state.button && <BubbleAnimation><ChatBubbleOvalLeftIcon style={{ width: "30px" }} /></BubbleAnimation>}
            {state.button && <ChevronAnimation><ChevronDownIcon style={{ width: "30px" }} /> </ChevronAnimation>}
        </Some>
    )
}

export default Launcher;