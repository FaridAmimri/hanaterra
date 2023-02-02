/** @format */

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f09b73',
  '&:hover': {
    backgroundColor: '#eeb30d'
  }
}))

function MuiButton({ text }) {
  return (
    <div>
      <ColorButton variant='contained'>{text}</ColorButton>
    </div>
  )
}

export default MuiButton
