import "./Login.css";

function UserDataRow({ title, shown, maxLength }) {
	return (
		<div className="user-data-row">
			<text className="user-data-row-title">{title}</text>
			<input
				className="user-data-row-input"
				maxLength={maxLength}
				type={shown ? "input" : "password"}
			/>
		</div>
	);
}
function InputUserData() {
	return (
		<div className="input-user-data">
			<UserDataRow title="ID" shown={true} maxLength={15} />
			<UserDataRow title="비밀번호" shown={false} maxLength={15} />
		</div>
	);
}
function Login() {
	return (
		<div className="login">
			<InputUserData />
		</div>
	);
}

export default Login;
