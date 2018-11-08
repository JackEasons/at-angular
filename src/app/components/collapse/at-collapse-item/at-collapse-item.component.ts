import {Component, Host, Input, OnInit, TemplateRef} from '@angular/core';
import {ExpandAnimation}                             from '../../animations/expand-animation';
import {AtCollapseComponent}                         from '../at-collapse.component';

@Component({
  selector: 'at-collapse-item',
  template: `
    <div (click)="open()" class="at-collapse__header">
      <i class="icon at-collapse__icon icon-chevron-right"></i>
      <ng-container *ngIf="titleIsString; else title">
        {{atTitle}}
      </ng-container>
      <ng-template #title>
        <ng-template [ngTemplateOutlet]="atTitle"></ng-template>
      </ng-template>
    </div>
    <div class="at-collapse__body" [@expandAnimation]="expandState">
      <div class="at-collapse__content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
      `:host {
      display: block;
    }`
  ],
  host: {'[class.at-collapse__item]': 'true', '[class.at-collapse__item--active]': 'this._atOpen'},
  animations: [ExpandAnimation]
})
export class AtCollapseItemComponent implements OnInit {


  ngOnInit() {
  }

  @Input() private _atOpen = true


  @Input() atTitle: string | TemplateRef<any>


  get titleIsString() {
    return !(this.atTitle instanceof TemplateRef)
  }

  open() {
    this.atOpen = !this._atOpen
  }


  get atOpen(): boolean {
    return this._atOpen;
  }

  set atOpen(value: boolean) {
    if (value) {
      this.at_collapse.setAllClose();
    }
    this._atOpen = value;
  }

  constructor(@Host() private at_collapse: AtCollapseComponent) {
    this.at_collapse.pushItems(this)
  }


  get expandState() {
    return this._atOpen ? 'expand' : 'hidden'
  }

}
