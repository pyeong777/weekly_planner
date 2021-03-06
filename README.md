# 📅 Vanilla JS로 구현한 주간 플래너


![KakaoTalk_20211216_010945449](https://user-images.githubusercontent.com/80046065/146222357-61bbe7d7-1de1-4e11-99ed-5d3032f7b26b.png)


URL : https://my-weekly-plan.netlify.app/ 

## 목표
- 자바스크립트를 통해 상태관리 가능한 애플리케이션 개발
- 자바스크립트 이벤트 처리
- 자바스크립트 돔 조작

<br>

## 🎯 step1 요구사항 - 돔 조작과 이벤트 핸들링으로 계획 관리하기

- [ ] 새로운 계획을 확인 버튼 또는 엔터키 입력으로 추가한다.
  - [ ] 계획이 추가되고 나면, input은 빈 값으로 초기화한다.
  - [ ] 사용자 입력값이 빈 값이라면 추가되지 않는다.
- [ ] 계획의 수정 버튼을 눌러 이름을 수정할 수 있다.
  - [ ] 계획 수정시 브라우저에서 제공하는 `prompt` 인터페이스를 활용한다.
  - [ ] 수정버튼 클릭 후 취소할 경우 반환되는 null값을 처리해준다.
- [ ] 계획의 삭제 버튼을 이용하여 삭제할 수 있다.
  - [ ] 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한다.
- [ ] 총 갯수를 count하여 상단에 보여준다.


## 🎯 step2 요구사항 - 상태 관리로 계획 관리하기

- [ ] [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)에 데이터를 저장하여 새로고침해도 데이터가 남아있게 한다.
- [ ] 각각의 요일별로 계획들을 관리할 수 있게 만든다.
  - [ ] 페이지에 최초로 접근할 때는 월요일 계획이 먼저 보이게 한다.
- [ ] 완료 상태인 경우를 보여줄 수 있게, 완료 버튼을 추가하고 `finish` class를 추가하여 상태를 변경한다.
- [ ] 플래너 초기화 버튼을 클릭시, localStorage에 저장되어있는 데이터들을 전부 삭제후, 페이지를 새로고침한다.
