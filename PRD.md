# PRD: 드림비즈랩 (DreamBizLab) 홈페이지

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | 드림비즈랩 홈페이지 |
| 브랜드명 | DreamBizLab (드림비즈랩) |
| 사업자명 | 케이피제이 |
| 사업자등록번호 | 267-10-02880 |
| 로컬 경로 | `F:\pola_homepage\5.14th_parkhyunsuk_dreambizlab` |
| 웹사이트 | dbizlab.co.kr |
| GitHub | https://github.com/jeongcheck365/dbizlab |
| Vercel | https://vercel.com/dbizlabs-projects/dbizlab |
| 작성일 | 2025-12-30 |

---

## 연락처 정보

| 항목 | 내용 |
|------|------|
| 대표번호 | 1551-2889 |
| 휴대폰 | 010-7257-9487 |
| 이메일 | bibiwos@naver.com |
| 주소 | 경기도 수원시 권선구 동수원로 145번길 204호 |

---

## 브랜드 컬러

### 컬러 팔레트
```css
:root {
  /* Primary - 네이비 블루 */
  --primary: #2A5278;
  --primary-light: #3A6A90;
  --primary-dark: #1C3654;
  --primary-pale: #E3EDF5;

  /* Accent - 골든 오렌지 */
  --accent: #D49B4E;
  --accent-light: #DEAE6B;
  --accent-dark: #B07C35;
  --accent-pale: #FAF0E3;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #2A5278 0%, #3A6A90 100%);
  --gradient-hero: linear-gradient(135deg, #2A5278 0%, #1C3654 100%);
  --gradient-accent: linear-gradient(135deg, #D49B4E 0%, #DEAE6B 100%);
}
```

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Styling | Tailwind CSS + Custom CSS |
| Backend | Cloudflare Workers |
| Database | Airtable |
| Storage | Cloudflare R2 |
| Hosting | Vercel |
| Version Control | GitHub |

---

## 환경변수 현황

| 변수명 | 상태 | 용도 |
|--------|------|------|
| WORKERS_URL | ✅ | dbizlab.jeongcheck365.workers.dev |
| CLOUDFLARE_API_TOKEN | ✅ | Cloudflare API |
| CLOUDFLARE_ACCOUNT_ID | ✅ | ceaccbba2547f2c6a871a003f5c55a71 |
| AIRTABLE_TOKEN | ✅ | Airtable API |
| AIRTABLE_BASE_ID | ✅ | appFGupCEadYZPk0i |
| AIRTABLE_TABLE_ID | ✅ | tblwV6AZCvTM1R3kg |
| GITHUB_TOKEN | ✅ | GitHub API |
| SSH_KEY | ✅ | GitHub 배포 |
| VERCEL_TOKEN | ✅ | Vercel 배포 |
| ADMIN_PASSWORD | ✅ | bi9360573@ |
| R2_ACCESS_KEY_ID | ⏸️ | 카드 등록 후 |
| R2_SECRET_ACCESS_KEY | ⏸️ | 카드 등록 후 |
| R2_PUBLIC_URL | ⏸️ | 카드 등록 후 |

---

## 개발 단계 체크리스트

### Phase 0: 환경 설정 ✅
- [x] 프로젝트 폴더 생성
- [x] 컬러 가이드 작성 (color-guide.html)
- [x] 사업자 정보 정리 (business-info.md)
- [x] .gitignore 설정
- [x] .env.local 환경변수 설정
- [x] PRD/TDD 문서 작성
- [ ] GitHub 레포지토리 생성
- [ ] SSH 키 GitHub 등록

---

### Phase 1: 기본 구조 복사 ✅ (2025-12-30 완료)
- [x] css/ 폴더 복사
  - [ ] styles.css (프론트엔드)
  - [ ] dashboard.css (관리자)
- [ ] js/ 폴더 복사
  - [ ] main.js
  - [ ] components.js
  - [ ] analytics.js
  - [ ] settings.js
  - [ ] image-loader.js
  - [ ] config.js (템플릿)
- [ ] api/ 폴더 복사
  - [ ] admin-auth.js
  - [ ] admin-logout.js
  - [ ] analytics.js
  - [ ] board.js
  - [ ] images.js
  - [ ] leads.js
  - [ ] popups.js
