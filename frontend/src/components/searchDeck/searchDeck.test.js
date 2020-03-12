import React from 'react'
import { render, fireEvent, getByText, getByPlaceholderText} from '@testing-library/react'
// import {waitForElement, wait, queryAllByText, queryByText} from '@testing-library/dom'
import SearchDeck from './searchDeck';



  test('renders deckSearch component successfully', () => {
      const {getByText, getByPlaceholderText } = render(<SearchDeck/>)
      expect(getByText(/find/i))
      expect(getByPlaceholderText(/search public decks/i))

  })

  test('renders filters and decks onClick', async () => {
    const {getByText, getAllByText, getByPlaceholderText} = render(<SearchDeck />)
    const input = getByPlaceholderText(/search public decks/i)
    const testText = 'math';
    fireEvent.change(input, {target: testText})
    const searchClick = () => {
      fireEvent.click(getByText(/find/i))
    }
    searchClick()
    await expect(input.value).toBe('')
  })

  

  test('onChange input test',  async () => {
    const  { getByLabelText, getByTestId } = render(<SearchDeck />)
    const input = getByLabelText('search-subject')
    
    expect(input.value).toBe('')
    fireEvent.change(input, { target: {value: "math"}})
    expect(input.value).toBe("math")
   
  }) 

 