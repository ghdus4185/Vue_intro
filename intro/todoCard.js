// todo-card (자식)컴포넌트
Vue.component('todo-card',{
  template: `
    <div>
      <h1>{{title}}</h1>
      <h2>{{content}}</h2>
    </div> 
  `,
  // 데이터를 오브젝트로 쓰는게 아니라 펑션으로 쓰는 이유는 
  // 데이터를 독립적으로 사용하기 위해서다
  data: function(){
    return {

    }
  },
  methods: {

  },
  props: {
    title: {
      type: String,
      required: true,
      validator: function(input){
        if (input.length < 5){
          return false
        }
        return true
      }
    }, 
    content: String
  }
})