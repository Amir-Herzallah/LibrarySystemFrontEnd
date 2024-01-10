import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

  transform(value: any[], startDate?: Date, endDate?: Date): any[] {
    debugger;
    if (!value || !startDate || !endDate)  {
      return value;
    }
     
    else return value.filter(item => {
      debugger;
      return item.borrow_Date_From >= startDate && item.borrow_Date_To <= endDate ;
     
    });
  }
}
