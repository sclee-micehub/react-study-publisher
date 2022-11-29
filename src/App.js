import React from "react";

const HelloWorld = function () {
  return (
    <h1>
      Hello World!
      {/**
       * Math.random() 함수는 0 이상 1 미만의 무작위 난수를 반환합니다.
       *   방법 1. 난수에 10을 곱해 0 이상 10 미만의 수에 5를 뺀다.
       *   방법 2. 난수에서 0.5를 빼 -0.5이상 0.5 미만의 수에 10을 곱한다.
       *
       * Math.floor(n) 함수는 숫자 n을 내림 한 정수를 반환합니다.
       * 위에서 -5 이상 5 미만의 숫자를 넣으면 -5 이상 5 미만의 정수가 나옵니다.
       */}
      {Math.floor(Math.random() * 10 - 5)}
    </h1>
  );
};

const App = function () {
  return (
    <div>
      App
      <HelloWorld />
    </div>
  );
};

export default App;
