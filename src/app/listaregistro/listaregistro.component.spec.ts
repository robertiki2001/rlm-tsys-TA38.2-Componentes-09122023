import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroComponent } from './listaregistro.component';

describe('ListaregistroComponent', () => {
  let component: ListaRegistroComponent;
  let fixture: ComponentFixture<ListaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
