import { useLocation, useHistory } from "react-router-dom";
export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);
  const histry = useHistory();
  const onClickback = () => histry.goBack();
  return (
    <div>
      <h1>Page1DetailAーです</h1>
      <button onClick={onClickback}>もドール</button>
    </div>
  );
};
