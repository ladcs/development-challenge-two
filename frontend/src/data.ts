import IPatient from "./interface/IPatient";

interface ISimulaData {
  count: number;
  patients: IPatient[];
}

const simulaData: ISimulaData = {
  count: 21,
  patients: [{
  email: 'test1@test.com',
  patientName: 'test1',
  birthDate: '12/10/200',
  address: {number: 1, street: "test aqui"},
}, 
{ email: 'test2@test.com',
patientName: 'test2',
birthDate: '12/10/200',
address: {number: 2, street: "test 2 aqui"},
},
{ email: 'test3@test.com',
patientName: 'test3',
birthDate: '12/10/200',
address: {number: 3, street: "test 3 aqui"},
},
{ email: 'test5@test.com',
patientName: 'test5',
birthDate: '12/10/200',
address: {number: 5, street: "test 5 aqui"},
},
{ email: 'test4@test.com',
patientName: 'test4',
birthDate: '12/10/200',
address: {number: 4, street: "test 4 aqui"},
},
{ email: 'test6@test.com',
patientName: 'test6',
birthDate: '12/10/200',
address: {number: 6, street: "test 6 aqui"},
},
{ email: 'test7@test.com',
patientName: 'test7',
birthDate: '12/10/200',
address: {number: 7, street: "test 7 aqui"},
},
{ email: 'test8@test.com',
patientName: 'test8',
birthDate: '12/10/200',
address: {number: 8, street: "test 8 aqui"},
},
{ email: 'test9@test.com',
patientName: 'test9',
birthDate: '12/10/200',
address: {number: 9, street: "test 9 aqui"},
},
{ email: 'test10@test.com',
patientName: 'test10',
birthDate: '12/10/200',
address: {number: 10, street: "test 10 aqui"},
},
{ email: 'test11@test.com',
patientName: 'test11',
birthDate: '12/10/200',
address: {number: 11, street: "test 11 aqui"},
},
{ email: 'test12@test.com',
patientName: 'test12',
birthDate: '12/10/200',
address: {number: 12, street: "test 12 aqui"},
},
{ email: 'test13@test.com',
patientName: 'test13',
birthDate: '12/10/200',
address: {number: 13, street: "test 13 aqui"},
},
{ email: 'test14@test.com',
patientName: 'test14',
birthDate: '12/10/200',
address: {number: 14, street: "test 14 aqui"},
},
{ email: 'test15@test.com',
patientName: 'test15',
birthDate: '12/10/200',
address: {number: 15, street: "test 15 aqui"},
},
{ email: 'test16@test.com',
patientName: 'test16',
birthDate: '12/10/200',
address: {number: 16, street: "test 16 aqui"},
},
{ email: 'test17@test.com',
patientName: 'test17',
birthDate: '12/10/200',
address: {number: 17, street: "test 17 aqui"},
},
{ email: 'test18@test.com',
patientName: 'test18',
birthDate: '12/10/200',
address: {number: 18, street: "test 18 aqui"},
},
{ email: 'test19@test.com',
patientName: 'test19',
birthDate: '12/10/200',
address: {number: 19, street: "test 19 aqui"},
},
{ email: 'test20@test.com',
patientName: 'test20',
birthDate: '12/10/200',
address: {number: 20, street: "test 20 aqui"},
},
{ email: 'test21@test.com',
patientName: 'test21',
birthDate: '12/10/200',
address: {number: 21, street: "test 21 aqui"},
}
]}

export default simulaData;