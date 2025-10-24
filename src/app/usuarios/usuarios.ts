import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css'] 
})

export class Usuarios implements OnInit{

  users: User[] = [];
  userForm!: FormGroup;
  isEditing = false;
  selectedUserId: number | null = null;

  constructor(private fb: FormBuilder,
              private userService: UserService) 
              {}

  ngOnInit() {
    this.initForm();
    this.getUsers();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;

    const formValue = this.userForm.value;

    if (this.isEditing && this.selectedUserId) {
      this.userService.updateUser(this.selectedUserId, formValue).subscribe(() => {
        this.getUsers();
        this.cancelEdit();
      });
    } else {
      this.userService.createUser(formValue).subscribe(() => {
        this.getUsers();
        this.userForm.reset();
      });
    }
  }

  editUser(user: User): void {
    this.userForm.patchValue(user);
    this.isEditing = true;
    this.selectedUserId = user.id;
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();
    });
  }

  cancelEdit(): void {
    this.userForm.reset();
    this.isEditing = false;
    this.selectedUserId = null;
  }

}