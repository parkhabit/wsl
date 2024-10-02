import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Overview page renders correctly", () => {
  test("Matches link", () => {
    render(<Page />);
    const matchLink = screen.getAllByRole("link");
    expect(matchLink).toHaveLength(4);
  });
});
