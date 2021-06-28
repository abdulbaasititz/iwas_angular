import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/core/utils/AppConstants';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes = AppConstants.routes;
  constructor(private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onLoginButtonClick(){
    localStorage.setItem('isLoggedIn','false');
    this.toastr.success("Logout Successfully");
    this.router.navigate(['/login']);
  }
}
