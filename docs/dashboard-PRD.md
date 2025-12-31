# DreamBizLab Dashboard PRD

## 1. Overview

### 1.1 Project Info
| Item | Value |
|------|-------|
| Brand | DreamBizLab (드림비즈랩) |
| Dashboard URL | https://admin.dbizlab.co.kr |
| Main Site | https://dbizlab.vercel.app |

### 1.2 Features (k-eai 기준, 이미지 관리 제외)
- [x] Dashboard Index (통계 대시보드)
- [x] Leads (접수 관리)
- [x] Board (게시판 관리)
- [x] Analytics (방문 통계)
- [x] Popups (팝업 관리)
- [x] Settings (설정)
- [ ] ~~Images (이미지 관리)~~ - 제외

---

## 2. Required Airtable Tables

### 2.1 고객정보 (Leads) - 기존 테이블 사용
| Field Name | Type | Description |
|------------|------|-------------|
| 기업명 | Single line text | Company name |
| 사업자번호 | Single line text | Business number |
| 대표자명 | Single line text | CEO name |
| 연락처 | Phone number | Phone |
| 이메일 | Email | Email |
| 업종 | Single line text | Industry |
| 설립연도 | Single line text | Founded year |
| 통화가능시간 | Single line text | Available time |
| 필요자금규모 | Single line text | Funding amount |
| 자금종류 | Multiple select | Funding type |
| 문의사항 | Long text | Inquiry |
| 개인정보동의 | Checkbox | Privacy consent |
| 상태 | Single select | Status (신규/진행중/완료/보류) |
| 메모 | Long text | Admin memo |

### 2.2 Board (게시판) - 신규 생성 필요
| Field Name | Type | Description |
|------------|------|-------------|
| title | Single line text | 게시글 제목 |
| slug | Single line text | URL 슬러그 |
| content | Long text | 본문 내용 (HTML) |
| excerpt | Long text | 요약 |
| thumbnailUrl | URL | 썸네일 이미지 |
| category | Single select | 카테고리 |
| status | Single select | published/draft |
| views | Number | 조회수 |
| publishedAt | Date | 발행일 |

### 2.3 Analytics (방문통계) - 신규 생성 필요
| Field Name | Type | Description |
|------------|------|-------------|
| date | Date | 날짜 |
| pageViews | Number | 페이지뷰 |
| visitors | Number | 방문자 |
| avgDuration | Number | 평균 체류시간 |
| bounceRate | Number | 이탈률 |
| source | Single line text | 유입 소스 |

### 2.4 Popups (팝업) - 신규 생성 필요
| Field Name | Type | Description |
|------------|------|-------------|
| title | Single line text | 팝업 제목 |
| imageUrl | URL | 팝업 이미지 |
| linkUrl | URL | 클릭 시 이동 URL |
| position | Single select | left/center/right |
| isActive | Checkbox | 활성화 여부 |
| startDate | Date | 시작일 |
| endDate | Date | 종료일 |
| priority | Number | 우선순위 |

---

## 3. Environment Variables (Vercel)

```env
# Airtable
AIRTABLE_TOKEN=patloJ0ZZbl07gfot.xxx
AIRTABLE_BASE_ID=appFGupCEadYZPk0i
AIRTABLE_TABLE_ID=tblXXX (Board 테이블 ID)

# R2 Storage
R2_ACCOUNT_ID=ceaccbba2547f2c6a871a003f5c55a71
R2_BUCKET_NAME=dbizlab
R2_ACCESS_KEY_ID=xxx
R2_SECRET_ACCESS_KEY=xxx
R2_PUBLIC_URL=https://pub-f4383ed498414dc59b27aeef0847aea6.r2.dev

# Admin
ADMIN_PASSWORD=xxx
```

---

## 4. API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/leads | GET | 접수 목록 조회 |
| /api/leads?id=xxx | GET | 접수 상세 조회 |
| /api/leads?id=xxx | PUT | 상태 업데이트 |
| /api/board | GET | 게시글 목록 |
| /api/board | POST | 게시글 작성 |
| /api/board?id=xxx | PUT | 게시글 수정 |
| /api/board?id=xxx | DELETE | 게시글 삭제 |
| /api/analytics | GET | 방문 통계 |
| /api/popups | GET | 팝업 목록 |
| /api/popups | POST | 팝업 등록 |
| /api/popups?id=xxx | PUT | 팝업 수정 |
| /api/popups?id=xxx | DELETE | 팝업 삭제 |
| /api/admin-auth | POST | 관리자 로그인 |

---

## 5. Implementation Checklist

### Phase 1: Airtable Setup
- [ ] Board 테이블 생성 (영어 필드명)
- [ ] Analytics 테이블 생성 (영어 필드명)
- [ ] Popups 테이블 생성 (영어 필드명)
- [ ] 고객정보 테이블에 상태/메모 필드 추가

### Phase 2: API Updates
- [ ] leads.js - BASE_ID, TABLE_NAME 수정
- [ ] board.js - BASE_ID, TABLE_ID 수정
- [ ] analytics.js - BASE_ID, TABLE_ID 수정
- [ ] popups.js - BASE_ID, R2 설정 수정
- [ ] 모든 API에서 R2 버킷명 dbizlab으로 변경

### Phase 3: Vercel Settings
- [ ] 환경변수 설정 (AIRTABLE_TOKEN, R2 keys 등)
- [ ] admin.dbizlab.co.kr 서브도메인 확인

### Phase 4: Testing
- [ ] 관리자 로그인 테스트
- [ ] 접수 목록 조회
- [ ] 게시글 CRUD
- [ ] 팝업 CRUD
- [ ] 통계 조회

---

## 6. Files to Modify

```
api/
├── leads.js      ← BASE_ID 수정 완료
├── board.js      ← BASE_ID, TABLE_ID 수정 필요
├── analytics.js  ← BASE_ID, TABLE_ID 수정 필요
├── popups.js     ← BASE_ID, R2 설정 수정 필요
├── generate-post.js ← BASE_ID 수정 필요
├── cron-analytics.js ← BASE_ID 수정 필요
└── sitemap.js    ← BASE_ID 수정 필요

public/dashboard/
├── index.html    ← 이미지 관리 메뉴 제거
├── leads.html
├── board.html
├── analytics.html
├── popups.html
├── settings.html
├── post-edit.html
└── images.html   ← 삭제 또는 비활성화
```

---

## 7. Notes

- 폼 제출은 한글 필드명 (Worker에서 처리)
- 대시보드 API는 영어 필드명 권장 (Board, Analytics, Popups)
- 고객정보 테이블은 기존 한글 필드명 유지 (폼과 동기화)
