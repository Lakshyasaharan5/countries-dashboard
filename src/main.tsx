import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import DetailView from './components/DetailView.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="/details/:country" element={<DetailView />} />
        </Routes>
    </BrowserRouter>,
)
