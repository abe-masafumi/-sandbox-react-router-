import { Page2 } from "../src/Page1";
import { UrlParameter } from "../src/UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/",
    exact: false,
    children: <UrlParameter />
  }
];
