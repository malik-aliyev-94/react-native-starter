import {observable} from 'mobx';
class AppStore {
  @observable data = {
    'users': 12,
    'posts': 23,
    'comments': 98,
  };

  @observable modalVisible = false;

  constructor() {
    super.constructor();
    setInterval(()=>{
      this.increment();
    }, 1000);
  }

  increment() {
    if (this.data.users < 1000) this.data.users += 1;
    if (this.data.posts < 1000) this.data.posts += 1;
    if (this.data.comments < 1000) this.data.comments += 1;
  }

  showModal() {
    this.modalVisible = true;
  }

  hideModal() {
    this.modalVisible = false;
  }

}
export default new AppStore();
