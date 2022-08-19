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


# Assignment 3 - React Query 사용하기

- [x] React Query 적용해서 API 호출 적용해보기

# 개선 사항

## 과제 참고 사항

1. 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.

2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가짐)

3. 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.
