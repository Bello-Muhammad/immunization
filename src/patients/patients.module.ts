import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient, PatientSchema } from './patients.schema';
import { PatientRepository } from './patients.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema}])],
  providers: [PatientsService, PatientRepository],
  controllers: [PatientsController]
})
export class PatientsModule {}
