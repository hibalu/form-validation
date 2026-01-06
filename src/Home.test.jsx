import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => navigateMock,
    };
});

describe("Home page", () => {
    beforeEach(() => {
        navigateMock.mockClear();
    });

    it("calls alert on Get Started", () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => { });
        fireEvent.click(screen.getByText(/Get Started/i));
        expect(alertSpy).toHaveBeenCalledWith("Profile coming soon");
        alertSpy.mockRestore();
    });

    it("navigates to /signup on Sign up click", () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        fireEvent.click(screen.getByText(/Sign up/i));
        expect(navigateMock).toHaveBeenCalledWith('/signup');
    });
});