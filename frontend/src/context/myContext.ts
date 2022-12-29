import React, { createContext } from 'react';
import IPatient from '../interface/IPatient';

type INITIAL = {
  data: IPatient[],
  setData: React.Dispatch<React.SetStateAction<IPatient[]>>,
  numberPatients: number,
  setNumberPatients: React.Dispatch<React.SetStateAction<number>>,
}

const INITIAL_STATE: INITIAL = {
  data: [] as IPatient[],
  setData: () => {},
  numberPatients: 0,
  setNumberPatients: () => {},
};

const myContext = createContext({
  state: INITIAL_STATE,
});

export default myContext;
