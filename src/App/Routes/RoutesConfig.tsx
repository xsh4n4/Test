import { RouteObject } from "react-router-dom";
import { paths } from "./Paths";
import GlobalLayout from "../Layouts/GlobalLayout";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Dashboard from "@/Views/Dashboard/Dashboard";
import Login from "@/Views/Auth/Login/Login";
import Config from "@/Views/Config/Config";
import { ConfigLayout } from "../Layouts/ConfigLayout";
import ImportOrUpload from "@/Views/Config/ImportOrUpload/ImportOrUpload";

const RoutesConfig: RouteObject[] = [
	{
		children: [
			{
				children: [
					{
						element: <ConfigLayout />,
						children: [
							{ element: <Config />, path: paths.config.root },
							{
								element: <ImportOrUpload />,
								path: paths.config.importOrUpload,
							},
						],
						path: paths.config.root,
					},
					{
						element: <Dashboard />,
						index: true,
						path: paths.dashboard,
					},
				],
				element: <MainLayout />,
				path: "",
			},
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
