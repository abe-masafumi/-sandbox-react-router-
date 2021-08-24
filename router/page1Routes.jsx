import { Page1 } from "../src/Page1";
import { Page1DetailA } from "../src/Page1DetailA";
import { Page1DetailB } from "../src/Page1DetailB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];
