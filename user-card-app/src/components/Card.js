import React from 'react';
import styled from 'styled-components'

const Card = props => {
    return (
      <CardStyle>
        <img src={props.item['avatar_url']} alt='User avatar'/>
        <h2 style={{display: 'inline-block'}}>{props.item.name}</h2>
      </CardStyle>
    )
}

export default Card; 

const CardStyle = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: lightcoral;
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

