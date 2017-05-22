import { observable,action } from 'mobx';

class AppState {
  @observable obj = {
    count : 0,
    name:'mobx'
  }
  @observable time = 0

  constructor() {
  }
  
  addCount = action(function addCount() {
    this.obj.count += 10;
  });
  
  ajaxTimestamp = action(function ajaxTimestamp(){
    $.ajax({
      url:'../timestamp.json',
      type:'get',
      dataType:'json',
      success:function(data){
        console.log(data.data.timestamp);
        this.time = data.data.timestamp
      }.bind(this)
    })
  })

  // resetTimer() {
  //   this.obj.count = 0;
  // }
}
export default AppState;
