// ========================================
// DreamBizLab 설정 파일 예시
// 이 파일을 복사하여 config.js로 저장 후 값 입력
// ========================================

const CONFIG = {
  // Cloudflare Workers API URL
  WORKER_URL: 'https://your-worker.workers.dev',

  // 브랜드 정보
  BRAND: {
    name: 'DreamBizLab',
    fullName: '드림비즈랩',
    copyright: '© 2025 DreamBizLab. All rights reserved.'
  }
};

window.CONFIG = CONFIG;
