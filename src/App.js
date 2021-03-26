import "./App.css";
import React from "react";
import styled from "styled-components";

// Fish

const PageContainer = styled.div`
  margin: 50px auto;
  background: grey;
  width: 80vw;
  height: 800px;
`;

const ColumnsContainer = styled.div`
  display: flex;
  width: 100%;
  background: orange;
`;

const media = {
  md: (styles) => `
    @media only screen and (max-width: 600px) {
      ${styles}
    }
  `,
};

const Gutter = styled.div`
  //flex: 1;
  flex-basis: 50px;
  background: lightcoral;
  text-align: center;
  padding-top: 100px;
  ${(props) =>
    props.collapse &&
    media[props.collapse](`
    display:none;
    `)};
`;

const CardContainer = styled.div`
  margin-top: 50px;
  display: inline-flex; // Not sure why but margin-top wont work otherwise
  flex-wrap: wrap;
  justify-content: flex-start; //center; //flex-start;
  border: 2px solid blue;
  //flex: 5;
`;

const Card = styled.div`
  width: 100px;
  height: 100px;
  background: pink;
  margin: 5px;
  overflow: hidden;
`;

const Parent = styled.div`
  display: flex;
  overflow: hidden;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
`;

const Child = styled.div`
  //flex: 1;
  flex-basis: 250px;
  background: lightblue;
  flex-shrink: 0;
`;

function App() {
  return (
    <PageContainer>
      Some random stuff..
      <ColumnsContainer>
        <Gutter collapse="md">
          Gutter; Vanishes at screen size 'md' and smaller.
        </Gutter>
        <CardContainer>
          <Card>
            This is my card and it is very long but that's fine with me because
            I like to see if it will truncate or overlow or whatever happens
            happens...
          </Card>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
        <Gutter collapse="md">Gutter</Gutter>
      </ColumnsContainer>
      The rest of the app/page/...
      <Parent>
        <Child>A child</Child>
        <div style={{ flex: 1 }}>A div</div>
        <Child>A child</Child>
      </Parent>
      Table test...
      <Rows>
        <Parent>
          <Child style={{ fontWeight: "bold" }}>one</Child>
          <Child>two</Child>
          <Child>three</Child>
        </Parent>
        <Parent>
          <Child>1</Child>
          <Child>2</Child>
          <Child>3</Child>
        </Parent>
      </Rows>
    </PageContainer>
  );
}

export default App;
