# Access Token / Refresh Token

🔑 **Access Token** = 자주 쓰는 단기 출입증 / **Refresh Token** = 출입증을 재발급받는 마스터 키

</aside>

### JWT(Json Web Token)

- JWT는 토큰을 만드는 재료, Access/Refresh Token은 그 재료로 만든 용도별 토큰
- Session의 경우 요청마다 DB에서 확인하지만, JWT는 서명만 검증하여 DB 조회 없이 승인
  - 원래는 DB 저장 없이 사용되지만 Refresh Token의 경우 보안상 예외적으로 DB에 저장함
- 단, JWT는 암호화가 아니라 서명만 하는 것이므로 민감한 정보는 넣으면 안됨
  - 위조는 불가하지만, 열람은 가능하기 때문

---

### Access Token

- **사용자의 인증 상태를 증명하는 데 사용**
- 사용자가 로그인에 성공하면 발급되는 짧은 생명 주기
  - 탈취되어도 빠르게 무효화 할 수 있으므로 수명을 짧게 유지
    - 발급할 때 만료 시간 바뀜 → userId는 동일, 만료 시간 변동 (토큰 자체가 변동된 것으로 봄)
- API 요청 시 헤더에 포함되어 사용됨
  ```css
  fetch('/api/user', {
    headers: {
      Authorization: `Bearer ${accessToken}` //수동 첨부
    }
  })
  ```
- 메모리에 저장
- `localStorage`는 자바스크립트로 누구나 읽을 수 있어서, XSS 공격에 취약
  - LocalStorage와 Cookie의 차이
    | 항목 | localStorage | cookie |
    |------|-------------|--------|
    | 저장 위치 | 클라이언트(브라우저) | 클라이언트 + 서버로 전송 가능 |
    | 용량 제한 | 약 5~10MB | 약 4KB |
    | 만료 설정 | 수동으로 제거 전까지 유지 | expires 또는 max-age로 만료 가능 |
    | 자동 전송 여부 | 브라우저가 서버에 자동 전송 X | 모든 요청에 헤더에 포함되어 전송됨 |
    | 보안 | 상대적으로 덜 민감함 | 민감 정보 저장 시 보안 설정 필요 |
    | 사용 목적 | 주로 클라이언트 전용 데이터 저장 | 인증 정보, 세션 유지 등 | - 메모리에 저장하면 새로고침시 사라져서 재발급 로직이 필요함

---

### Refresh Token

- **AccesToken이 만료되었을 때 새로운 토큰을 발급하기 위한 인증 수단**
- 비교적 긴 유효기간, 서버에서만 관리하거나 http only , cookie 로 저장
  - http only: 일반 쿠키와 달리 자바스크립트로 읽을 수 없으므로, XSS 공격을 차단
  - 브라우저가 서버에 요청할 때 자동으로 실어 보냄
    ```css
    fetch('/api/refresh') //자동으로 배정
    ```
- 서버 DB에 저장 및 검증
  - Refresh Token을 서버 DB에도 저장하면 탈취시 서버에서 강제 무효화 가능
  - 반면, 서버가 토큰에 서명만 하고 발급한 후 저장하지 않는 방식을 사용하면 탈취 사실을 알아도 만료시간까지 계속 사용 가능
- Refresh Token Rotation (탈취 감지)
  - Refresh Token을 한 번 쓰면 새걸로 교체하는 방식으로, 같은 토큰이 두번 사용될 경우 탈취로 간주하여 즉시 차단
