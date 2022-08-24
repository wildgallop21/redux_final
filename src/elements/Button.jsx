import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const MyBtn = (props) => {
  const { onClick, children } = props;
  const navigate = useNavigate();
  // console.log("props", props);

  return <DetailBtn onClick={onClick}>{children}</DetailBtn>;
};

export default MyBtn;

const DetailBtn = styled.button`
  padding: 10px;
  width: 120px;
  border: transparent;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 1px #f88585;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #ffc272;
  }
`;