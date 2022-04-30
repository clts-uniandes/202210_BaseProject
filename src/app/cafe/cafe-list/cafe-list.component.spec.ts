/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ],
      providers: [ CafeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    component.cafes = [
      new Cafe(
        faker.datatype.number(),
        faker.name.findName(),
        faker.lorem.word(),
        faker.address.county(),
        faker.word.adjective(),
        faker.datatype.float(),
        faker.image.imageUrl()
      ),
      new Cafe(
        faker.datatype.number(),
        faker.name.findName(),
        faker.lorem.word(),
        faker.address.county(),
        faker.word.adjective(),
        faker.datatype.float(),
        faker.image.imageUrl()
      ),
      new Cafe(
        faker.datatype.number(),
        faker.name.findName(),
        faker.lorem.word(),
        faker.address.county(),
        faker.word.adjective(),
        faker.datatype.float(),
        faker.image.imageUrl()
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table with header and 3 coffee varieties rows', () => {
    expect(debug.queryAll(By.css('table thead tr')).length).toBe(1);
    expect(debug.queryAll(By.css('table tbody tr')).length).toBe(3);
    expect(debug.query(By.css('table tbody tr td')).nativeElement.textContent).toEqual(component.cafes[0].nombre);
  });
});
