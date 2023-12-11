import "../../css/ZamowioneCzesci.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

function ZamowioneCzesci() {
	return (
		<Link to={"/rejestrzlecenkierownik"}>
			<div>
				<Button type="button">Powrót do rejestru zleceń</Button>
			</div>
		</Link>
	);
}

export default ZamowioneCzesci;
