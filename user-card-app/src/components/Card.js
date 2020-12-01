import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

class Card extends React.Component {

    render() {
        return (
        <CardContainer>
            <img src={this.props.item['avatar_url']} alt='User avatar'/>
            <h2 style={{display: 'inline-block'}}>{this.props.item.name}</h2>
        </CardContainer>
        )
    }
}

export default Card; 

const CardContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 10px;

    border: thin black solid;
    
    img {
        width: 5rem;
        display: inline-block;
        border-radius: 50%;
        border: thick darkblue solid;
    }

    h2 {
        font-size: 3rem;
        font-weight: bold;
    }

`;

