import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardList = props => {
    return (
      <CardListContainer>
        {props.data.map(item => <Card item={item}/>)} 
      </CardListContainer>
    )
}

export default CardList;

const CardListContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;