import styles from '@/app/(withoutLayout)/login/page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BookStep</div>
      <div className={styles.description}>오늘의 한 줄이 미래를 바꿉니다.<br />책에서 얻은 인사이트를 기록하고 실천하세요</div>
      <input type="text" placeholder="아이디" className={styles.inputId} />
      <div className={styles.passwordWrapper}>
        <input type="password" placeholder="비밀번호" className={styles.inputPassword} /><Image
        src={'/svgs/visibilityOff.svg'} alt={'Visibility Off'} width={23.5} height={16.45} />
      </div>
      <div className={styles.accountOptions}>
        <div><Image src={'/svgs/uncheckedRadioButton.svg'} alt={'Radio Button'} width={18} height={18} />자동 로그인</div>
        <Link href={'/forgetPassword'}>비밀번호 찾기</Link>
      </div>
      <Link href={'/'} className={styles.loginButton}>
        로그인
      </Link>
      <div className={styles.socialLoginWrapper}>
        <div className={styles.line}></div>
        간편 로그인
        <div className={styles.line}></div>
      </div>
      <div className={styles.kakaoLoginButton}>
        <Image src={'/svgs/kakaoLogin.svg'} alt={'Kakao Login'} width={65} height={65} />
      </div>
      <Link href={'/join'} className={styles.joinButton}>회원가입</Link>
    </div>
  )
}
