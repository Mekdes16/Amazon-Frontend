import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DataProvider } from './Components/DataProvider/DataProvider.jsx'
import reducer,{initialState}  from './Utility/reducer'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <DataProvider reducer={reducer} initialState={initialState}>
            <App/>
        </DataProvider>
  </StrictMode>
)
