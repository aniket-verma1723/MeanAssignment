import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {
  menuForm: FormGroup;
  categories: string[] = ['Mini Thali', 'Meals', 'Snacks'];
  miniThali: any;
  meals: any;
  snacks: any;
  isEdit: boolean= false;
  isCreate: boolean = false;
  constructor(
    public fb: FormBuilder,
    public menuService: MenuService
  ) { }


  ngOnInit(): void {
    this.createFormGroup();
    this.getMenus();
  }
  createFormGroup() {
    this.menuForm = this.fb.group({
      uuid:[''],
      name: ['',Validators.required],
      small: ['',Validators.required],
      large: ['',Validators.required],
      category: ['',Validators.required]
    })
  }
  resetForm() {
    this.menuForm.reset();
  }
  onSubmit() {
    if (this.menuForm.invalid) {
      alert('please enter required fields');
      return
    }
   
    const service = this.isEdit ? this.menuService.updateMenu(this.menuForm.value) :
    this.menuService.addMenu(this.menuForm.value);
    service.subscribe(res => {
      alert(this.isEdit? 'Menu Updated!': 'Menu Added!');
      this.resetForm();
      this.getMenus();
    })
  }

  openForm(){
    this.isCreate = true;
  }

  getMenus() {
    this.menuService.getMEnuByCategory('Mini Thali').subscribe(res => {
      this.miniThali = res;
    });
    this.menuService.getMEnuByCategory('Meals').subscribe(res => {
      this.meals = res;
    })
    this.menuService.getMEnuByCategory('Snacks').subscribe(res => {
      this.snacks = res;
    })
  }

  onEdit(menu) {
    this.isEdit = true;
    this.isCreate = true;
    this.menuForm.patchValue({
      uuid: menu.uuid,
      name : menu.name,
      small:menu.small,
      large:menu.large,
      category:menu.category
    })
    // this.menuForm.setValue(menu);
  }

  onDelete(uuid: string) {
    this.menuService.deleteMenu(uuid).subscribe(res => {
        alert('Menu deleted!');
        this.getMenus();
     })
  }

}
