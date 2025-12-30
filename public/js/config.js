// ========================================
// DreamBizLab 설정 파일
// ========================================

const CONFIG = {
  // API Base URL
  API_BASE: '/api',

  // 관리자 비밀번호 (자동 인증용)
  ADMIN_PASSWORD: 'dbizlab2025',

  // 브랜드 정보
  BRAND: {
    name: 'DreamBizLab',
    fullName: '드림비즈랩',
    copyright: '© 2025 DreamBizLab. All rights reserved.'
  }
};

// 전역 접근 가능하도록 export
window.CONFIG = CONFIG;
