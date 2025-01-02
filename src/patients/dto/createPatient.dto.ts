import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePatientDto {
    @IsNotEmpty({ message: 'please provide patient full name' })
    @IsString({ message: 'name must be string' })
    name: string;

    @IsNotEmpty({ message: 'please provide patient age' })
    @IsNumber({ })
    age: number;

    @IsNotEmpty({ message: 'please provide patient sex' })
    @IsString({ message: 'sex must be string' })
    sex: string;

    @IsNotEmpty({ message: 'please provide patient marital status' })
    @IsString({ message: 'marital status must be string' })
    maritalStatus: string;

    @IsNotEmpty({ message: 'please provide opatient state' })
    @IsString({ message: 'patient state must  be string'})
    state: string;

    @IsNotEmpty({ message: 'please provide patient local government area'})
    @IsString({ message: 'local government area must be string'})
    lga: string;

    @IsNotEmpty({ message: 'please provide patient address'})
    @IsString({ message: 'address must be string'})
    address: string;

    @IsNotEmpty({ message: 'please provide patient contact'})
    @IsString({ message: 'contact must be string'})
    contact: string;
}
