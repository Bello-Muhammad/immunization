import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PatientRepository } from './patients.repository';
import { Patient } from './patients.schema';
import { UpdatePatientDto } from './dto/updatePatient.dto';

@Injectable()
export class PatientsService {
    constructor(private readonly patientRepository: PatientRepository) {}

    async createPatient(body: any): Promise<Patient> {
        const {name, age, sex, maritalStatus, state, lga, address, contact } = body;

        return await this.patientRepository.create({name, age, sex, maritalStatus, state, lga, address, contact });
    }

    async getPatients(): Promise<Patient[]> {
        
        return await this.patientRepository.findMany({});
    }

    async getOnePatient(patientId: string): Promise<Patient> {
        let isPatient = await this.patientRepository.findOne({ _id: patientId });

        if(!isPatient) {
            throw new HttpException('patient not fuond', HttpStatus.NOT_FOUND)
        }

        return isPatient;
    }

    async updatePatient(patientId: string, patientUpdates: UpdatePatientDto): Promise<Patient> {
        const updatePatient = await this.patientRepository.findOneAndUpdate(
          { _id: patientId },
          patientUpdates
        );
    
        if (!updatePatient) {
          throw new HttpException(
            'unable to update patient details',
            HttpStatus.NOT_MODIFIED
          );
        }
    
        return updatePatient;
      }

  async deletePatient(patientId: string): Promise<Patient> {
    const isRemoved = await this.patientRepository.findOneAndDelete({ _id: patientId });

    if (!isRemoved) {
      throw new HttpException(
        'patient not removed',
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    return isRemoved;
  }
}
