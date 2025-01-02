import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Patient } from './patients.schema';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/createPatient.dto';
import { UpdatePatientDto } from './dto/updatePatient.dto';

@Controller('patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @Get('')
    async getPatients(): Promise<any> {
        try {
            return await this.patientsService.getPatients();
        } catch (error) {
            if (error instanceof Error) {
                
                return {
                    statusCode: 400,
                    responseMessage: 'request handle failed',
                    message: error.message
                };
            } else {
                return {
                  status: 500,
                  responseMessage: 'server error try again later',
                  error
                };
            }
        }
    }

    @Get(':patientId')
    async getOnePatient(
        @Param('patientId') patientId: string
    ): Promise<any> {
        try {
            return await this.patientsService.getOnePatient(patientId);
        } catch (error) {
            if (error instanceof Error) {
                
                return {
                    statusCode: 400,
                    responseMessage: 'request handle failed',
                    message: error.message
                };
            } else {
                return {
                  status: 500,
                  responseMessage: 'server error try again later',
                  error
                };
            }
        }
    }   

    @Post()
    async addPatients(@Body() createPatientDto: CreatePatientDto): Promise<any> {
        try {
            return await this.patientsService.createPatient(createPatientDto);
        } catch (error) {
            if (error instanceof Error) {
                
                return {
                    statusCode: 400,
                    responseMessage: 'request handle failed',
                    message: error.message
                };
            } else {
                return {
                  status: 500,
                  responseMessage: 'server error try again later',
                  error
                };
            }
        }
    }

    @Patch(':patientId')
    async getPatientAndUpdate(
        @Param('patientId') patientId: string,
        @Body() updatePatientDto: UpdatePatientDto
    ): Promise<any> {
        try {
            return await this.patientsService.updatePatient(patientId, updatePatientDto);
        } catch (error) {
            if (error instanceof Error) {
                
                return {
                    statusCode: 400,
                    responseMessage: 'request handle failed',
                    message: error.message
                };
            } else {
                return {
                  status: 500,
                  responseMessage: 'server error try again later',
                  error
                };
            }
        }
    }   

    @Delete(':patientId')
    async getPatientAndDelete(
        @Param('patientId') patientId: string
    ): Promise<any> {
        try {
            return await this.patientsService.deletePatient(patientId);
        } catch (error) {
            if (error instanceof Error) {
                
                return {
                    statusCode: 400,
                    responseMessage: 'request handle failed',
                    message: error.message
                };
            } else {
                return {
                  status: 500,
                  responseMessage: 'server error try again later',
                  error
                };
            }
        }
    }   
}
