import React from "react";
import {
  Todo,
  TodoContent,
  TodoDate,
  TodoTag,
  TodoTitle,
} from "./TodoItem.style";

const TodoItem = () => {
  return (
    <>
      <Todo>
        <TodoContent>
          <TodoTitle>알고 부시기</TodoTitle>
          <TodoDate>21/04/23</TodoDate>
        </TodoContent>
        <TodoTag>PS</TodoTag>
      </Todo>
      <Todo>
        <TodoContent>
          <TodoTitle>React</TodoTitle>
          <TodoDate>19/04/23</TodoDate>
        </TodoContent>
        <TodoTag>CS</TodoTag>
      </Todo>
      <Todo>
        <TodoContent>
          <TodoTitle>Vanilla JS</TodoTitle>
          <TodoDate>21/04/23</TodoDate>
        </TodoContent>
        <TodoTag>JS</TodoTag>
      </Todo>
    </>
  );
};

export default TodoItem;
