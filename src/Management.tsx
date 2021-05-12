import React, {useState, useEffect} from 'react';
import CreateUser from "./ManageComponent/CreateUser";

// 기본적인 team 관리를 하도록 하는 컴포넌트
function Management() {

  

  return(
    <div>
      <CreateUser></CreateUser>
    </div>
  );
}

export default Management;