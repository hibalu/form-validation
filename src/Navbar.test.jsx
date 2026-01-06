import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Navbar from "./components/Navbar";
import { MemoryRouter } from "react-router-dom";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => navigateMock,
    };
});

describe("Navbar", () => {
    beforeEach(() => navigateMock.mockClear());

    it("renders brand and links", () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>);
        expect(screen.getByText(/MyApp/i)).toBeInTheDocument();
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });

    it("calls navigate('/login') on logout click", () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>);
        fireEvent.click(screen.getByText(/Logout/i));
        expect(navigateMock).toHaveBeenCalledWith('/login');
    });
});