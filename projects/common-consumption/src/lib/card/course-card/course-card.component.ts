import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { courseData } from './course-card-data';
import { ICourse, ICardClick } from '../models';


@Component({
  selector: 'sb-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss','../library-card/library-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course: ICourse = courseData;
  @Input() isMobile = false;
  @Input() isOffline = false;
  @Input() cardImg = courseData.appIcon;
  @Input() section = '';
  @Input() isLoading:boolean;

  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  onClick(event: MouseEvent) {
      this.cardClick.emit({ event: event, data: this.course });
  }

}
