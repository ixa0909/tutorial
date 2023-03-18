import React from "react";
import Button from "@mui/material/Button";
import "./style.css";
export default function FilterComponent(props) {
  const all = () => {
    props.setFilterStatus(0);
  };
  const done = () => {
    props.setFilterStatus(1);
  };
  const unDone = () => {
    props.setFilterStatus(2);
  };
  return (
    <div className="filter">
      <Button variant="contained" color="secondary" onClick={all}>
        全て
      </Button>
      <Button variant="contained" color="secondary" onClick={done}>
        完了
      </Button>
      <Button variant="contained" color="secondary" onClick={unDone}>
        未完了
      </Button>
    </div>
  );
}
