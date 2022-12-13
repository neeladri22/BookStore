import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any,args: any) {
    console.log(args)
    if(args=="All Books"){
      return value
    }else{
      args=args.toLowerCase();
    }
    return value.filter((book:any)=>{
      return book.bookName.toLowerCase().includes(args);
    })
  }


}
