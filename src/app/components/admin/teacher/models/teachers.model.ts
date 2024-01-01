export interface ITeacherResponse {
    id: number,
    name: string,
    description: string,
    address: string,
    dateOfBirth: Date, //date
    dateOfRegister: Date, //date
    phone: string,
    email: string,
    telegramUserName: string,
    specialization: string
}
export interface ITeacherRequest {
    name: string,
    description: string,
    address: string,
    dateOfBirth: Date, //date
    dateOfRegister: Date, //date
    phone: string,
    email: string,
    telegramUserName: string,
    specialization: string
}