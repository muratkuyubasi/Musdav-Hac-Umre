import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homeseven-courses',
  templateUrl: './homeseven-courses.component.html',
  styleUrls: ['./homeseven-courses.component.scss']
})
export class HomesevenCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  blogSlides: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
    }

}
