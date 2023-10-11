import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { data, ReportType } from './data';
import { v4 as uuid } from 'uuid';

@Controller('report/:type') //(controller decorator)
export class AppController {
  @Get() //(method decorator)
  getAllReports(@Param('type') type: string) {
    console.log(type);
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  @Post()
  createIncomeReport(@Body() {amount, source}: {amount:number,source:string},@Param('type') type: string) {
    const newReport = {
      id:uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type:type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,

    }
    data.report.push(newReport);
    return newReport;
  }
  @Put(':id')
  updateReport() {
    return 'update';
  }

  @Delete(':id')
  deleteReport() {
    return 'delete';
  }
}

//http://localhost:3000/ + controller decorator + method decorator
// report/income
