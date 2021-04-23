import styled from "styled-components";
import TodoList from "./components/TodoContainer/TodoList";
import Calendar from "./components/CalendarContainer/Calendar";

const CalendarTodo = styled.div`
  display: flex;
  width: 100%;
`;

const App = () => {
  return (
    <div className="App">
      <CalendarTodo>
        <Calendar />
        <TodoList />
      </CalendarTodo>
    </div>
  );
};

export default App;
