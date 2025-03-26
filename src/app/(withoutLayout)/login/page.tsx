import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/(withoutLayout)/login/page.module.scss'

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BookStep</div>
      <p className={styles.subtitle}>
        오늘의 한 줄이 미래를 바꿉니다.<br />책에서 얻은 인사이트를 기록하고 실천하세요
      </p>
      <div className={styles.inputWrapper}>
        <div className={styles.idWrapper}>
          <input type="text" placeholder="아이디" className={styles.input} />
        </div>
        <div className={styles.passwordWrapper}>
          <input type="password" placeholder="비밀번호" className={styles.input} />
          <Image src="/svgs/visibilityOff.svg" alt="비밀번호 보기" width={23.5} height={16.45} />
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.autoLogin}>
          <Image src="/svgs/uncheckedRadioButton.svg" alt="자동 로그인 체크" width={18} height={18} />
          자동 로그인
        </div>
        <Link href="/forgetPassword" className={styles.link}>비밀번호 찾기</Link>
      </div>
      <Link href="/" className={styles.loginButton}>로그인</Link>
      <div className={styles.socialLogin}>
        <div className={styles.divider}></div>
        간편 로그인
        <div className={styles.divider}></div>
      </div>
      <button className={styles.kakaoLogin}>
        <Image src="/svgs/kakaoLogin.svg" alt="카카오 로그인" width={65} height={65} />
      </button>
      <Link href="/join" className={styles.joinButton}>회원가입</Link>
    </div>
  )
}
