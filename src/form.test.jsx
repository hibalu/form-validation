import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Form from "./form";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => navigateMock,
    };
});

describe("Registration Form", () => {
    beforeEach(() => {
        navigateMock.mockClear();
        vi.restoreAllMocks();
    });

    it("shows validation messages when submitted empty", () => {
        render(<Form />);
        fireEvent.click(screen.getByText(/Register/i));
        expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Phone is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Please select a gender/i)).toBeInTheDocument();
        expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Please confirm your password/i)).toBeInTheDocument();
    });

    it("submits successfully with valid data and navigates to /login", () => {
        render(<Form />);

        // Fill the fields
        fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: "user1" } });
        fireEvent.change(screen.getByLabelText(/^Email$/i), { target: { value: "user@example.com" } });
        fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: "+1234567890" } });
        fireEvent.change(screen.getByLabelText(/Gender/i), { target: { value: "male" } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "strongpwd" } });
        fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: "strongpwd" } });

        const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => { });

        fireEvent.click(screen.getByText(/Register/i));

        expect(alertSpy).toHaveBeenCalledWith("Registration successful!");
        expect(navigateMock).toHaveBeenCalledWith("/login");

        alertSpy.mockRestore();
    });
});