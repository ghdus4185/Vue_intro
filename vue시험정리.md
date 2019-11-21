```
#### 수업내용 + vue 공식문서 읽어보기
- vue 인스턴스의 속성 : name, data, template, el, methods 등

- 템플릿 문법: 
v-for="movie in movies" :key="movie.id"
v-if="username === 'admin'"
v-else-if="username === 'chang'"
v-else
- 디렉티브: 
v-text: 문자 그대로 보여준다
v-html: html태그를 적용해서 보여준다
v-bind: 속성을 다룰 때 사용
v-model: 양방향 데이터 바인딩을 공유할 때 사용
v-show: CSS의 display:none 기능과 동일


- computed와 watch: watch는 내가 보고있을 것을 정하고 그게 바뀌면 실행
computed는 computed안에 있는 값을 다시 계산해야 하면 실행

- 조건부 렌더링
v-show: 자주 바뀌는것에 씀 , 화면에는 보이질 않지만 사실 존재
v-if: 화면에도 안보이고 존재하지도 않음
- 리스트 렌더링
v-for
- 이벤트 핸들링
v-on
- 폼 입력 바인딩
v-model

- 컴포넌트 구조, props, emit 

:보내줄이름 = "가지고있는 이름"으로 보내주고
props: {부모로부터 받을 이름: {type:Object}}

this.$emit('올려줄이름', 올려줄정보)
<자식컴포넌트 :내려줄 이름 = "가지고 있는 이름" @자식이 올려준 함수 이름 = "부모가사용할함수">

#### 프로젝트
- pjt09, youtube browser 프로젝트에서 props와 emit 이해하기
```

- 디렉티브 : v로 시작하는것들이 있고 그것들을 어떨때 어떻게 사용하는지
- computed와 watch : 
- 조건부 렌더링 : v-if, v-else,v-show
- 이벤트 핸들링: @click
- 폼 입력 바인딩: 양방향 바인딩
- 컴포넌트 구조: props로 데이터를 받을 때 어떤 이름을 써야하는지, emit으로 데이터를 보낼때 어떤이름으로 보내야할 지
- MVVM패턴을 씀, 장고에서는 MVC를 씀
- data, template, el, methods 등
- v-text :  텍스트 그대로 보여주는거
- v-html: 태그까지 같이 보여주는거
- v-show는 실제로 렌더링 하지만 감춰주는거
- v-once