import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    width: 900px;
    border: 1px solid black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 20px;
    font-family: 'Cabin Sketch', cursive;

    @media screen and (max-width: 900px){
        width: 320px;
    }

    .hidden {
        display: none;
    }

    :hover {
        .hidden {
            display: inline !important;
        }
    }
`

const CardTitle = styled.h2`
    color: black;
    font-size: 24px;
`

const ButtonsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
`

const NoiseButton = styled.button`
    max-width: 150px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border: 2px solid black;
    box-shadow: 1px 1px 1px;
    background-color: lightgreen;
    transition: all ease .5s;
    cursor: pointer;

    :hover {
        background-color: #b1b1db;
    }
`

const DeleteButton = styled(NoiseButton)`
    background-color: tomato;

    :hover {
        background-color: tomato;
    }
`

export const AddButton = styled(NoiseButton)`
    background-color: white;
    font-family: 'Cabin Sketch', cursive;
    margin-top: 10px;
`

type AnimalCardProps = {
    name: string;
    type: string;
    id: number;
    handleDelete: any;
    handleSound: any;
}

export const AnimalCard = ({name, id, type, handleDelete, handleSound}: AnimalCardProps) => {

    return (
        <CardWrapper key={id}>
            <CardTitle>{name} the {type}</CardTitle>
            <ButtonsDiv>
                <NoiseButton onClick={handleSound}>Make Noise</NoiseButton>
                <DeleteButton className='hidden' onClick={handleDelete}>Delete</DeleteButton>
            </ButtonsDiv>
        </CardWrapper>
    )
}
