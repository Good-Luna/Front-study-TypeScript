# 타입 스크립트 
강사님 페이지 : https://slides.com/woongjae/ts2021 
참고 페이지
1. <https://jake-seo-dev.tistory.com/206>
2. 
----
## (기본 환경에서) 시작하기
- 연습
- .ts 파일 생성후 
- tsc test.ts 실행하면 동일 선상에 같은 이름의 js 파일 생성됨

- 실전
- tsc --init 실행 : Created a new tsconfig.json
- npm init -y : npm프로젝트 시작 
- npm i typescript 하면 node_modules 내부에 타입스크립트 파일 생성됨
- bon 내부에 tsc 있음
- npx tsc

----

## (vs code에서) 시작하기

1. npm init -y : package.json 생성
2. npm i typescript -D : package-lockjson 생성 (개발용어 명시됨)  
    - 내부에 스크립트 내용 변경
    ```
    "scripts": {
    "build": "tsc",
    "start": "tsc && node build/index.js",
    "dev": "ts-node src/index"
   },
   
3. ts 파일 생성 
4. npx tsc --init :루트경로에 tsconfig.json  파일 생성
5. ts파일 작업 후 npx tsc 해주면 동일한 이름의 js 파일 생성된다.
6. npm start 
7. 파일 실행 확인 node 파일명.ts


---
## symbol 사용시
- tsconfig.jspn 수정
    ```
    "lib": ["ES2015","DOM"],  

---
## null 값 할당
- tsconfig.jspn 수정
    ```
    "strict": true,  
    ```
    부분을 주석처리하면 되지만 주석 제거