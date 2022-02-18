import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
// import { MemberService } from 'src/app/services/member.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm!:FormGroup;
  members:any;
  id:any;

  constructor(private service : ProductService , private router : Router, private activatedRouter : ActivatedRoute) { }

  ngOnInit(): void {
      this.productForm = new FormGroup({
        name : new FormControl(),
        price : new FormControl(),
        picture: new FormControl()
      });

      this.activatedRouter.params.subscribe(params=>{
        this.id = params['id'];
      });
    
      this.service.getMemberById(this.id).subscribe((res)=>{
        this.members = res.data;
        console.log(this.members);
      });

  }

}


