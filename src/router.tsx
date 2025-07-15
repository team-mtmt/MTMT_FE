import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle.style";
import { Home } from "./pages/home";
import { ThemeProvider } from 'styled-components';
import { theme } from './style/themes';
import { Matching } from "./pages/matching";

export const Router = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/matching" element={<Matching />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
        
    )
}