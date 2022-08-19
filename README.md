# 프리온보딩 프론트엔드 챌린지 8월
- CRUD w React Query

## Assignment 2 - Login / SignUp Pages

![LogInPage](https://user-images.githubusercontent.com/69336797/185669845-bc42f237-dc3b-48cf-9d76-76e74a343dfe.png)
- Header 를 만들어서 우측 상단에 SignUP / SignIn 을 선택할 수 있게 하였습니다. 
![LogInPage_Filled](https://user-images.githubusercontent.com/69336797/185671406-d3d29c30-cdba-4ca0-be9c-d39d669b6b4a.png)
- 이메일 조건과 비밀번호 조건이 맞으면 'x' 표시가 사라지고 두개의 조건 충족시에 선택한 조건에 맞는 제출 버튼이 생기게 하였습니다. 
- 응답으로 받은 토큰은 로컬 스토리지에 저장하였습니다. 
- Header에서 Token의 유무를 검사하여 어느 페이지에서든 토큰이 사라지면 로그인 페이지로 넘어가도록 설계 하였습니다.
  - Token을 관리하는 법에 대해서는 추가적인 공부와 수정이 필요하다고 생각됩니다.
 
## Assignment 2 - Todo List Page

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
    - 새로고침과 Todo를 조회할때 useParams과 useNavigate를 사용하였습니다.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

# Assignment 3 - React Query 사용하기

- [x] React Query 적용해서 API 호출 적용해보기

# 개선 사항

## 과제 참고 사항

1. 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.

2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가짐)

3. 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.
