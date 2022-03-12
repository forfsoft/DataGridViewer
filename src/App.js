import './App.css';
import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material'
import DataGridView from './components/DataGridView'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
          }}
        >
            <DataGridView />
        </Box>
    </ThemeProvider>
  );
}
