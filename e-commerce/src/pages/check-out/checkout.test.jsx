import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import CheckOut from "./CheckOut";

describe("CheckOut", () => {
  test("renders the main heading with a non-empty cart", () => {
    render(
      <MemoryRouter>
        <CheckOut
          cart={[{ id: 1, title: "Product 1", price: 100, quantity: 1 }]}
        />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { level: 1, name: /checkout/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders an empty cart message when cart is empty", () => {
    render(
      <MemoryRouter>
        <CheckOut cart={[]} />
      </MemoryRouter>
    );

    const emptyMessage = screen.getByText(/your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();


  });

  test("renders placeholders for shipping form fields", () => {
    render(
      <MemoryRouter>
        <CheckOut
          cart={[{ id: 1, title: "Product 1", price: 100, quantity: 1 }]}
        />
      </MemoryRouter>
    );

    const firstNameInput = screen.getByPlaceholderText(/enter first name/i);
    const lastNameInput = screen.getByPlaceholderText(/enter last name/i);
    const addressInput = screen.getByPlaceholderText(/enter your address/i);

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
  });

  test("calculates and displays the total, taxes, and shipping", () => {
    render(
      <MemoryRouter>
        <CheckOut
          cart={[
            { id: 1, title: "Product 1", price: 100, quantity: 1 },
            { id: 2, title: "Product 2", price: 50, quantity: 2 },
          ]}
        />
      </MemoryRouter>
    );

    const subtotal = screen.getByText(/\$200\.00/); 
    const taxes = screen.getByText(/\$30\.00/); 
    const total = screen.getByText(/\$230\.00/); 

    expect(subtotal).toBeInTheDocument();
    expect(taxes).toBeInTheDocument();
    expect(total).toBeInTheDocument();
  });

  test("shows payment form when 'Continue to Payment' button is clicked", () => {
    render(
      <MemoryRouter>
        <CheckOut
          cart={[{ id: 1, title: "Product 1", price: 100, quantity: 1 }]}
        />
      </MemoryRouter>
    );

    const continueButton = screen.getByRole("button", { name: /continue to payment/i });
    expect(continueButton).toBeInTheDocument();

    fireEvent.click(continueButton);

    const paymentFormHeading = screen.getByText(/credit card details/i);
    expect(paymentFormHeading).toBeInTheDocument();
  });
});