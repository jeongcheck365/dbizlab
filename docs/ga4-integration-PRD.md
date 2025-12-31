# GA4 연동 PRD - DreamBizLab

## 1. Overview

### 1.1 목적
Google Analytics 4 (GA4) 데이터를 Airtable Analytics 테이블에 자동 수집하여 대시보드에서 방문 통계를 확인할 수 있도록 함.

### 1.2 데이터 흐름
```
GA4 API → cron-analytics.js (매일 자정) → Airtable Analytics 테이블 → analytics.js API → 대시보드
```

### 1.3 관련 파일
| 파일 | 역할 |
|------|------|
| `api/cron-analytics.js` | GA4 데이터 수집 & Airtable 저장 |
| `api/analytics.js` | Airtable에서 데이터 조회 |
| `public/dashboard/analytics.html` | 통계 대시보드 UI |

---

## 2. 사전 준비 사항

### 2.1 Google Cloud Console 설정

#### Step 1: 프로젝트 생성/선택
1. https://console.cloud.google.com 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. 프로젝트 이름: `dbizlab-analytics` (권장)

#### Step 2: API 활성화
1. "API 및 서비스" → "라이브러리" 이동
2. 다음 API 검색 후 활성화:
   - **Google Analytics Data API** (GA4용)
   - **Search Console API** (선택사항)

#### Step 3: 서비스 계정 생성
1. "API 및 서비스" → "사용자 인증 정보" 이동
2. "사용자 인증 정보 만들기" → "서비스 계정" 선택
3. 서비스 계정 정보 입력:
   - 이름: `dbizlab-ga4-reader`
   - 역할: 없음 (나중에 GA4에서 권한 부여)
4. "완료" 클릭

#### Step 4: JSON 키 발급
1. 생성된 서비스 계정 클릭
2. "키" 탭 → "키 추가" → "새 키 만들기"
3. JSON 형식 선택 후 다운로드
4. 다운로드된 JSON에서 추출:
   - `client_email` → GOOGLE_CLIENT_EMAIL
   - `private_key` → GOOGLE_PRIVATE_KEY

---

### 2.2 GA4 속성에 서비스 계정 권한 부여

#### Step 1: GA4 관리자 접속
1. https://analytics.google.com 접속
2. dbizlab.co.kr 속성 선택
3. 좌측 하단 "관리" (톱니바퀴) 클릭

#### Step 2: 속성 ID 확인
1. "속성 설정" 클릭
2. **속성 ID** 확인 (숫자 9자리, 예: 123456789)
3. 이 값이 `GA4_PROPERTY_ID`

#### Step 3: 서비스 계정 권한 추가
1. "속성" 섹션 → "속성 액세스 관리" 클릭
2. 우측 상단 "+" 버튼 → "사용자 추가"
3. 이메일: 서비스 계정 이메일 입력 (예: `dbizlab-ga4-reader@프로젝트ID.iam.gserviceaccount.com`)
4. 역할: **뷰어** 선택
5. "추가" 클릭

---

### 2.3 Search Console 설정 (선택)

#### Step 1: Search Console 접속
1. https://search.google.com/search-console 접속
2. dbizlab.co.kr 속성 선택

#### Step 2: 서비스 계정 권한 추가
1. "설정" → "사용자 및 권한" 이동
2. "사용자 추가" 클릭
3. 이메일: 서비스 계정 이메일 입력
4. 권한: **전체** 선택
5. "추가" 클릭

---

## 3. 환경변수 설정

### 3.1 필요한 환경변수

```env
# GA4 설정
GA4_PROPERTY_ID=123456789

# Google 서비스 계정
GOOGLE_CLIENT_EMAIL=dbizlab-ga4-reader@프로젝트ID.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...(긴 키)...\n-----END PRIVATE KEY-----\n"

# Search Console (선택)
SEARCH_CONSOLE_SITE=https://dbizlab.co.kr
```

### 3.2 Vercel 환경변수 추가 명령어

```bash
# GA4 Property ID
echo "123456789" | vercel env add GA4_PROPERTY_ID production

# Google Client Email
echo "서비스계정이메일@프로젝트.iam.gserviceaccount.com" | vercel env add GOOGLE_CLIENT_EMAIL production

# Google Private Key (JSON에서 복사)
# 주의: \n을 실제 줄바꿈으로 유지해야 함
vercel env add GOOGLE_PRIVATE_KEY production
# (프롬프트에서 키 붙여넣기 후 Enter, Ctrl+D)
```

---

## 4. 수집 데이터 명세

### 4.1 GA4 기본 데이터
| 필드 | 설명 | GA4 메트릭 |
|------|------|-----------|
| visitors | 활성 사용자 | activeUsers |
| pageviews | 페이지뷰 | screenPageViews |
| avgDuration | 평균 세션 시간 | averageSessionDuration |
| sessions | 세션 수 | sessions |

