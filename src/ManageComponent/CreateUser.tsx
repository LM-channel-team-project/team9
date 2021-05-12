import React, {useEffect, useState, useRef} from "react";
import {firestore} from "../firebase";


function CreateUser(){
    const[user, setUser] = useState({// 현재 다루고 있는 유저의 정보를 담을 state
        name: "empty",
        age: 0,
        ownTeamId: null,
        id: 1
    });

    const mounted = useRef(false);// 처음 컴포넌트가 렌더링될 때 effect가 실행되지 않도록 해주기 위해 사용하는 변수
    
    useEffect(() => {// useEffect가 실행될 때는 state는 이미 잘 변경돼 있음
        if(!mounted.current){
            mounted.current = true;
        }else{// 여기서 DB에 user의 정보를 올려줌
            firestore.collection("users").add({// 유저 정보를 DB에 올려줌
                name: user.name,
                age: user.age,
                id: user.id,
                ownTeamId: user.ownTeamId
            });
            firestore.collection("generalInfo").doc("userCount").set({
                count: user.id
            });
        }
    });

    function setState(name: string, age: number){// 스테이트에 넣어줘야하는 정보를 전달받고 DB의 정보를 읽어와서 state를 갱신해줌
        let temp;
        let userDoc = firestore.collection("generalInfo").doc("userCount");
        userDoc.get().then((doc: any) => {
            temp = doc.data() || {};
            let userId = temp.count;
            setUser({// 외부의 정보를 받아 DB의 데이터와 함게 state를 갱신해줌
                name: name,
                age: age,
                id: userId + 1,// 1 만큼 더 큰 값을 state에 넣어줘서 새 id를 오름차순으로 할당해줌
                ownTeamId: null
            });
        });
    }

    

    function handleSubmit(e: any){// 제출이 눌렸을 때 2개의 입력에 들어있는 정보를 state에 반영하도록 하는 함수
        e.preventDefault();// 새 페이지로 넘어가지 않도록

        let count = setState(e.target.name.value, e.target.age.value);// userId정보를 밖으로 꺼낼 수 없으므로 외부의 정보를 모두 내부로 보내줌

        
    }

    return (
        //정보를 입력할 수 있는 form을 제공하는 코드
        <form onSubmit={handleSubmit}>
            <br/>
            <label>이름 입력:
                <input type="text" name="name"></input>
            </label>

            <br/>

            <label>나이 입력:
                <input type="text" name="age"></input>
            </label>

            <br/>

            <button type="submit">DB에 추가하기</button>

            <br/>

            이름: {user.name} 나이: {user.age} ID: {user.id}
        </form>
        
        
        
    );
}


export default CreateUser;