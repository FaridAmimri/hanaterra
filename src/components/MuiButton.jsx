/** @format */

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

import React from 'react'

function MuiButton() {
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#f09b73',
    '&:hover': {
      backgroundColor: '#eeb30d'
    }
  }))
  return (
    <div>
      <ColorButton variant='contained'>En savoir plus</ColorButton>
    </div>
  )
}

export default MuiButton
