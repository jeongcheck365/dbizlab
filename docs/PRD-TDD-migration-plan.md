# DreamBizLab 홈페이지 마이그레이션 PRD & TDD

**프로젝트명**: DreamBizLab 브랜드 리뉴얼 마이그레이션
**작성일**: 2025-12-30
**버전**: 1.0

---

## 1. 프로젝트 개요 (PRD)

### 1.1 목적
KEAI 브랜드에서 DreamBizLab(드림비즈랩)으로 완전한 브랜드 전환 및 SEO 최적화

### 1.2 목표
1. **브랜드 아이덴티티 확립**: Navy + Gold 컬러 체계 적용
2. **SEO 최적화**: 검색 노출을 위한 콘텐츠 리라이팅
3. **이미지 리뉴얼**: 한국인/한국배경/여성 위주 AI 이미지 생성
4. **도메인 통합**: www.dbizlab.co.kr 기준 모든 URL 업데이트

### 1.3 타겟 URL
- **Production**: https://www.dbizlab.co.kr
- **Vercel**: https://vercel.com/dbizlabs-projects/dbizlab
- **GitHub**: https://github.com/jeongcheck365/dbizlab

---

## 2. 현재 상태 분석

### 2.1 컬러 시스템 (AS-IS)
```css
--primary: #0F4C81 (Corporate Blue)
--primary-light: #1565C0
--primary-bright: #1A73E8
--gradient-primary: linear-gradient(135deg, #0F4C81, #1A73E8)
```

### 2.2 컬러 시스템 (TO-BE)
```css
--primary: #2A5278 (Navy)
--primary-accent: #D49B4E (Gold)
--gradient-primary: linear-gradient(135deg, #2A5278, #3A6A94)
--gradient-accent: linear-gradient(135deg, #D49B4E, #E5B06E)
```

