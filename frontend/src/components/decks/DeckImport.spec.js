import React from 'react'

import { render } from '@testing-library/react'

import DeckImport from './DeckImport'

test('DeckImport Renders successfully and a user should see a preview buton', () => {
    const wrapper = render(<DeckImport/>)
    wrapper.getByText(/preview/i)
})
