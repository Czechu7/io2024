import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../../css/magazyn/RejestrMagazynowy.css";
import RejestrZlecen from "../mechanik/RejestrZlecen";

function RejestrZlecenKierownik() {
	return (
		<div className="Kierownik">
			<div>
				<RejestrZlecen></RejestrZlecen>
			</div>
		</div>
	);
}

export default RejestrZlecenKierownik;