### 2.3 대상 HTML 파일
| 파일명 | 설명 | 우선순위 |
|--------|------|----------|
| index.html | 메인 페이지 | P0 |
| company.html | 회사소개 | P1 |
| process.html | 진행과정 | P1 |
| fund.html | 자금상담 | P1 |
| pro.html | 전문서비스 | P1 |
| mkt.html | 온라인마케팅 | P1 |
| board.html | 게시판 | P2 |
| post.html | 게시글 상세 | P2 |
| admin-login.html | 관리자 로그인 | P3 |
| dashboard/*.html | 대시보드 | P3 |

### 2.4 현재 이미지 현황
- **로고**: logo.png, white_logo.png, favicon.png
- **외부 CDN 이미지**: cdn.imweb.me 호스팅 이미지들
- **이미지 교체 대상**: 히어로 이미지, 서비스 아이콘, 폼 배경 등

---

## 3. 기술 설계 문서 (TDD)

### 3.1 Phase 1: 컬러 시스템 교체

#### 3.1.1 CSS Variables 업데이트
**파일**: `public/css/styles.css`

```css
/* TO-BE: Navy + Gold Theme */
:root {
    /* Primary Colors - Navy */
    --primary: #2A5278;
    --primary-light: #3A6A94;
    --primary-bright: #4A7AAA;
    --primary-dark: #1A425A;

    /* Accent Color - Gold */
    --accent: #D49B4E;
    --accent-light: #E5B06E;
    --accent-dark: #C48B3E;

    /* Gradient */
    --gradient-primary: linear-gradient(135deg, #2A5278, #3A6A94);
    --gradient-accent: linear-gradient(135deg, #D49B4E, #E5B06E);
    --gradient-overlay: linear-gradient(135deg, rgba(42, 82, 120, 0.92) 0%, rgba(58, 106, 148, 0.88) 100%);

    /* Background */
    --bg-light: #E8EEF4;
    --bg-accent: #FDF8F0;
    --bg-white: #FFFFFF;
    --bg-section: #F8FAFC;

    /* Text */
    --text-dark: #1A425A;
    --text-primary: #212529;
    --text-secondary: #495057;
    --text-muted: #6C757D;

    /* Shadow */
    --shadow-sm: 0 2px 4px rgba(42, 82, 120, 0.1);
    --shadow-md: 0 4px 8px rgba(42, 82, 120, 0.15);
    --shadow-lg: 0 8px 16px rgba(42, 82, 120, 0.2);
}
```

#### 3.1.2 Gold 포인트 적용 위치
- CTA 버튼 호버 상태
- 배지 (Badge) 아이콘
- 중요 텍스트 강조
- 푸터 링크 호버

### 3.2 Phase 2: SEO 콘텐츠 리라이팅

#### 3.2.1 SEO 키워드 전략
| 페이지 | 주요 키워드 | 서브 키워드 |
|--------|-------------|-------------|
| index | 기업자금 컨설팅, 정부지원자금 | 창업자금, 자금확보, 중소기업 지원 |
| company | 드림비즈랩, 경영컨설팅 | 기업심사 전문가, 자금조달 |
| process | 자금확보 절차, 상담 과정 | 무료상담, 서류준비 |
| fund | 정부지원자금 종류, 창업자금 | 운전자금, 시설자금 |
| pro | 전문서비스, 사업계획서 | 경영지원, 비즈니스 컨설팅 |
| mkt | 온라인마케팅, 디지털마케팅 | 홈페이지제작, 광고대행 |

#### 3.2.2 Meta 태그 업데이트 구조
```html
<!-- 기본 SEO -->
<title>[페이지명] | 드림비즈랩 DreamBizLab</title>
<meta name="description" content="[페이지별 고유 설명 150자 이내]">
<meta name="keywords" content="[페이지별 키워드 5-8개]">
<link rel="canonical" href="https://www.dbizlab.co.kr/[페이지]">

<!-- Open Graph -->
<meta property="og:url" content="https://www.dbizlab.co.kr/[페이지]">
<meta property="og:image" content="https://www.dbizlab.co.kr/og/og-[페이지].png">

<!-- JSON-LD 구조화 데이터 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "드림비즈랩 DreamBizLab",
  "url": "https://www.dbizlab.co.kr",
  ...
}
</script>
```

### 3.3 Phase 3: AI 이미지 생성 (Gemini)

#### 3.3.1 이미지 생성 스펙
| ID | 위치 | 설명 | 스타일 |
|----|------|------|--------|
| hero-main | index.html 히어로 | 여성 컨설턴트, 비즈니스 미팅 | 한국 오피스, 전문적 |
| form-image | 폼 섹션 배경 | 여성 상담사, 서류 검토 | 밝은 조명, 신뢰감 |
| service-icon-1 | 서비스 카드 1 | 1:1 상담 아이콘 | 미니멀, 네이비 톤 |
| service-icon-2 | 서비스 카드 2 | 자금 설계 아이콘 | 미니멀, 네이비 톤 |
| service-icon-3 | 서비스 카드 3 | 사후 관리 아이콘 | 미니멀, 네이비 톤 |
| company-hero | company.html | 팀 미팅, 한국 비즈니스 환경 | 전문적, 협력적 |
| process-hero | process.html | 서류 작업, 상담 장면 | 단계별 진행 느낌 |
| fund-hero | fund.html | 자금 관련, 금융 이미지 | 안정감, 신뢰 |
| pro-hero | pro.html | 전문 서비스, 비즈니스 | 다양한 서비스 |
| mkt-hero | mkt.html | 디지털 마케팅, 온라인 | 현대적, 디지털 |

#### 3.3.2 Gemini 이미지 생성 프롬프트 템플릿
```
Korean female business consultant in professional navy suit,
modern Korean office setting, warm lighting,
[specific scene description],
photorealistic, high quality,
aspect ratio 16:9 (for hero) / 1:1 (for icons)
```

#### 3.3.3 이미지 저장 위치
- **R2 버킷**: dbizlab
- **Public URL**: https://pub-f4383ed498414dc59b27aeef0847aea6.r2.dev
- **파일명 규칙**: `dbizlab-[id]-v1.webp`

### 3.4 Phase 4: URL 및 링크 업데이트

#### 3.4.1 URL 변경 목록
| AS-IS | TO-BE |
|-------|-------|
| https://www.k-eai.kr | https://www.dbizlab.co.kr |
| /og/og-home.png | /og/og-home.png (R2 업로드) |
| cdn.imweb.me/... | R2 Public URL |

---

## 4. 작업 순서 (실행 계획)

### Phase 1: 컬러 시스템 (Day 1)
- [ ] CSS Variables 업데이트
- [ ] 전체 페이지 컬러 일관성 검증
- [ ] Gold 포인트 컬러 적용

### Phase 2: SEO 리라이팅 (Day 1-2)
- [ ] index.html Meta 태그 + 콘텐츠
- [ ] company.html Meta 태그 + 콘텐츠
- [ ] process.html Meta 태그 + 콘텐츠
- [ ] fund.html Meta 태그 + 콘텐츠
- [ ] pro.html Meta 태그 + 콘텐츠
- [ ] mkt.html Meta 태그 + 콘텐츠
- [ ] board.html Meta 태그

### Phase 3: 이미지 생성 (Day 2-3)
- [ ] Gemini API 연동 스크립트 작성
- [ ] 히어로 이미지 생성 (6개)
- [ ] 서비스 아이콘 생성 (3개)
- [ ] 폼 배경 이미지 생성 (1개)
- [ ] R2 업로드
- [ ] HTML 이미지 src 업데이트

### Phase 4: 최종 검증 (Day 3)
- [ ] 모든 URL 검증
- [ ] 반응형 테스트
- [ ] SEO 검증 (Lighthouse)
- [ ] Git 커밋 & 배포
- [ ] Production 확인

---

## 5. 환경 설정

### 5.1 API Keys
```env
GEMINI_API_KEY=AIzaSyDRw3o1kwWitqtmhyTnJdzaptH_gfBCWgU
R2_ACCESS_KEY_ID=f7be03322a7e3a4a758da544568db0c5
R2_SECRET_ACCESS_KEY=90db7d2c3acbd9842e5e4a032bac5f5656fdc192bbb9af1d3f97ee504d425c62
R2_PUBLIC_URL=https://pub-f4383ed498414dc59b27aeef0847aea6.r2.dev
```

### 5.2 배포 환경
- **GitHub**: jeongcheck365/dbizlab
- **Vercel**: dbizlabs-projects/dbizlab
- **Domain**: www.dbizlab.co.kr

---

## 6. 품질 기준

### 6.1 SEO 목표
- Lighthouse SEO 점수: 90+
- Core Web Vitals: 모두 Green
- 구조화 데이터: 유효성 검증 통과

### 6.2 이미지 기준
- 포맷: WebP
- 히어로: 1200x675px (16:9)
- 아이콘: 400x400px (1:1)
- 용량: 히어로 < 200KB, 아이콘 < 50KB

### 6.3 접근성
- 모든 이미지 alt 텍스트
- 색상 대비 4.5:1 이상
- 키보드 네비게이션

---

## 7. 리스크 및 대응

| 리스크 | 영향 | 대응 방안 |
|--------|------|-----------|
| Gemini 이미지 생성 실패 | 중 | 대체 이미지 준비, 재시도 로직 |
| R2 업로드 오류 | 중 | 로컬 백업, 수동 업로드 |
| SEO 인덱싱 지연 | 저 | sitemap 제출, Search Console 등록 |

---

**문서 작성자**: Claude Code
**승인자**: 사용자
**다음 단계**: Phase 1 실행 시작

