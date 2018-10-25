import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string): any {
    if(!filterField || !keyword) {
      return list;
    }
    let projects: any;
    let result:any[] = [];
    let allProjects = list
    .map( item => {
      return item.data;
    })
    .map(data => {
      return data;
    });
    const flatten = allProjects => allProjects.reduce(
      (acc,val) => acc.concat(Array.isArray(val)? flatten(val):val),[]
    )
    console.log(flatten(allProjects));
    projects =  flatten(allProjects).filter( item => {
      let fiedlValue = item[filterField];
      return fiedlValue.indexOf(keyword) >= 0;
    });
    if(projects.length) {
      result = [
        {name: "result",
        data: projects }
      ]
    }
    return result;
  }

}