### 4.2 트래픽 소스
| 필드 | 설명 |
|------|------|
| sourceOrganic | 자연 검색 |
| sourceDirect | 직접 방문 |
| sourceReferral | 참조 사이트 |
| sourceSocial | 소셜 미디어 |
| sourcePaid | 유료 광고 |
| sourceOther | 기타 |

### 4.3 기기별 데이터
| 필드 | 설명 |
|------|------|
| deviceDesktop | 데스크톱 |
| deviceMobile | 모바일 |
| deviceTablet | 태블릿 |

### 4.4 Search Console 데이터 (선택)
| 필드 | 설명 |
|------|------|
| clicks | 클릭 수 |
| impressions | 노출 수 |

### 4.5 집계 데이터 (JSON)
| 필드 | 설명 |
|------|------|
| topPages | 인기 페이지 상위 5개 |
| topCountries | 방문 국가 상위 5개 |
| topReferrers | 유입 경로 상위 5개 |

---

## 5. Cron Job 설정

### 5.1 vercel.json 설정

```json
{
  "crons": [
    {
      "path": "/api/cron-analytics",
      "schedule": "0 15 * * *"
    }
  ]
}
```

> 참고: `0 15 * * *` = UTC 15:00 = KST 00:00 (자정)

### 5.2 수동 실행

```bash
# 최근 7일 데이터 수집
curl "https://dbizlab.vercel.app/api/cron-analytics?secret=dbizlab-cron-secret-2024&days=7"

# 최근 30일 데이터 수집 (초기 설정 시)
curl "https://dbizlab.vercel.app/api/cron-analytics?secret=dbizlab-cron-secret-2024&days=30"
```

---

## 6. 테스트 체크리스트

### 6.1 설정 확인
- [ ] Google Cloud Console에서 Analytics Data API 활성화
- [ ] 서비스 계정 생성 및 JSON 키 다운로드
- [ ] GA4 속성에서 서비스 계정에 뷰어 권한 부여
- [ ] GA4 속성 ID 확인

### 6.2 환경변수 설정
- [ ] `GA4_PROPERTY_ID` Vercel에 추가
- [ ] `GOOGLE_CLIENT_EMAIL` Vercel에 추가
- [ ] `GOOGLE_PRIVATE_KEY` Vercel에 추가
- [ ] 재배포 완료

### 6.3 API 테스트
- [ ] `/api/cron-analytics?secret=xxx&days=7` 호출 성공
- [ ] Airtable Analytics 테이블에 데이터 저장 확인
- [ ] `/api/analytics?days=7` 호출 시 데이터 반환 확인
- [ ] 대시보드 analytics.html에서 차트 표시 확인

---

## 7. 트러블슈팅

### 7.1 "Failed to get access token" 에러
- GOOGLE_PRIVATE_KEY의 `\n`이 실제 줄바꿈으로 저장되었는지 확인
- Vercel 환경변수에서 따옴표 없이 저장했는지 확인

### 7.2 "Permission denied" 에러
- GA4 속성에서 서비스 계정에 뷰어 권한 부여했는지 확인
- 서비스 계정 이메일이 정확한지 확인

### 7.3 "Property not found" 에러
- GA4_PROPERTY_ID가 정확한지 확인 (숫자만, 9자리)
- GA4 속성이 활성화되어 있는지 확인

### 7.4 데이터가 0으로 표시
- GA4에 실제 트래픽이 있는지 확인
- 날짜 범위가 올바른지 확인 (최근 7일 내 데이터가 있어야 함)

---

## 8. 참고 문서

- [GA4 Data API 공식 문서](https://developers.google.com/analytics/devguides/reporting/data/v1)
- [Google Cloud 서비스 계정 생성](https://cloud.google.com/iam/docs/service-accounts-create)
- [Search Console API 문서](https://developers.google.com/webmaster-tools/search-console-api-original)

---

## 9. 작업 순서 요약

1. **Google Cloud Console**
   - 프로젝트 생성
   - Analytics Data API 활성화
   - 서비스 계정 생성 & JSON 키 다운로드

2. **GA4 관리자**
   - 속성 ID 확인
   - 서비스 계정에 뷰어 권한 부여

3. **Vercel 환경변수**
   - GA4_PROPERTY_ID 추가
   - GOOGLE_CLIENT_EMAIL 추가
   - GOOGLE_PRIVATE_KEY 추가
   - 재배포

4. **테스트**
   - cron-analytics 수동 실행
   - 대시보드에서 데이터 확인

---

**문서 버전**: 1.0
**작성일**: 2025-12-31
**프로젝트**: DreamBizLab Dashboard
