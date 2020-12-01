import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardList = props => {
    return (
      <CardListContainer>
        {props.userList.map(item => <Card item={item}/>)} 
      </CardListContainer>
    )
}

export default CardList;

const CardListContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column wrap;
    align-items: center;
`;