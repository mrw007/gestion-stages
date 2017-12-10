import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'app/Entities/Enseignant/enseignant.service';
import { Enseignant } from 'app/Entities/Enseignant/enseignant';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.scss']
})
export class EnseignantsComponent {
  
  
  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  enseignants: Enseignant[];
  public constructor(private enseignantService: EnseignantService) {
    
  }

  getAllEnseignants() {
       this.enseignantService.getAllEnseignants().subscribe(
               data =>{ this.enseignants = data;
                this.onChangeTable(this.config);},
               errorCode =>  this.statusCode = errorCode);  
              
  }
  public ngOnInit():void {
    this.getAllEnseignants();
    
  }

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {
      title: 'CIN',
      name: 'cin',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter par CIN'}
    },
    {title: 'Nom', name: 'nom', filtering: {filterString: '', placeholder: 'Filter par nom'}},
    {title: 'Prénom', name: 'prenom', sort: 'asc', filtering: {filterString: '', placeholder: 'Filter par prenom'}},
    {title: 'Téléphone', name: 'tel'},
    {title: 'Email', name: 'email' ,filtering: {filterString: '', placeholder: 'Filter par email'}},
    {title: 'Grade', name: 'grade'}
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''}
  };
  

  public changePage(page:any, data:Array<any> = this.enseignants):Array<any> {
    console.log("changepag",data);
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.enseignants, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }

}




