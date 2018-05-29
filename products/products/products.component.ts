import { Component, OnInit } from '@angular/core';
import {pDetails} from '../../shared/details';
import {CatalogService} from '../../shared/catalog.service'
import { Router,ActivatedRoute } from '@angular/router';
import 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[CatalogService]
})
export class ProductsComponent implements OnInit {
  newHer:pDetails;
  constructor(private appService:CatalogService,private route:ActivatedRoute) { }
  catalogid:number
  ngOnInit() {
    this.route.params.subscribe(params=>this.catalogid=+params["id"]);
    alert(this.catalogid);
    if(this.catalogid!=null && ! isNaN(this.catalogid)){
        this.appService.getproductsbyid(this.catalogid).
        subscribe((data) =>{
          this.newHer = data;
        });
    }
    else{
      this.appService.getproducts().
      subscribe(data=>{this.newHer = data});
    }
    // this.appService.getproducts()
    // .subscribe(data=> {this.newHer = data;
    // });
  }
}
//   this.route.params.subscribe( params => this.catalogid=+params["id"]);
// // alert(this.catalogid);
// console.log(this.catalogid);
// if(this.catalogid!=null && !isNaN(this.catalogid))
// {
// alert("Hi");
// this.cityservice.getproductsbyid(this.catalogid)
// .subscribe((products) => {
// this.products = products;
// }
// console.log(this.products)
// });
// } 
