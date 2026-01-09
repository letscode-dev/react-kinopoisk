import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { Provider } from 'react-redux'
import { StyledEngineProvider } from '@mui/material/styles'

import { store } from './store/store'
import { router } from './router'

import '@fontsource/roboto/300.css'
import './styles/styles.css'

const root = document.getElementById('root')
createRoot(root).render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StyledEngineProvider>
)
