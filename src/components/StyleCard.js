import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const StyleCard = () => {
  return (
    <div className="card">
      <figure>
        <img
          src="https://googlefonts.github.io/korean/public/assets/og-img.png"
          alt="Google Fonts + 한국어"
        />
      </figure>
      <div className="title">
        <h3>Google Fonts + 한국어</h3>
        <span className="chip">OSS</span>
      </div>
      <p className="summary">
        좋은 타이포그래피를 통해 웹은 더욱 아름답고, 빠르며, 누구나 참여할 수 있는 공간이 될 수
        있습니다. Google Fonts는 이 사이트에 수록된 오픈 소스 한글 폰트를 머신 러닝에 기반을 둔
        최적화 기술을 통해 시범적으로 제공합니다.
      </p>
      <div className="footer">
        <a href="https://googlefonts.github.io/korean/" className="button primary">
          자세히 보기
        </a>
        <button type="bytton" className="button default">
          <AiOutlineHeart />
        </button>
      </div>
    </div>
  );
};

export default StyleCard;
