interface address {
  street: string,
  number: number,
}

export default interface IPatient {
  email?: string,
  PatientName: string,
  BirthDate: string,
  address: address,
}