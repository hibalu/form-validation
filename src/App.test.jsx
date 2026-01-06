import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";


vi.mock("./LogIn", () => ({
    default: () => <div>Login Page</div>
}));

vi.mock("./form", () => ({
    default: () => <div>Signup Page</div>
}));

vi.mock("./Home", () => ({
    default: () => <div>Home Page</div>
}));

vi.mock("./components/Navbar", () => ({
    default: () => <nav>Navbar</nav>
}));

// Mock BrowserRouter to control routes
import { MemoryRouter } from "react-router-dom";
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        BrowserRouter: ({ children }) => <MemoryRouter>{children}</MemoryRouter>
    };
});

describe("App routing tests", () => {
    it("renders Navbar", () => {
        render(<App />);
        expect(screen.getByText("Navbar")).toBeInTheDocument();
    });

    it("renders Login page on default route", () => {
        render(<App />);
        expect(screen.getByText("Login Page")).toBeInTheDocument();
    });

    it("renders Signup page on /signup route", () => {
        render(
            <MemoryRouter initialEntries={["/signup"]}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText("Signup Page")).toBeInTheDocument();
    });

    it("renders Home page on /home route", () => {
        render(
            <MemoryRouter initialEntries={["/home"]}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText("Home Page")).toBeInTheDocument();
    });

    it("renders Login page for unknown route (*)", () => {
        render(
            <MemoryRouter initialEntries={["/random"]}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText("Login Page")).toBeInTheDocument();
    });
});
