import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./views/Home.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<Home />);
