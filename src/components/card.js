import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Data from "./data.json";
function Header() {
  const [num, setNum] = useState(109);
  var count;
  const incNum = (incNum) => {
    setNum((prevState) => prevState + incNum);
  };

  useEffect(() => {
    window.localStorage.setItem("num", num);
  }, [num]);
   window.onload = function () {
    myFunction();
  };

  function myFunction() {
    fetch("https://api.countapi.xyz/update/viewapi/reactapi/?amount=1")
      .then((res) => res.json())
      .then((res) => {
        document.getElementById("count").innerHTML = res.value;
      });
  }

  return (
    <Container>
      <Card>
        <CardUserContent>
          {Data.map((post) => {
            return (
              <>
                <CardImage src={post.img} alt=""></CardImage>
                <CardUserDetails>
                  <CardUserName> {post.name}</CardUserName>
                  <CardDescription>
                    {post.content}
                    <br></br>
                    1d | SanFrancisco
                  </CardDescription>

                  <CardTimePlace></CardTimePlace>
                </CardUserDetails>
              </>
            );
          })}
        </CardUserContent>
        <CardContent>
          <CardTitle>The concept of Research: A cross-cultural study</CardTitle>
          <CardContentdesc>
            Oxford Nanopore has pulled in $100m from investor in the
            Asia-pacific region, as it complete a funding round that values the
            fast-grouwing UK biotechnology company at $1.5bn.
          </CardContentdesc>
        </CardContent>
        <CardInteraction>
          <CardCount>
            <div id="count">0</div> Views | {num} Likes | 22 Comments | 7 Shares
          </CardCount>
          <CardBottom>
            <CardLike onClick={() => incNum(1)}>Like</CardLike>
            <CardComment onClick={() => incNum(1)}>Comment</CardComment>
            <CardShare onClick={() => incNum(1)}>Sahre</CardShare>
          </CardBottom>
        </CardInteraction>
      </Card>
    </Container>
  );
}

export default Header;
const Container = styled.div``;
const Card = styled.div`
  height: 400px;
  width: 750px;
  margin: 0 auto;
  margin-top: 20vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const CardUserContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 50px;
`;
const CardImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 25px;
  border-radius: 50%;
  margin-right: 17px; ;
`;
const CardUserDetails = styled.div`
  margin-top: 15px;
`;
const CardUserName = styled.p`
  font-weight: bold;
`;
const CardDescription = styled.p`
  color: #b2bdb5;
`;
const CardTimePlace = styled.p``;
const CardContent = styled.div`
  position: relative;
  margin-left: 45px;
`;
const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
const CardContentdesc = styled.p`
  font-weight: 500;
`;
const CardInteraction = styled.div`
  color: #b2bdb5;
  margin-left: 45px;
`;
const CardCount = styled.div`
  display: flex;
  align-items: center;
`;
const CardBottom = styled.div`
  margin-top: 20px;
`;

const CardLike = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-weight: 900;
  color: #b2bdb5;
  margin-left: 35px;
  cursor: pointer;
`;
const CardComment = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-weight: 900;
  color: #b2bdb5;
  margin-left: 35px;
  cursor: pointer;
`;
const CardShare = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-weight: 900;
  color: #b2bdb5;
  margin-left: 35px;
  cursor: pointer;
`;
