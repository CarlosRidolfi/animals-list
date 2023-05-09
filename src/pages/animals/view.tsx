import React, { useContext } from 'react'
import { Animal, AnimalsContext } from '@/lib/animals'
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
  const types = ['cow', 'duck', 'sheep'];
  const [animalsArray, setAnimalsArray] = React.useState(animals)
  const [cowAudio] = React.useState(typeof Audio !== "undefined" && new Audio("http://www.animal-sounds.org/farm/Cow%20animals055.wav"));
  const [duckAudio] = React.useState(typeof Audio !== "undefined" && new Audio("http://www.animal-sounds.org/farm/Duck-quacking%20animals038.wav"));
  const [sheepAudio] = React.useState(typeof Audio !== "undefined" && new Audio("http://www.animal-sounds.org/farm/Sheep%20-%20ewe%20animals112.wav"));
  
  const handleClick = (e: any) => {
    e.preventDefault();
    if (!value) return;

    setAnimalsArray(oldArray => [...oldArray, 
      {
        id: animalsArray.length + 1, 
        type: types[Math.floor(Math.random() * 3)], 
        name: value
      }]);
  }

  const handleDelete = (id: any) => {
    console.log('id', id);
    const newAnimalsArray = animalsArray.filter((line) => line.id !== id);
    setAnimalsArray(newAnimalsArray);
  }

  const handleSound = (type: string) => {
    if (type === 'duck')
      duckAudio.play()
    if (type === 'cow')
      cowAudio.play()
    if (type === 'sheep')
      sheepAudio.play()
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
            handleDelete={() => handleDelete(animal.id)}
            handleSound={() => handleSound(animal.type)}
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
