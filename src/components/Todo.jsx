import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import MyBtn from "../elements/Button";

const Todo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function DeleteHandler(id) {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  }
  function DoneHandler(id) {
    dispatch(
      toggleStatusTodo({
        id: id,
      })
    );
  }

  return (
    <StBodyLayout>
      <h3>Working..⏳</h3>
      <StTodos>
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <StTodo key={todo.id}>
                <DetailBtn
                  onClick={() => {
                    navigate(`/detail/${todo.id}`);
                  }}
                >
                  상세보기
                </DetailBtn>
                <h3>{todo.title}</h3>
                <div>{todo.content}</div>
                <StDiv>
                  <MyBtn onClick={() => DeleteHandler(todo.id)}>삭제</MyBtn>
                  <TwoBtn onClick={() => DoneHandler(todo.id)}>완료</TwoBtn>
                </StDiv>
              </StTodo>
            );
          } else {
            return null;
          }
        })}
      </StTodos>
      <div>
        <h3>Done..!😆</h3>
        <StTodos>
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <StTodo key={todo.id}>
                  <DetailBtn
                    onClick={() => {
                      navigate(`/detail/${todo.id}`);
                    }}
                  >
                    상세보기
                  </DetailBtn>
                  <h3>{todo.title}</h3>
                  <div>{todo.content}</div>
                  <StDiv>
                    <MyBtn onClick={() => DeleteHandler(todo.id)}>삭제</MyBtn>
                    <TwoBtn onClick={() => DoneHandler(todo.id)}>취소</TwoBtn>
                  </StDiv>
                </StTodo>
              );
            } else {
              return null;
            }
          })}
        </StTodos>
      </div>
    </StBodyLayout>
  );
};

export default Todo;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 0px 0px 10px 0px;
`;
const StTodo = styled.div`
  border: 3px solid #27ceda;
  background-color: transparent;
  width: 20%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 0 24px;
  border-radius: 12px;
`;

const StDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 9px;
`;

const DetailBtn = styled.button`
  width: 70px;
  height: 20px;
  padding: 3px;
  margin: 20px 0px 0px 0px;
  border: none;
  cursor: pointer;
  background-color: white;
`;

const TwoBtn = styled.button`
  padding: 5px;
  width: 110px;
  border: 1px solid blue;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px gray;
  background-color: transparent;
  cursor: pointer;
`;

const StBodyLayout = styled.div`
  min-width: 800px;
  max-width: 1200px;
  width: 1200px;
  margin: auto;
`;