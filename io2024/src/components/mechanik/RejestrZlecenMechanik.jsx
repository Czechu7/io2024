import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../../css/magazyn/RejestrMagazynowy.css';
import RejestrZlecen from './RejestrZlecen';
import MechanikHeader from './MechanikHeader';

function RejestrZlecenMechanik() {
    return (
    <div className="Magazyn">
        <MechanikHeader></MechanikHeader>
      <div>
        <RejestrZlecen></RejestrZlecen>
      </div>
    </div>
  );
}

export default RejestrZlecenMechanik;