import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../../css/magazyn/RejestrMagazynowy.css';
import MagazynHeader from './MagazynHeader';
import RejestrZlecenMechanik from '../Mechanik/RejestrZlecenMechanik';

function MagazynZamowienia() {
    return (
    <div className="Magazyn">
      <MagazynHeader></MagazynHeader>
      <div>
        <RejestrZlecenMechanik></RejestrZlecenMechanik>
      </div>
    </div>
  );
}

export default MagazynZamowienia;
