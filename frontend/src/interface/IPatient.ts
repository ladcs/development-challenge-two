export interface address {
  street: string,
  number: number,
}

export default interface IPatient {
  email?: string,
  patientName: string,
  birthDate: string,
  address: address,
}