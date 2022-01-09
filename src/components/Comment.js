import React from "react";
import styled from "styled-components";
function Comment(props) {
  return props.trigger ? (
    <Popup>
      <Popupinner>
        <Popupbutton onClick={() => props.setTrigger(false)}>close</Popupbutton>
        {props.children}
      </Popupinner>
    </Popup>
  ) : (
    ""
  );
}

export default Comment;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Popupinner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  height: 200px;
  background-color: #e0e0e0;
`;
const Popupbutton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;
