import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes.tsx'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from './providers/theme-provider.tsx'
 import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
    </ThemeProvider>
  </StrictMode>,
)
