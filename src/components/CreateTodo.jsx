import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";
import MyBtn from "../elements/Button";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  function titleOnChangeHandler(e) {
    setTitle(e.target.value);
  }

  function contentOnChangeHandler(e) {
    setContent(e.target.value);
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    if (title === "" || content === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    // 위 2개 중 하나만 남아도?
    // 빈칸일때 제출 안되는 기능 하나더

    dispatch(
      addTodo({
        id: Date.now(),
        title: title,
        content: content,
        isDone: false,
      })
    );

    setTitle("");
    setContent("");
  }

  return (
    <StFormContainer>
      <StHeader>
        <span>My Todo List</span>
        <span>React</span>
      </StHeader>
      <div>
        <StHeader2>
          <StDiv>
            <div>
              제목{" :  "}
              {/* 제목 :  */}
              <InputBox1
                type="text"
                value={title}
                onChange={titleOnChangeHandler}
              ></InputBox1>
            </div>
            <span>
              내용{" : "}
              <InputBox2
                type="text"
                value={content}
                onChange={contentOnChangeHandler}
              ></InputBox2>
            </span>
          </StDiv>

          <MyBtn onClick={onSubmitHandler}>추가하기</MyBtn>
        </StHeader2>
      </div>
    </StFormContainer>
  );
};

export default CreateTodo;

const StFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 30px;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 800px;
  max-width: 1200px;
  width: 1200px;
  margin: 0px auto;
  height: 30px;
  box-shadow: 0px 0px 5px gray;
  padding: 10px 20px 10px 20px;
  font-weight: bold;
`;

const StHeader2 = styled.div`
  padding: 10px 20px 10px 20px;
  min-width: 800px;
  max-width: 1200px;
  width: 1200px;
  margin: auto;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: lightsteelblue;
  border-radius: 10px;
  font-weight: bold;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputBox1 = styled.input`
  margin-right: 20px;
  height: 30px;
  width: 190px;
  border-radius: 10px;
  border: transparent;
`;

const InputBox2 = styled.input`
  margin-right: 20px;
  height: 30px;
  width: 190px;
  border-radius: 10px;
  border: transparent;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;