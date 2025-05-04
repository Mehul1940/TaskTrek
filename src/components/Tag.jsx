import React from "react";
import "./Tag.css";

const Tag = ({tagName,selectTag,selected}) => {
  const tagStyle={
    Html:{
      backgroundColor: "#4f2ff3",
      color: "white",
    },
    Css:{
      backgroundColor: "#15d4c8",
      color: "white",
    },
    Js:{
      backgroundColor: "#ffd12c",
      color: "white",
    },
    React:{
      backgroundColor: "#4cdafc",
      color: "white",
    },
    default:{
      backgroundColor: "white",
      color: "black",
    }
  }
  return (
    <>
      <button type="button" className="tag" style={selected ? tagStyle[tagName] : tagStyle.default}   onClick={()=>selectTag(tagName)}>{tagName}</button>
    </>
  );
};

export default Tag;
