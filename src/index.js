import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'src/globalStyles'

import App from './App'
import theme from './themes'
import './i18n'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#dba191',
          fontFamily: "'Shantell Sans', sans-serif",
        },
      }}
    >
      <App />
    </ConfigProvider>
    <GlobalStyle />
  </ThemeProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
