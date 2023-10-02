import { createRoot } from "react-dom/client";
import Portfolio from "./Portfolio";
import "./index.css";

const container = document.getElementById("react");
const root = createRoot(container as HTMLElement);
root.render(<Portfolio />);
