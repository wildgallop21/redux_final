import React from "react";
import CreateTodo from "../components/CreateTodo";
import Todo from "../components/Todo";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo />
    </div>
  );
};

export default Home;