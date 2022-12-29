import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import IPatient from '../interface/IPatient';
import axios from 'axios';

interface IProps {
  children: React.ReactNode;
}



const Provider = ({ children }:IProps) => {
  const [data, setData] = useState<IPatient[]>([]);
  const [getData, setGetData] = useState<boolean>(true)
  const [numberPatients, setNumberPatients] = useState<number>(0)

  const saveAPI = async () => {
    try {
      const result = await axios.get('https://fgfi62nwy1.execute-api.us-east-1.amazonaws.com/patient');
        setData(result.data.patients);
        setNumberPatients(result.data.count);
        setGetData(false);
    } catch (error) {
      console.log(error);
    }
  };  

  useEffect(() => {
    if (getData) saveAPI();
  });

  const contextValue = { data, setData, numberPatients, setNumberPatients };
  return (
    <MyContext.Provider value={ { state: contextValue } }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;