- [ ] dashboard/ 폴더 복사
  - [ ] index.html
  - [ ] analytics.html
  - [ ] board.html
  - [ ] images.html
  - [ ] leads.html
  - [ ] popups.html
  - [ ] post-edit.html
  - [ ] settings.html
- [ ] 설정 파일 복사
  - [ ] vercel.json
  - [ ] package.json
  - [ ] robots.txt
  - [ ] sitemap.xml

---

### Phase 2: 프론트엔드 HTML 복사 & 브랜드 적용
- [ ] index.html (메인 페이지)
  - [ ] 파일 복사
  - [ ] 컬러 변경 (KEAI → DreamBizLab)
  - [ ] 로고 교체
  - [ ] 연락처 정보 수정
  - [ ] 콘텐츠 수정
- [ ] company.html (회사소개)
  - [ ] 파일 복사
  - [ ] 컬러 변경
  - [ ] CEO 프로필 이미지 교체
  - [ ] 회사 정보 수정
- [ ] fund.html (자금지원)
  - [ ] 파일 복사
  - [ ] 컬러 변경
  - [ ] 콘텐츠 수정
- [ ] process.html (진행절차)
  - [ ] 파일 복사
  - [ ] 컬러 변경
  - [ ] 콘텐츠 수정
- [ ] pro.html (전문가소개)
  - [ ] 파일 복사
  - [ ] 컬러 변경
  - [ ] 콘텐츠 수정
- [ ] mkt.html (마케팅지원)
  - [ ] 파일 복사
  - [ ] 컬러 변경
  - [ ] 콘텐츠 수정
- [ ] post.html (블로그/게시판)
  - [ ] 파일 복사
  - [ ] 컬러 변경

---

