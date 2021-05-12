import React, {useState, useEffect, useCallback} from 'react';
import {firestore} from "../firebase";

function CreateTeam(){

    return(
        <div>
            <form>
                <label>
                    팀 이름 입력:
                    <input type='text' name='teamName'></input>
                </label>
                <label>
                    <input type="submit" value="팀 생성하기"/>
                </label>
            </form>
        </div>
    );
}

export default CreateTeam;