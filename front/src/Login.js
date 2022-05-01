import "./Login.css";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

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
function Button({ id, pw, setUserDt, userDt }) {
	return (
		<div
			id="login-button"
			onClick={() => {
				if (id === "a" && pw === "b") {
					console.log(id, pw);
					setUserDt({ ...userDt, logined: true, name: "이유림" });
				}
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
function Login(props) {
	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	if (props.userDt.logined) {
		return (
			<Navigate to={{ pathname: "/home", state: { name: "이유림" } }} />
		);
	} else {
		return (
			<div className="login">
				<div id="login-info">
					<InputUserData setId={setId} setPw={setPw} />
					<Button
						id={id}
						pw={pw}
						setUserDt={props.setUserDt}
						userDt={props.userDt}
					/>
				</div>
			</div>
		);
	}
}

export default Login;
