# 프리온보딩 프론트엔드 챌린지 8월
- CRUD w React Query

## Assignment 1 - Login / SignUp Pages

![LogInPage](https://user-images.githubusercontent.com/69336797/185669845-bc42f237-dc3b-48cf-9d76-76e74a343dfe.png)
- Header 를 만들어서 우측 상단에 SignUP / SignIn 을 선택할 수 있게 하였습니다.

![LogInPage_Filled](https://user-images.githubusercontent.com/69336797/185671406-d3d29c30-cdba-4ca0-be9c-d39d669b6b4a.png)
- 이메일 조건과 비밀번호 조건이 맞으면 'x' 표시가 사라지고 두개의 조건 충족시에 선택한 조건에 맞는 제출 버튼이 생기게 하였습니다. 
- 응답으로 받은 토큰은 로컬 스토리지에 저장하였습니다. 
- Header에서 Token의 유무를 검사하여 어느 페이지에서든 토큰이 사라지면 로그인 페이지로 넘어가도록 설계 하였습니다.
  - Token을 관리하는 법에 대해서는 추가적인 공부와 수정이 필요하다고 생각됩니다.
 
![SignUP_Result](https://user-images.githubusercontent.com/69336797/185676278-958c5085-fb9b-43d9-a7ee-4d5613d6eda3.png)
- 회원 가입 결과와 Error는 버튼 및에 나타나게 하였습니다. 
  - alert를 사용하면 확인을 누르면 동작이 멈추기 때문에 이렇게 설정하였습니다.
  - useMutation의 onSuccess와 onError를 통해 결과를 나타내었습니다.

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## Assignment 2 - Todo List Page

![TodoPAge2](https://user-images.githubusercontent.com/69336797/185677568-7f923bdd-a059-408f-87bf-612e389f0dc3.png)

- 왼쪽은 목록 / 오늘쪽은 상세 영역으로 설정하였습니다.
- 목록 리스트의 마지막에 있는 "+"를 통해서 ToDo를 생성할 수 있습니다.
- 리스트의 이름 옆에 'X'를 클릭해서 리스트를 한개씩 삭제할 수 있습니다.
- 목록에서 제목을 클릭하면 상세영역을 확인할 수 있습니다.
- 위의 화살표 버튼을 통해서 전에 확인했었던 상세목록을 조회할 수 있습니다.
 - useNavigator를 사용하였습니다.
 - 상세목록을 확인할때 URL을 바뀌게 하였습니다.
 - 목록을 조회할 때 URL도 변화합니다.

![TodoUpdate](https://user-images.githubusercontent.com/69336797/185678353-9ecd7f96-41d2-4781-8092-50ea43e59e07.png)

- 상세영역에서 Update 번튼을 통해서 없데이트 화면으로 넘어가 업데이트할 수 있습니다. 

- 수정되는 Todo의 내용이 목록에서도 실시간 반영될 수 있도록 useEffect를 활용하였습니다.

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

# Assignment 3 - React Query 사용하기

- Todo 첫 화면으로 갈때 TodoList를 받아올때는 useQuery를 사용하였습니다.
- 데이터를 보내서 응답을 받아오기 위해서는 useMutation을 사용하였습니다. 
 - onSuccess와 onError를 사용하여 응답 결과를 처리하였습니다. 

- [x] React Query 적용해서 API 호출 적용해보기


## 폴더 구조
```bash
src
 ┣ Header
 ┃ ┗ Header.tsx
 ┣ router
 ┃ ┣ SignIn.tsx
 ┃ ┗ Todos.tsx
 ┣ SignInpages
 ┃ ┣ API
 ┃ ┃ ┗ AuthApi.tsx
 ┃ ┣ Atoms
 ┃ ┃ ┗ AuthAtoms.ts
 ┃ ┣ Modals
 ┃ ┃ ┣ CompleteSignUP.tsx
 ┃ ┃ ┗ SignInErrorModal.tsx
 ┃ ┣ SignInForm.tsx
 ┃ ┣ SignInPage.tsx
 ┃ ┗ SignUpForm.tsx
 ┣ Styles
 ┃ ┗ GlobalStyles.tsx
 ┣ Theme
 ┃ ┣ styled.d.ts
 ┃ ┗ theme.ts
 ┣ Todos
 ┃ ┣ API
 ┃ ┃ ┗ TodosApi.tsx
 ┃ ┣ Atoms
 ┃ ┃ ┗ TodosAtoms.ts
 ┃ ┣ CreateTodo.tsx
 ┃ ┣ DeleteTodo.tsx
 ┃ ┣ TodoDetail.tsx
 ┃ ┣ TodoList.tsx
 ┃ ┗ UpdateTodo.tsx
 ┣ App.tsx
 ┗ index.tsx
 ```
 
 - SignIn Page와 Todos를 나누어서 구조를 정리하였습니다.
 - Header는 어느페이지에서도 쓰이기 때문에 트리의 위쪽에 두었습니다.
 - 각각의 페이지의 파일에 들어가면 세부 기능과 페이지 별로 구분을 하여 정리하였습니다.
 
 
