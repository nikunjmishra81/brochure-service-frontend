import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/system'
import * as React from 'react'

const CustomCSSTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#009347'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#009347'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#009347'
    },
    '&:hover fieldset': {
      borderColor: '#009347'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#009347'
    }
  }
})

export default function InputWithIcon({ component: Component, componentWidth = '80%', label, ...props }) {
  return (
    <Box width={'100%'} sx={{ '& > :not(style)': { m: 1 } }}>
      <CustomCSSTextField
        style={{ width: componentWidth }}
        label={label}
        placeholder={`Enter ${label} here`}
        {...props}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Component />
            </InputAdornment>
          )
        }}
        variant="standard"
      />
    </Box>
  )
}
