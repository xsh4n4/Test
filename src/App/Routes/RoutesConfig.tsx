import { RouteObject } from "react-router-dom";
import { paths } from "./Paths";
import GlobalLayout from "../Layouts/GlobalLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "@/Views/Auth/Login/Login";

const RoutesConfig: RouteObject[] = [
	{
		children: [
			{
				children: [
					{
						element: <Login />,
						path: paths.auth.login,
					},
				],
				element: <AuthLayout />,
				path: "",
			},
		],
		element: <GlobalLayout />,
		path: "",
	},
];

export default RoutesConfig;
