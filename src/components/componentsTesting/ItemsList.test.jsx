import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ItemsList } from "../ItemsList";

describe("ItemsList tests ", () => {
  const mockItems = [
    {
      title: "Test Task",
      description: "Test Description",
      uuid: "test-uuid-1",
      status: "pending",
    },
  ];

  it("renders empty state message when no items", () => {
    render(<ItemsList itemsList={[]} />);
    expect(screen.getByText("Empty list")).toBeInTheDocument();
  });

  it("renders list of items when items are provided", () => {
    render(<ItemsList itemsList={mockItems} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
});
