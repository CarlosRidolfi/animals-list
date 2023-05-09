import React from 'react'
import { Animal } from '@/lib/animals'
import { AnimalCard } from '@/components/AnimalCard'
import styled from 'styled-components'
import { AddButton } from '@/components/AnimalCard'

const PageWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    max-width: 200px;
  }
`

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  margin-bottom: 10px;
`

const PageTitle = styled.div`
  font-family: 'Cabin Sketch', cursive;
  color: green;
  font-size: 60px;
`

export function AnimalsView ({
  animals
}: {
  animals: Animal[]
}) {
  
  const [value, setValue] = React.useState('')
  const types = ['cow', 'pig', 'sheep'];
  const [animalsArray, setAnimalsArray] = React.useState(animals)
  
  const handleClick = (e: any) => {
    e.preventDefault();
    if (!value) return;

    setAnimalsArray(oldArray => [...oldArray, 
      {
        id: animals.length + 1, 
        type: types[Math.floor(Math.random() * 3)], 
        name: value
      }]);
  }

  return (
    <PageWrapper>
      <CardsWrapper>
        <PageTitle>Animals</PageTitle>
        {animalsArray.map((animal) => (
          <AnimalCard  
            id={animal.id} 
            name={animal.name} 
            type={animal.type}
          />
        ))}
      </CardsWrapper>
      <input
          type="text"
          className="input"
          value={value}
          placeholder="Add a new animal"
          onChange={e => setValue(e.target.value)}
      />
      <AddButton onClick={handleClick}>Add</AddButton>
    </PageWrapper>
  )
}
