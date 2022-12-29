import React, { createContext } from 'react';
import IFilter from '../interface/IFilter';
import IPatient from '../interface/IPatient';

type INITIAL = {
  data: IPatient[],
  setData: React.Dispatch<React.SetStateAction<IPatient[]>>,
  numberPatients: number,
  setNumberPatients: React.Dispatch<React.SetStateAction<number>>,
  filter: IFilter,
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>,
}

const INITIAL_STATE: INITIAL = {
  data: [] as IPatient[],
  setData: () => {},
  numberPatients: 0,
  setNumberPatients: () => {},
  filter: {
    filterByEmail: '',
    filterByName: '',
  },
  setFilter: () => {},
};

const myContext = createContext({
  state: INITIAL_STATE,
});

export default myContext;
