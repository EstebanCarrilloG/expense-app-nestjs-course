import {Controller,Get,Post,Put,Delete} from "@nestjs/common"

@Controller("report/:type") //(controller decorator)
export class AppController{
  @Get() //(method decorator)
  getIncomeReports(){
    return[];
  }

  @Get(":id")
  getReportById(){
    return[]
  }

  @Post()
  createIncomeReport(){
    return "created"
  }
  @Put(":id")
  updateReport(){
    return "update"
  }

  @Delete(":id")
  deleteReport(){
    return "delete"
  }
  

}

//http://localhost:3000/ + controller decorator + method decorator
// report/income