import React, { useEffect , useState } from 'react';
import MyContext from './myContext';
import IPatient from '../interface/IPatient';
// import axios from 'axios';
import IFilter from '../interface/IFilter';
import simulaData from '../data';

interface IProps {
  children: React.ReactNode;
}



const Provider = ({ children }:IProps) => {
  const [data, setData] = useState<IPatient[]>([]);
  const [getData, setGetData] = useState<boolean>(true)
  const [numberPatients, setNumberPatients] = useState<number>(0)
  const [filter, setFilter] = useState<IFilter>({
    filterByEmail: '',
    filterByName: '',
  });
/*
  const saveAPI = async () => {
    try {
      const {data} = await axios.get('https://fgfi62nwy1.execute-api.us-east-1.amazonaws.com/patient');
      const fixDate = data.patients.map((patient: IPatient) => {
      const fix = patient.birthDate.split('/');
      return {
        birthDate: [fix[1], fix[0], fix[2]].join('/'),
        patientName: patient.patientName,
        email: patient.email,
        address: patient.address,
        }
      });
      setData(fixDate);
      setNumberPatients(data.count);
      setGetData(false);
    } catch (error) {
      console.log(error);
    }
  };*/

  const saveAPI = async () => {
    const fixDate = simulaData
    .patients.map((patient) => {
      const fix = patient.birthDate.split('/');
      return {
        birthDate: [fix[1], fix[0], fix[2]].join('/'),
        patientName: patient.patientName,
        email: patient.email,
        address: patient.address,
    }
    });
    setData(fixDate);
    setNumberPatients(simulaData.count);
    setGetData(false);
  };

  useEffect(() => {
    if (getData) saveAPI();
  });

  const contextValue = { 
    filter,
    setFilter,
    data,
    setData,
    numberPatients,
    setNumberPatients };
  return (
    <MyContext.Provider value={ { state: contextValue } }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;