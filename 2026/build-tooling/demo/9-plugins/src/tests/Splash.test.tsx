import { render } from "@testing-library/react";
import { it, expect } from "vitest";
import Splash from "../Splash";

it("renders a link", () => {
  const { container } = render(<Splash />);
  const link = container.querySelector("calcite-link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent("Open app");
});
