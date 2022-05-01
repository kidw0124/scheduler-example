import "./Error.css";

function Error(props) {
	return (
		<div className="errors">
			<strong>{props.errno}</strong>
			<p>{props.errdsc}</p>
		</div>
	);
}

export default Error;
