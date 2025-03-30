import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ItemCard } from "../ItemCard";

describe("ItemCard tests ", () => {
  const mockItem = {
    title: "Test Task",
    description: "Test Description",
    uuid: "test-uuid-1",
    status: "pending",
  };

  it("renders item with correct title and description", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("displays correct status", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText("pending")).toBeInTheDocument();
  });

  it("applies correct status class", () => {
    const { container } = render(<ItemCard item={mockItem} />);
    const statusElement = container.querySelector('[class*="item-card__status--pending"]');
    expect(statusElement).toBeInTheDocument();
  });
});
