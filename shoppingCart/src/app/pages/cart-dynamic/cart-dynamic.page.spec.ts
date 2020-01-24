import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartDynamicPage } from './cart-dynamic.page';

describe('CartDynamicPage', () => {
  let component: CartDynamicPage;
  let fixture: ComponentFixture<CartDynamicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDynamicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartDynamicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
