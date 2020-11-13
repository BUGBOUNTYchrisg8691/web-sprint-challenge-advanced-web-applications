import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEver from "@testing-library/user-event";
import BubblePage from "./BubblePage";

import { fetchColors as mockFetchColors } from "../api/fetchColors";
jest.mock("../api/fetchColors.js");

import { mockData } from "../mockData";

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(mockData);
  render(<BubblePage />);

  waitFor(() => {
    const colorTags = screen.findAllByTestId("color-tag");
    expect(colorTags).toHaveLength(11);
  });

  // const { rerender } = render(<BubblePage colorList={[]} />);
  // const preDataTags = screen.queryAllByTestId("color-tags");
  // expect(preDataTags).toHaveLength(0);

  // rerender(<BubblePage colorList={mockData} />);
  // const colorTags = screen.queryByTestId("color-tags");
  // expect(colorTags).toHaveLength(2);
  // expect(colorTags).toHaveLength(2);
  // const redTag = screen.findByText(/red/i);
  // const blackTag = screen.findByText(/black/i);

  // expect(redTag).toHaveValue("red");
  // expect(blackTag).toHaveValue("black");
});
