import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import user from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import Sidebar from "./Sidebar";
import { useState } from "react";

describe("Sidebar", () => {
  test("renders filter and sorting options", () => {
    render(
      <Sidebar
        filter="all"
        setFilter={() => {}}
        sort="none"
        setSort={() => {}}
      />
    );

    expect(
      screen.getByRole("heading", { name: /sorting/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: /laptops/i })).toBeInTheDocument();
    expect(
      screen.getByRole("radio", { name: /low to high/i })
    ).toBeInTheDocument();
  });

  test("selecting a filter option updates the selection", async () => {
    const Wrapper = () => {
      const [filter, setFilter] = useState("all");

      return (
        <Sidebar
          filter={filter}
          setFilter={setFilter}
          sort="none"
          setSort={() => {}}
        />
      );
    };

    render(<Wrapper />);

    const noFilter = screen.getByLabelText("No Filter");
    expect(noFilter).toBeChecked();

    const laptopsFilter = screen.getByLabelText("Laptops");
    await user.click(laptopsFilter);

    expect(laptopsFilter).toBeChecked();
  });

  test("selecting a sorting option updates the selection", async () => {
    const Wrapper = () => {
      const [sort, setSort] = useState("none");

      return (
        <Sidebar
          filter="all"
          setFilter={() => {}}
          sort={sort}
          setSort={setSort}
        />
      );
    };

    render(<Wrapper />);

    const noSorting = screen.getByLabelText("No Sorting");
    expect(noSorting).toBeChecked();

    const lowToHigh = screen.getByLabelText("Price: Low to High");
    await user.click(lowToHigh);

    expect(lowToHigh).toBeChecked();

    const highToLow = screen.getByLabelText("Price: High to Low");
    await user.click(highToLow);

    expect(highToLow).toBeChecked();

    expect(lowToHigh).not.toBeChecked();
  });
});
