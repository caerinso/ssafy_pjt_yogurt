

**SSAFY 공통 프로젝트 빈티지 라이브 커머스 쇼핑몰 Yogurt**

# **Yogurt**

![Untitled (4)](https://user-images.githubusercontent.com/110217380/230720621-8f2a4936-7d8c-4f04-846d-64dd563b1d01.png)

### 요거트

삼성 청년 SW 아카데미 공통 프로젝트

2022.01.02 ~ 2022.02.17

[UCC](https://youtu.be/8l9KzG_cTjI)   | [시연영상](https://youtu.be/JyJoy9jd6KE) | [Notion](https://www.notion.so/Common-Project-fa5336afd3f141c095e18b9affd35ab0)

## 서비스 배경

혹시 빈티지 물건을 인스타 라이브에서 구매한 경험이 있나요?

빈티지 물건을 인스타 라이브를 통해 구매하게 된다면 판매자와 구매자 모두 결제에 대한 UI가 없어 불편한 거래를 할 수 밖에 없습니다.

또한 물건이 팔렸는지 안팔렸는지 제대로 확인하기 어려운 경우가 많았습니다.

이러한 이유로 “**Yogurt**”를 서비스하게 되었습니다.

## 서비스 설명

우유를 발효시켜 요거트를 만들 듯이 낡은 옷도 유행을 다시 타면 다시 입을 수 있습니다.

그러한 특징을 담고자 요거트라는 이름을 담게 되었습니다.

‘**Yogurt**’는 판매자는 직접 상점에서 라이브를 진행하여 홈쇼핑처럼 물건을 판매할 수 있습니다.

또한 구매자는 직접 상점에 가지 않더라도 라이브를 통해 원하는 물건과 쇼핑몰에 있는 물건을 구매할 수 있습니다.

## 개발 환경 및 기술 스택

### FE

- HTML
- CSS
- JavaScript
- Node.js
- React
- Redux
- Openvidu

### BE

- Java11
- SpringBoot
- Gradle
- JPA
- Mysql
- Swagger

### CI/CD

- AWS EC2
- Docker
- Jenkins
- Nginx

### 버전/이슈 관리

- Jira
- Gitlab

### TOOL

- Postman
- Figma

## 서비스 구조도


![Mask group](https://user-images.githubusercontent.com/110217380/230720618-85431448-0d58-4517-a92a-ba30ad6ca135.png)

## 주요 기능


### 랜딩 페이지

![Untitled (5)](https://user-images.githubusercontent.com/110217380/230720617-da2c8878-7f5a-41a9-bd8b-470f4138c1db.png)
- 실시간 라이브, 인기상품, 신상품 순으로 나열되며 물건이 3개 이상일 경우 캐러셀 형태로 넘길 수 있습니다.

### 물건 상세 페이지

![Untitled (6)](https://user-images.githubusercontent.com/110217380/230720616-4afd60a4-fa03-44b8-9f61-9961d7da4e43.png)

- 물건의 설명들이 나타나며 해당 상점의 다른 상품들까지 출력됨. 찜 기능과 장바구니 기능 구매까지 연동해두었습니다.

### 결제 페이지

![Untitled (7)](https://user-images.githubusercontent.com/110217380/230720614-0a464a42-d1c6-47fa-98d3-b862251feaef.png)
![Untitled (8)](https://user-images.githubusercontent.com/110217380/230720639-6cb7bd5a-b936-4a09-a2ee-3840f73faf99.png)

- 결제 페이지는 다음과 같이 카카오페이로 구현하였으며 카카오 API를 사용하여 결제까지 되도록 구현했습니다.




### 상점 모아보기

![Untitled (9)](https://user-images.githubusercontent.com/110217380/230720637-c92b56d0-303d-4eff-a970-e3b834f1315e.png)

- 하단에 상점을 누르게 되면 인기 순으로 상점들이 출력됩니다.

### 알림

![Untitled (10)](https://user-images.githubusercontent.com/110217380/230720636-19562b88-bd30-4264-9d5a-023845ee7a1b.png)

- 좋아요 해둔 상점에서 라이브방송이 시작되면 다음과 같은 알림이 생겨납니다.

### 프로필

![Untitled (11)](https://user-images.githubusercontent.com/110217380/230720634-1bc2c420-c43b-4cb1-97a4-de98d6bc5b39.png)

- 프로필 화면에서 구매한 물품 리뷰를 작성할 수 있고 장바구니에 담아둔 물건을 결제할 수 있습니다.
- 또한 찜해둔 물건과 즐겨찾기 해둔 상점들을 확인할 수 있습니다.

### 카테고리

![Untitled (12)](https://user-images.githubusercontent.com/110217380/230720633-2153bc5c-af03-4173-9c7a-5143134fa300.png)

- 지정해둔 6개의 브랜드와 그 하위 카테고리들이 있습니다. 누르면 해당 브랜드의 물건이나 해당 카테고리의 물건들을 볼 수 있습니다.

### 검색
![Untitled (13)](https://user-images.githubusercontent.com/110217380/230720631-b879a82d-1233-4696-9911-07962d77af83.png)

- 검색 페이지입니다. 브랜드 명이나, 상점이름, 상품이름이 있으면 해당 하는 것을 출력해줍니다.

## 프로젝트 산출물

- Figma
    ![Untitled (1) (1)](https://user-images.githubusercontent.com/110217380/230720628-efdfe505-9893-4d8e-8714-5d8ee2e7120d.png)
  
- ERD
    
  ![대전2반_4팀_공통프로젝트 (3)](https://user-images.githubusercontent.com/110217380/230720627-6b82ff09-14b8-48d0-bf33-002b7767c16c.png)
    
- API Docs
    ![Untitled (15)](https://user-images.githubusercontent.com/110217380/230720624-6b474dcf-e833-45f0-9343-24fc1f4524f4.png)
![Untitled (14)](https://user-images.githubusercontent.com/110217380/230720625-532eacab-7d38-4d93-8708-b783f41fb80c.png)
    



