import { Navigate } from "react-router-dom";

const Logout = ({ setUserDt, userDt }) => {
	const logout = () => {
		setUserDt({ ...userDt, logined: false, name: undefined });
	};
	return <button onClick={logout}>로그아웃</button>;
};

function Home(props) {
	console.log(props);
	if (props.userDt.logined)
		return (
			<div>
				<strong>{props.userDt.name}님 안녕하세요!</strong>
				<Logout setUserDt={props.setUserDt} userDt={props.userDt} />
			</div>
		);
	else return <Navigate to={{ pathname: "/login", state: { props } }} />;
}

export default Home;
