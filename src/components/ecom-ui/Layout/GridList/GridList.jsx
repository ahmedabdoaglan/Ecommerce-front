import { React, cloneElement } from "react";
import { Loading } from "../Header";
import styles from "./styles.module.css";
const GridList = ({ children, items, loading, error }) => {
  const { grid } = styles;
  const renderItems = items.map((item) =>
    cloneElement(children, { key: item.id, ...item })
  );

  return (
    <Loading error={error} loading={loading}>
      <div className={grid}>{renderItems}</div>;
    </Loading>
  );
};

export default GridList;
