# 다음 세션 요청문

## 복사해서 사용:
```
드림비즈랩 폼 테스트 진행해줘.
테스트 데이터로 폼 제출 후 Airtable/이메일/텔레그램 수신 확인.
NEXT_SESSION_REQUEST.md 파일에 상세 컨텍스트 있음.
```

---

## 이번 세션 완료 작업

### 폼 클래스명 교체
- ✅ `keai-form-*` → `dbizlab-form-*` 변경 완료
- ✅ CSS (styles.css) + HTML 5개 파일 변경
- ⏭️ mkt.html 제외

### Worker 설정 및 배포
- ✅ Worker 파일 생성 (`workers/index.js`)
- ✅ Worker 배포: https://dbizlab.jeongcheck365.workers.dev
- ✅ main.js Worker URL 수정

### 환경변수 추가
- ✅ TELEGRAM_BOT_TOKEN 추가
- ✅ TELEGRAM_CHAT_ID: -1002518719491

### main.js 수정
- ✅ Airtable Base ID: appFGupCEadYZPk0i
- ✅ 주소: 경기도 수원시 권선구 동수원로 145번길 204호
- ✅ 이메일 HTML 주소 수정

---

## 다음 세션 작업: 폼 테스트

### 테스트 항목
1. [ ] 폼 제출 테스트 (테스트 데이터)
2. [ ] Airtable 저장 확인
3. [ ] 고객 이메일 수신 확인
4. [ ] 담당자 이메일 수신 확인 (bibiwos@naver.com)
5. [ ] 텔레그램 알림 수신 확인

---

## 설정 정보

### Worker 설정
| 항목 | 값 |
|------|-----|
| Worker URL | https://dbizlab.jeongcheck365.workers.dev |
| Account ID | ceaccbba2547f2c6a871a003f5c55a71 |

### Airtable 설정
| 항목 | 값 |
|------|-----|
| Base ID | appFGupCEadYZPk0i |
| Table Name | 드림비즈랩 |
| Share URL | https://airtable.com/appFGupCEadYZPk0i/shrYmQV1BCzm4xw3u |

### Resend 설정
| 항목 | 값 |
|------|-----|
| FROM | 드림비즈랩 <noreply@mail.policy-fund.online> |
| 담당자 | bibiwos@naver.com |
| BCC | mkt@polarad.co.kr |

### Telegram 설정
| 항목 | 값 |
|------|-----|
| Chat ID | -1002518719491 |

---

## 프로젝트 정보
| 항목 | 값 |
|------|-----|
| 경로 | `F:\pola_homepage\5.14th_parkhyunsuk_dreambizlab` |
| 브랜드 | 드림비즈랩 (DreamBizLab) |
| GitHub | https://github.com/jeongcheck365/dbizlab |
| Vercel | https://dbizlab.vercel.app |
| 도메인 | dbizlab.co.kr |
