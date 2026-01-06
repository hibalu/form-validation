import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import LogIn from "./LogIn";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => navigateMock,
    };
});

describe("LogIn component", () => {
    beforeEach(() => {
        navigateMock.mockClear();
    });

    it("renders email and password fields and checkbox", () => {
        render(<LogIn />);
        expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Show password/i)).toBeInTheDocument();
    });

    it("shows error when submitting empty form", () => {
        render(<LogIn />);
        fireEvent.click(screen.getByText(/Submit/i));
        expect(screen.getByText(/Please enter email and password/i)).toBeInTheDocument();
    });

    it("shows invalid email message", () => {
        render(<LogIn />);
        fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: "bademail" } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "secret" } });
        fireEvent.click(screen.getByText(/Submit/i));
        expect(screen.getByText(/Please enter a valid email/i)).toBeInTheDocument();
    });

    it("navigates to /home on successful login", () => {
        render(<LogIn />);
        fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: "test@example.com" } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "secret" } });
        fireEvent.click(screen.getByText(/Submit/i));
        expect(navigateMock).toHaveBeenCalledWith("/home");
    });

    it("toggles password visibility", () => {
        render(<LogIn />);
        const pw = screen.getByLabelText(/Password/i);
        const cb = screen.getByLabelText(/Show password/i);
        expect(pw).toHaveAttribute("type", "password");
        fireEvent.click(cb);
        expect(pw).toHaveAttribute("type", "text");
    });
});