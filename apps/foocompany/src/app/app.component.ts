import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { range } from '@org/utils'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  title = 'foocompany';

  ngOnInit(): void {
    console.log(range(40, 45));
  }
}
