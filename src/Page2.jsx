import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>page2ぽえーじ</h1>
      <Link to="/page2/999">url param</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query param</Link>
    </div>
  );
};
