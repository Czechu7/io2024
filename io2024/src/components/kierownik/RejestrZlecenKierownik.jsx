import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../../css/magazyn/RejestrMagazynowy.css";
import RejestrZlecen from "../mechanik/RejestrZlecen";
import KierownikHeader from "./KierownikHeader";

function RejestrZlecenKierownik() {
	return (
		<div className="Kierownik">
			<KierownikHeader></KierownikHeader>
			<h1>Rejestr Zleceń</h1>
			<div>
				<RejestrZlecen></RejestrZlecen>
			</div>
		</div>
	);
}

export default RejestrZlecenKierownik;
