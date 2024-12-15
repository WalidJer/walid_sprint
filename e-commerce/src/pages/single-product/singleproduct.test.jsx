import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import SingleProduct from "./SingleProduct";

describe("SingleProduct", () => {
  test("renders the product title as an h1", async () => {
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </MemoryRouter>
    );

    const heading = await screen.findByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test("renders the product price", async () => {
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </MemoryRouter>
    );

    const price = await screen.findByText(/\$\d+/); 
    expect(price).toBeInTheDocument();
  });

  test("renders the quantity input with default value", async () => {
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </MemoryRouter>
    );

  
    const quantityInput = await screen.findByLabelText("Quantity");
    expect(quantityInput).toBeInTheDocument();
    expect(quantityInput).toHaveValue(1);

  
  }); 

  test("renders the product description", async () => {
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route
            path="/products/:id"
            element={<SingleProduct addToCart={() => {}} />}
          />
        </Routes>
      </MemoryRouter>
    );

    
    const descriptionTitle = await screen.findByText("About the product");
    expect(descriptionTitle).toBeInTheDocument();
  });
}); 