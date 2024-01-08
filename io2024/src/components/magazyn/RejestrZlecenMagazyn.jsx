import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../../css/magazyn/RejestrMagazynowy.css';
import MagazynHeader from './MagazynHeader';
import RejestrZlecen from '../Mechanik/RejestrZlecen';

function RejestrZlecenMagazyn() {
    return (
    <div className="Magazyn">
      <MagazynHeader></MagazynHeader>
      <div>
        <RejestrZlecen></RejestrZlecen>
      </div>
    </div>
  );
}

export default RejestrZlecenMagazyn;
