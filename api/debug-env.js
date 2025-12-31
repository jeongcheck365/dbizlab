// 환경변수 디버깅용 (프로덕션에서 삭제 필요)
export default function handler(req, res) {
    const envStatus = {
        GA4_PROPERTY_ID: !!process.env.GA4_PROPERTY_ID,
        GOOGLE_CLIENT_EMAIL: !!process.env.GOOGLE_CLIENT_EMAIL,
        GOOGLE_PRIVATE_KEY: !!process.env.GOOGLE_PRIVATE_KEY,
        GOOGLE_PRIVATE_KEY_LENGTH: process.env.GOOGLE_PRIVATE_KEY?.length || 0,
    };

    res.json(envStatus);
}
