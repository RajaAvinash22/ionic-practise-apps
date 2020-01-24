import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeDynamicPage } from './home-dynamic.page';

describe('HomeDynamicPage', () => {
  let component: HomeDynamicPage;
  let fixture: ComponentFixture<HomeDynamicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDynamicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDynamicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
