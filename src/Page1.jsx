import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const histry = useHistory();
  const onClickDitailA = () => histry.push("page1/detailA");

  return (
    <div>
      <h1>pa1gえーじ</h1>
      <Link to={{ pathname: "page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDitailA}>detailA</button>
    </div>
  );
};
