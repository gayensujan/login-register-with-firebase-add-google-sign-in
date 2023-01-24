import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.scss']
})
export class DeshboardComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  register(){
    this.auth.logout();
  }

}
