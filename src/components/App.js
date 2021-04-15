import React, { useState, useEffect } from "react";
import SolRouter from "components/Router";
import { authService } from "FB";

function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // authService.currentUser); // 로그인 여부 확인 불가

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    }, []);

    return (
        <>
            {init ? <SolRouter isLoggedIn={isLoggedIn} /> : "Initializing‥"}
            <footer>&copy; {new Date().getFullYear()} 9원</footer>
        </>
    );
}

export default App;
