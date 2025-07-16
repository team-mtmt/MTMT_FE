import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle.style";
import { Home } from "./pages/home";
import { ThemeProvider } from 'styled-components';
import { theme } from './style/themes';
import { Matching } from "./pages/matching";
import { NoChatting } from "./pages/chatting/noChatting";
import { Profile } from "./pages/profile";
import { Chatting } from "./pages/chatting";

export const Router = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/matching" element={<Matching />}/>
                    <Route path="/noChatting" element={<NoChatting />}/>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/chatting" element={<Chatting />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
        
    )
}