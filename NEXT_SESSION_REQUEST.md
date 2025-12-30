# 다음 세션 요청문 - 히어로 이미지 교체 + 리라이팅

## 복사해서 사용:

```
드림비즈랩 히어로 이미지 교체 및 리라이팅 작업

## 완료된 작업
- 히어로 이미지 6개 생성 완료 (public/images/hero/)
- CLAUDE.md 프로젝트 설정 완료

## 이번 세션 작업
1. 히어로 이미지 src 교체 (CSS/HTML)
2. 리라이팅 진행 (헤더/폼/푸터 제외)

상세: NEXT_SESSION_REQUEST.md 참조
```

---

## 완료된 작업 (클로드1)

### ✅ 히어로 이미지 생성
| 파일 | 위치 | 용량 |
|------|------|------|
| hero-index.webp | public/images/hero/ | 860KB |
| hero-company.webp | public/images/hero/ | 1020KB |
| hero-fund.webp | public/images/hero/ | 1038KB |
| hero-process.webp | public/images/hero/ | 996KB |
| hero-pro.webp | public/images/hero/ | 882KB |
| hero-mkt.webp | public/images/hero/ | 897KB |

### ✅ 문서 작성
- CLAUDE.md (프로젝트 필수 참조)
- docs/rewriting-rules.md
- docs/rewriting-TDD.md
- docs/claude2-request.md
- docs/claude3-request.md

---

## 이번 세션 작업 1: 히어로 이미지 src 교체

### 교체 대상

| 파일:줄 | 현재 이미지 | 변경할 이미지 |
|---------|------------|--------------|
| public/css/styles.css:378 | hero-main.webp | /images/hero/hero-index.webp |
| public/css/styles.css:1981 | hero-main.webp | /images/hero/hero-company.webp |
| public/process.html:51 | hero-main.webp | /images/hero/hero-process.webp |
| public/mkt.html:111 | section-bg-1.webp | /images/hero/hero-mkt.webp |

### 이미 맞는 것 (확인만)
- public/fund.html:51 → hero-fund.webp ✅
- public/pro.html:53 → hero-pro.webp ✅

---

## 이번 세션 작업 2: 리라이팅

### 핵심 규칙
1. **리라이팅 = 문장 새로 작성** (브랜드명만 바꾸는 게 아님)
2. **헤더/입력폼/푸터 절대 건드리지 않음**
3. **한 섹션씩 수동으로** (스크립트 일괄처리 X)

### 리라이팅 예시
```
원본: "기업의 성장을 위한 최적의 자금 솔루션을 제공합니다"
변경: "비즈니스 확장에 필요한 맞춤형 자금 지원 방안을 안내해 드립니다"
```

### BAS 금지 표현
성공사례, 성공금액, 성공률, 대출알선, 대출소개, 서류대행, 기업평가, 기업분석, 기업진단, 정책자금, 정부정책자금, 승인, 승인률

### 작업 대상 (6페이지)
- public/index.html
- public/company.html
- public/fund.html
- public/process.html
- public/pro.html
- public/mkt.html

---

## 프로젝트 정보

| 항목 | 값 |
|------|-----|
| 로컬 경로 | F:\pola_homepage\5.14th_parkhyunsuk_dreambizlab |
| 작업 폴더 | public/ |
| GitHub | https://github.com/jeongcheck365/dbizlab |
| 이미지 생성 모델 | gemini-3-pro-image-preview |

---

## 참고 문서

- CLAUDE.md (프로젝트 필수 참조)
- docs/rewriting-rules.md
- docs/rewriting-TDD.md
