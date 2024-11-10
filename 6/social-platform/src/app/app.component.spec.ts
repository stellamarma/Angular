import { AppComponent} from "./app.component";


describe('AppComponent',()=>{


  it('should have a define title',()=>{
    const component =new AppComponent();
    expect(component.title).toBeDefined();

  });


});