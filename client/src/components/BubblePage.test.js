import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const mockData = [
  {
    color: "red",
    id: 1,
    code: { hex: "#FF0000" },
  },
  {
    color: "black",
    id: 2,
    code: { hex: "#000000" },
  },
];

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  const { rerender } = render(<BubblePage colorList={[]} />);
  rerender(<BubblePage colorList={mockData} />);
  const colorTags = screen.findAllByRole("span");
  console.log(colorTags);
  // expect(colorTags).toHaveLength(2);
  // const redTag = screen.findByText(/red/i);
  // const blackTag = screen.findByText(/black/i);

  // expect(redTag).toHaveValue("red");
  // expect(blackTag).toHaveValue("black");
});
