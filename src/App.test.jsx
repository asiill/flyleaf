import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
    it("renders correct heading", () => {
        render(<App />);
        expect(screen.getByRole("heading").textContent).toMatch(/hello world/i);
    });
});