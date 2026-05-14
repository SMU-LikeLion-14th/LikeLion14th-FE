## Week 6. Trouble Shooting

### Task : useState와 커스텀 훅을 사용한 리팩토링

#### 문제 상황: 커스텀 내 훅 호출 누락

- 훅 파일을 import 하고 컴포넌트 함수 내부에서 호출하는 과정에서 문제 발생
- ReferenceError: handleLikeClick is not defined 발생

#### 원인 분석

- 훅의 실행 결과물을 구조 분해 할당으로 가져오지 않은 채, 훅 내부의 변수명(isLiked, likeCount 등)을 컴포넌트에서 직접 참조하려고 시도함

#### 해결 방법

- 훅을 호출하고 리턴값을 변수에 '할당' 해야 함

```javascript
const { likeCount, isLiked, handleLikeClick } = useLike();
```

#### 객체 구조 분해 할당

자바스크립트 객체의 속성을 꺼내서 동일한 이름의 독립된 변수로 만드는 과정을 의미

```javascript
const { key1, key2 } = function();
```

- 함수가 { key1: 값, key2: 값 } 형태의 객체를 반환할 때, 이를 한 줄로 간결하게 각각의 변수에 담는 방식
