import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "../state/itemSlice";
import { useParams } from "react-router-dom";
import { Item } from "../components/ecom-ui";
import { GridList } from "../components/ecom-ui/Layout/Header";

const Items = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();
  const { loading, error, records } = useSelector((state) => state.items);
  console.log(records);
  useEffect(() => {
    dispatch(filterItems(prefix));
  }, [dispatch, prefix]);

  return (
    <GridList loading={loading} error={error} items={records}>
      <Item />
    </GridList>
  );
};

export default Items;
