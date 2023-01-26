import React from "react";
import StyleCard from "./StyleCard";
import CssModuleCard from "./CssModuleCard";
import StyledCard from "./StyledCard";
import MaterialCard from "./MaterialCard";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

export const cards = [
  {
    name: "inline-style",
    label: "인라인 스타일 카드",
    component: StyleCard,
  },
  {
    name: "css-module",
    label: "CSS 모듈 카드",
    component: CssModuleCard,
  },
  {
    name: "styled-component",
    label: "스타일드 컴포넌트 카드",
    component: StyledCard,
  },
  {
    name: "material",
    label: "머티리얼 카드",
    component: MaterialCard,
  },
];

const CardDisplay = props => {
  const { name } = useParams();
  const card = cards.find(c => c.name === name);
  const Component = card?.component;
  return (
    (
      <div>
        <Typography variant="h5">{card?.label}</Typography>
        <Component {...props} />
      </div>
    ) || <div>잘못된 카드 이름 {name}</div>
  );
};

export default CardDisplay;
