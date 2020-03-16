import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  reducer  from '../../reducers/reducer'
import { Router } from 'react-router-dom'
import {createMemoryHistory} from 'history'

import { render, getByPlaceholderText, getByLabelText, fireEvent } from '@testing-library/react'

import DeckImport from './DeckImport'
import ImportPreview from './ImportPreview/ImportPreview'

// test('DeckImport Renders successfully and a user should see a preview buton', () => {
//     const {getByText} =  render(<DeckImport/>)
//         getByText(/Public/i)
// })


function renderWithRedux(
    
    ui,
    {  store = createStore(reducer) } = {}
  ) {
    return {
        
      ...render(<Provider store={store}>{ui}</Provider>),
      // adding `store` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      store,
    }
  }
  
  test('user should see a radio button that states Public', () => {
    const {  getByText } = renderWithRedux(<DeckImport />)
    expect(getByText(/public/i))
  })

  test('use should see Importing a deck title header when components render ', () => {
      const { getByText } = renderWithRedux(<DeckImport/>)
      expect((getByText(/importing a deck?/i)))
  })
  test('inputs placeholders should appear when component renders',() => {
    const { getByText, getAllByText, getByPlaceholderText } = renderWithRedux(<DeckImport/>)
    expect((getByText(/deck name/i)))
    expect((getAllByText(/icon/i)))
    expect((getByPlaceholderText(/please insert tags/i)))
    expect((getByPlaceholderText(/paste deck import here/i)))
    expect((getByText(/preview deck/i)))
  })
  

//   test('Renders Import preview successfully', () => {
//     const { getByText, rerender } = renderWithRedux( <ImportPreview/>,{wrapper: MemoryRouter})
//     expect(getByText(/create/i))
// })

test('User can see the preview', ()=>{
    const history = createMemoryHistory()
    const{getByText, getAllByText, getByTestId} = renderWithRedux(<Router history={history}><DeckImport/></Router>)
    
    fireEvent.click(getByText(/preview/i))
    expect(getAllByText(/fronts/i))
    expect(getAllByText(/backs/i))
    expect(getAllByText(/updates/i))
    expect(getAllByText(/deletes/i))
    expect(getByText(/creates/i))
    expect(getByText(/discards/i))

    // const previewBtn = getByText(/Preview/i)
    // fireEvent.click(previewBtn)
    
})




