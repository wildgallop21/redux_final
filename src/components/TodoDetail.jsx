import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MyBtn from "../elements/Button";

const TodoDetail = () => {
  const todos = useSelector((state) => state.todos.todos);
  const param = useParams();
  const navigate = useNavigate();
  console.log("값:", param);

  return (
    <StDetailLayout>
      <StDetailHeader>
        <div>{`ID: ` + param.id}</div>
        <MyBtn
          onClick={() => {
            navigate("/");
          }}
        >
          🏠홈으로
        </MyBtn>
      </StDetailHeader>
      <h2>
        {todos.map((todo) => {
          if (param.id == todo.id) {
            return todo.title;
          }
        })}
      </h2>
      <p>
        {todos.map((todo) => {
          if (param.id == todo.id) {
            return todo.content;
          } else {
            return null;
          }
        })}
      </p>
    </StDetailLayout>
  );
};

export default TodoDetail;

const StDetailLayout = styled.div`
  width: 500px;
  height: 500px;
  border: 3px solid transparent;
  border-radius: 20px;
  box-shadow: 0px 0px 3px 3px lightblue;
  margin: 50px auto;
  padding: 30px;
`;

const StDetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;