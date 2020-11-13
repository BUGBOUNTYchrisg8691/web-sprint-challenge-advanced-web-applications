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
});
