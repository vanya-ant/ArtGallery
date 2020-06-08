import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireStorage } from "@angular/fire/storage";
import { ItemsService } from "../../shared/services/items.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { IItem } from "../../shared/item";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";



@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  image: File = null;

  form: FormGroup;

  item: IItem;

  selectedCategory: string;

  downloadURL: Observable<string>;

  fb;

  options = [
    { name: "Paintings", value: "Paintings" },
    { name: "Photography", value: "Photography" },
    { name: "Illustration", value: "Illustration" },
    { name: "Sculpture", value: "Sculpture" },
    { name: "Prints", value: "Prints" },
    { name: "Textile", value: "Textile" },
    { name: "Design", value: "Design" },
    { name: "Jewelery", value: "Jewelery" },
  ]

  constructor(private afStor: AngularFireStorage,
              private formBuilder: FormBuilder,
             private itemsService: ItemsService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      artist: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  async create() {
    this.item.name = this.form.value.name;
    this.item.artist = this.form.value.artist;
    this.item.category = this.form.value.category;
    this.item.description = this.form.value.description;
    this.item.price = this.form.value.price;
    this.item.imageUrl = this.fb;

    await this.itemsService.createItem(this.item);
    await this.router.navigate(['all']);
    this.toastr.success('Successfully created art-item!')
  }

  run() {
    const category = document.getElementById("category");

  }

  async upload(event) {
      const file = event.target.files[0];
      const filePath = `${this.selectedCategory}/`;
      const fileRef = this.afStor.ref(filePath);
      const task = this.afStor.upload(filePath, file);
      task
        .snapshotChanges()
        .pipe(finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
          })
        }))
        .subscribe(url => {
          if (url) {
            this.fb = url;
          }
         })
  }
}
