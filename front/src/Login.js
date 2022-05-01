import "./Login.css";

function UserDataRow({ title, shown, maxLength }) {
	return (
		<div className="user-data-row">
			<div className="user-data-row-title">{title}</div>
			<input
				className="user-data-row-input"
				id={"user-data-row-input-" + title}
				maxLength={maxLength}
				type={shown ? "input" : "password"}
			/>
		</div>
	);
}
function Button() {
	return (
		<div
			id="login-button"
			onClick={() => {
				const id = document.getElementById(
					"user-data-row-input-ID"
				).value;
				const pw = document.getElementById(
					"user-data-row-input-비밀번호"
				).value;
				alert("ID: " + id + "\nPW: " + pw);
			}}
		>
			로그인
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
			<div id="login-info">
				<InputUserData />
				<Button />
			</div>
		</div>
	);
}

export default Login;
