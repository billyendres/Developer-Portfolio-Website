import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById("root")
);
