import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(article: any[], term:string): any {
    return article.filter(function(article){

      if(term == undefined)
      {
        return article
      }
      return article.title.includes(term);
    });
  }

}
