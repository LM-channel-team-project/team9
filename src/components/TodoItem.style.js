import styled from "styled-components";

export const Todo = styled.li`
  background: #fff;
  border-left: 8px solid #86d8c9;
  border-radius: 2px;
  -moz-box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 6px 12px rgb(0 0 0 / 5%);
  box-shadow: 0px 6px 12px rgb(0 0 0 / 5%);
  padding: 15px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  width: 500px;
`;

export const TodoContent = styled.div`
  display: block;
`;

export const TodoTitle = styled.h2`
  font-weight: bold;
`;

export const TodoDate = styled.p`
  font-size: 0.8rem;
  color: #7d8994;
  display: inline-block;
`;

export const TodoTag = styled.small`
  // position: absolute;
  background: #66dcec;
  border: 2px solid #fefefe;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 2px 2px rgb(0 0 0 / 10%);
  box-shadow: 0px 2px 2px rgb(0 0 0 / 10%);
  border-radius: 20px;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  width: 60px;
  margin-left: 16px;
  padding: 5px 2px;
  display: flex;
  text-align: center;
  justify-content: space-around;
`;
