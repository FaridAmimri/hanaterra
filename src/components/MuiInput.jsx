/** @format */

import { TextField } from '@mui/material'
import styled from 'styled-components'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: '#eeb30d'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    }
  }
})

function MuiInput({ name, label, value, onChange, error = null, ...other }) {
  return (
    <CssTextField
      className='muiTextField'
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  )
}

export default MuiInput
