import React, { useState } from "react";
import { authService, firebaseInstance } from "FB";

// export default () => <span>Auth</span>

// import
const Auth = () => {
    // hook
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        // input이 변경되는 이벤트 발생
        const {
            target: { name, value },
        } = event;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault(); // 이벤트 발생 시 새로고침 방지

        try {
            let data;

            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;

        let provider;
        if (name === "gg") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "gh") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }

        const data = await authService.signInWithPopup(provider);
        //console.log(data);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    required
                    value={email} // 키보드로 입력 받음
                    onChange={onChange} // 키를 누를 때마다(값이 바뀔 때마다) 호출하여 입력값을 저장
                />
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} />
                <input type="submit" value={newAccount ? "Create Account" : "Sign in"} />
                <p>{error}</p>
            </form>
            <button onClick={toggleAccount}>{newAccount ? "Sign in." : "Create Account."}</button>
            <div>
                <p>
                    <button onClick={onSocialClick} name="gg">
                        &nbsp;Continue with Google
                    </button>
                    <button onClick={onSocialClick} name="gh">
                        &nbsp;Continue with Github
                    </button>
                </p>
            </div>
        </div>
    );
};
export default Auth;
