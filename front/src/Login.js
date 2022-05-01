import "./Login.css";
import { useState, useEffect } from "react";

function UserDataRow({ title, shown, maxLength, setter }) {
	return (
		<div className="user-data-row">
			<div className="user-data-row-title">{title}</div>
			<input
				className="user-data-row-input"
				id={"user-data-row-input-" + title}
				maxLength={maxLength}
				type={shown ? "input" : "password"}
				onChange={(e) => {
					setter(e.target.value);
				}}
			/>
		</div>
	);
}
function Button({ id, pw }) {
	return (
		<div
			id="login-button"
			onClick={() => {
				alert("ID: " + id + "\nPW: " + pw);
			}}
		>
			로그인
		</div>
	);
}
function InputUserData({ setId, setPw }) {
	return (
		<div className="input-user-data">
			<UserDataRow
				title="ID"
				shown={true}
				maxLength={15}
				setter={setId}
			/>
			<UserDataRow
				title="비밀번호"
				shown={false}
				maxLength={15}
				setter={setPw}
			/>
		</div>
	);
}
function Login() {
	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	return (
		<div className="login">
			<div id="login-info">
				<InputUserData setId={setId} setPw={setPw} />
				<Button id={id} pw={pw} />
			</div>
		</div>
	);
}

export default Login;
