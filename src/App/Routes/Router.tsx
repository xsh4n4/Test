import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "@views/Dashboard/Dashboard";

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Dashboard />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
