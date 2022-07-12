thisisneverthat Website Clone 코딩 프로젝트입니다.💻

## **프로젝트 소개**

- 쇼핑몰인 만큼 사이트에서 상품의 이미지를 보여주는 것이 큰 부분을 차지
- 사이즈, 색상을 선택하여 장바구니에 넣는 기능이 필수적
- 남은 재고를 보여주어 소비자의 구매심리를 자극할 수 있게 구성

## **프로젝트 사이트**

- 🎈[**Codeisneverthat**](http://3.36.72.47:3000/)

### **개발 인원 및 기간**

- 개발기간 : 2022/6/20 ~ 2022/7/8
- 개발 인원 : 5명 (기능별 백 엔드, 프론트 엔드 교차 분배)
- 팀원: 김보경, 김형우, 성민규, 이주리, 최수진
- [프론트엔드 Github 링크](https://github.com/wecode-bootcamp-korea/justcode-5-1st-codeisneverthat-front)
- [백엔드 Github 링크](https://github.com/wecode-bootcamp-korea/justcode-5-1st-codeisneverthat-back)

### 팀원 역할 분담

- 김보경
    - front-end : Top20, collections
    - back-end : CART API
- 김형우
    - front-end : Main 페이지
    - back-end : Product 페이지 API, Top20 API
- 성민규
    - front-end : Product 페이지
    - back-end : 상품리스트 API
- 이주리
    - front-end : Cart 페이지
    - back-end : 로그인, 회원가입 API
- 최수진
    - front-end : 회원가입, 로그인, Nav, Footer, Search Bar
    - back-end : Cart API
    - front-end : Top20, collections
    - back-end : CART API

### **프로젝트 선정이유**

- 웹 사이트 중 가장 대표적인 이커머스 사이트를 구현함으로써 데이터 베이스부터 프론트까지 완성도 있는 사이트를 만드는 것을 목표로 함
- 재고 관리, 색상 별 이미지 보여주기 등 핵심적인 기능을 포함하여 개발자로서 고민할 기능들이 함축되어 들어 있음

## **적용 기술 및 구현 기능**

### **적용 기술**

> **Front-End** : Javascript, React.js, sass, slick, react-modal, create portal
> 

> **Back-End** : Node.js, express, Bcrypt, JWT, RESTful API
> 

### **데이터 모델링**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/abdf9716-395e-40a6-8863-62fcf3bca9fe/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71e98874-caad-4b7d-8a86-dc310c5f54d1/Untitled.png)

### **구현 기능**

**User**

**/signup & /login**

회원가입 및 로그인

- bcrypt 암호화
- JWT Acess Token 발행 및 전송
- Token을 통해 user_id 정보 식별
- 회원가입 유효성 검사 구현

**Product**

**/product**

- 제품 상세 정보를 읽어오는 기능 구현

**/collections**

- 카테고리별 상품 리스트를 읽어오는 기능 구현

**/top20**

- 판매량순 상위 20개의 상품 리스트를 읽어오는 기능 구현

**Cart**

**/cart**

- 사용자가 장바구니에 담아놓은 상품 정보(제품, 컬러, 사이즈, 수량)를 DB에 저장하여 관리
- 장바구니 내에서, 사용자가 수량을 변경하거나, 상품을 삭제하는 경우 DB 상에서도 연동되도록 기능 구현
- 제품 상세페이지에서 Add to Cart 버튼을 눌러 상품을 장바구니에 담으면 사용자 정보와 상품 상세 정보를 받아 DB에 저장할 수 있도록 기능 구현

## **Reference**

- 이 프로젝트는 [Thisisneverthat](http://thisisneverthat.com) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진은 [unsplash](https://images.unsplash.com)에서 사용하였습니다.
