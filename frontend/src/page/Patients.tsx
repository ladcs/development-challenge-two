import React from 'react'
import Header from '../component/Header'
import Tbody from '../component/Tbody';
import Thead from '../component/Thead'

const Patients = () => (
  <div>
    <Header/>
    <table>
      <Thead/>
      <Tbody/>
    </table>
  </div>
);

export default Patients;
