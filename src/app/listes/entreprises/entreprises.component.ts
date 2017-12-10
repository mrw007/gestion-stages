import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { Entreprise } from 'app/Entities/Entreprise/entreprise';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent {

  constructor(private entrepriseService: EntrepriseService, private router: Router, private alertService: AlertService) {
  }

  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  entreprises: Entreprise[];
  id: any;

  ngOnInit(): void {
    this.getAllEntreprises();
  }

  getAllEntreprises() {
    this.entrepriseService.getAllEntreprises("3").subscribe(
      data => {
      this.entreprises = data;
        this.onChangeTable(this.config);
      },
      errorCode => this.statusCode = errorCode);

  }
  refEntreprise(id) {
    this.id = id;
    this.entrepriseService.deleteEntrepriseById(id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.danger('Entreprise supprimé');
        this.router.navigateByUrl('/DummyComponent', { skipLocationChange: true }).then(() =>
          this.router.navigateByUrl("/listes/entreprises"));

      },
      errorCode => this.statusCode = errorCode
      );
  }
  
  public rows: Array<any> = [];
  public columns: Array<any> = [
    {
      title: 'Nom Entreprise', name:'nom_ent',filtering: { filterString: '', placeholder: 'Filter par Nom' }
    },
    { title: 'Nom', name: 'nom'},
    { title: 'Prénom', name: 'prenom'},
    { title: 'Email', name: 'email', filtering: { filterString: '', placeholder: 'Filter par email' }},
    { title: 'Téléphone Entreprise', name:'tel_ent' },
    { title: 'Adresse Entreprise', name:'adresse_ent' }
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' }
  };


  public changePage(page: any, data: Array<any> = this.entreprises): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

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
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
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

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.entreprises, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }

}

