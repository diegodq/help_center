import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PropsType = {
	children: ReactNode;
}
const PrivateRoute: React.FC<PropsType> = ({children}: PropsType) => {
	const token = window.localStorage.getItem('authToken');

	if(!token) {
		return <Navigate to='/login' replace />
	}

	return children;
}

export default PrivateRoute;