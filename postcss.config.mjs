const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-px-to-viewport': {
      viewportWidth: 1920, // 디자인 기준 화면 너비
      viewportHeight: 1080,
      unitPrecision: 0, // 변환 소수점 자리수
      propList: ['*'], // 모든 속성 적용
      viewportUnit: 'vw', // px을 변환할 단위
      fontViewportUnit: 'vw', // 글꼴 단위
      selectorBlackList: [], // 변환 제외할 클래스
      minPixelValue: 1, // 최소 변환 단위
      mediaQuery: false, // 미디어 쿼리 변환 여부
    },
  },
}

export default config