### Phase 3: CSS 컬러 전체 치환
- [ ] css/styles.css
  - [ ] Primary 컬러 치환 (#0F4C81 → #2A5278)
  - [ ] Accent 컬러 적용 (#D49B4E)
  - [ ] 그라데이션 수정
- [ ] css/dashboard.css
  - [ ] Primary 컬러 치환
  - [ ] Accent 컬러 적용

---

### Phase 4: 대시보드 브랜드 적용
- [ ] dashboard/index.html
  - [ ] 로고 변경
  - [ ] 브랜드명 변경
- [ ] dashboard/*.html 전체
  - [ ] 헤더 로고/브랜드명 통일
  - [ ] 컬러 테마 적용

---

### Phase 5: 로고 & 이미지 교체
- [ ] 로고 파일 적용
  - [ ] 컬러로고.png → logo.png
  - [ ] 흰색로고.png → white_logo.png
- [ ] 파비콘 생성
  - [ ] favicon.ico 생성
  - [ ] favicon.png 생성
- [ ] CEO 프로필 이미지
  - [ ] ceo_profile.png 적용
- [ ] OG 이미지 제작 (선택)
  - [ ] og-home.png
  - [ ] og-company.png
  - [ ] og-fund.png
  - [ ] og-process.png
  - [ ] og-pro.png
  - [ ] og-mkt.png

---

### Phase 6: 콘텐츠 수정
- [ ] 푸터 정보 수정
  - [ ] 브랜드명: 드림비즈랩
  - [ ] 사업자명: 케이피제이
  - [ ] 사업자등록번호: 267-10-02880
  - [ ] 주소: 경기도 수원시 권선구 동수원로 145번길 204호
  - [ ] 대표번호: 1551-2889
  - [ ] 이메일: bibiwos@naver.com
- [ ] 헤더 정보 수정
  - [ ] 로고 이미지 경로
  - [ ] 대표번호
- [ ] 각 페이지 콘텐츠
  - [ ] 서비스 설명 텍스트
  - [ ] BAS 규칙 준수 확인

---

### Phase 7: API & Workers 설정
- [ ] js/config.js 설정
  - [ ] WORKERS_URL 설정
  - [ ] API endpoints 설정
- [ ] Cloudflare Workers 설정
  - [ ] dbizlab Worker 생성/확인
  - [ ] 환경변수 설정
- [ ] Vercel 환경변수 설정
  - [ ] AIRTABLE_TOKEN
  - [ ] AIRTABLE_BASE_ID
  - [ ] ADMIN_PASSWORD
  - [ ] R2 credentials (추후)

---

### Phase 8: 배포 & 테스트
- [ ] GitHub 레포지토리
  - [ ] 레포 생성 (dbizlab)
  - [ ] 코드 푸시
- [ ] Vercel 배포
  - [ ] 프로젝트 연결
  - [ ] 환경변수 설정
  - [ ] 배포 테스트
- [ ] 기능 테스트
  - [ ] 메인 페이지 로딩
  - [ ] 각 서브 페이지 확인
  - [ ] 문의 폼 테스트
  - [ ] 관리자 로그인 테스트
  - [ ] 대시보드 기능 테스트
- [ ] 반응형 테스트
  - [ ] 모바일 (320px~)
  - [ ] 태블릿 (768px~)
  - [ ] 데스크탑 (1024px~)

---

### Phase 9: SEO & 최적화 (선택)
- [ ] 메타 태그 설정
  - [ ] title 태그
  - [ ] description 태그
  - [ ] keywords 태그
- [ ] OG 태그 설정
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image
- [ ] 구조화된 데이터 (JSON-LD)
- [ ] robots.txt 수정
- [ ] sitemap.xml 수정
- [ ] 도메인 연결 (dbizlab.co.kr)

---

## 파일 구조

```
F:\pola_homepage\5.14th_parkhyunsuk_dreambizlab\
├── .env.local              # 환경변수 (git 제외)
├── .gitignore              # Git 제외 파일
├── PRD.md                  # 이 문서
├── business-info.md        # 사업자 정보
├── color-guide.html        # 컬러 가이드
├── 컬러로고.png             # 로고 원본
├── 흰색로고.png             # 흰색 로고 원본
├── ceo_profile.png         # CEO 프로필
│
├── index.html              # 메인 페이지
├── company.html            # 회사소개
├── fund.html               # 자금지원
├── process.html            # 진행절차
├── pro.html                # 전문가소개
├── mkt.html                # 마케팅지원
├── post.html               # 게시글 상세
│
├── css/
│   ├── styles.css          # 프론트엔드 스타일
│   └── dashboard.css       # 대시보드 스타일
│
├── js/
│   ├── main.js             # 메인 스크립트
│   ├── components.js       # 공통 컴포넌트
│   ├── analytics.js        # 분석 스크립트
│   ├── settings.js         # 설정 스크립트
│   ├── image-loader.js     # 이미지 로더
│   └── config.js           # API 설정
│
├── api/
│   ├── admin-auth.js       # 관리자 인증
│   ├── admin-logout.js     # 로그아웃
│   ├── analytics.js        # 분석 API
│   ├── board.js            # 게시판 API
│   ├── images.js           # 이미지 API
│   ├── leads.js            # 리드 API
│   └── popups.js           # 팝업 API
│
├── dashboard/
│   ├── index.html          # 대시보드 메인
│   ├── analytics.html      # 분석
│   ├── board.html          # 게시판 관리
│   ├── images.html         # 이미지 관리
│   ├── leads.html          # 리드 관리
│   ├── popups.html         # 팝업 관리
│   ├── post-edit.html      # 게시글 편집
│   └── settings.html       # 설정
│
├── public/
│   ├── favicon.ico
│   └── og/
│       └── og-home.png
│
├── vercel.json             # Vercel 설정
├── package.json            # 패키지 설정
├── robots.txt              # 검색엔진 설정
└── sitemap.xml             # 사이트맵
```

---

## BAS 규칙 (필수 준수)

### 금지 표현
- 성공사례, 성공금액, 성공률
- 대출알선, 대출소개, 서류대행
- 기업평가, 기업분석, 기업진단
- 정책자금, 정부정책자금
- 승인, 승인률

### 권장 표현
- 자금확보, 기업자금확보
- 역량파악, 파악, 안내, 코칭
- 확보 가능성
- 무료심사

### 필수 면책 문구
```
※ 정부정책자금 대행서비스가 아닙니다. 기업대출알선 서비스가 아닙니다.
```

---

## 버전 히스토리

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| 0.1 | 2025-12-30 | PRD 초안 작성, 환경변수 설정 완료 |

