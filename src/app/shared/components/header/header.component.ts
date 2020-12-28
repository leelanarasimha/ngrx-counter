import { AuthService } from './../../../services/auth.service';
import { isAuthenticated } from './../../../auth/state/auth.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { autoLogout } from 'src/app/auth/state/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }
}
