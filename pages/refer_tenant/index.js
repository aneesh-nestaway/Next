import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './style.module.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Input from '../../components/input'
import CheckBox from '../../components/checkbox'
import Button from '../../components/button'
import { tenantFaqs, faqs } from './constant'
import FaqList from './FaqList'
import Feedback from './feedback'
import Renting from './renting'
import ToLetBoard from './toLetBoard'
import Image from 'next/image'

const DATA = {
  tenant: ''
}

const refer_tenant = () => {
  const router = useRouter()
  const isOwner = router.asPath.includes('owner')
  const FAQDATA = isOwner ? faqs : tenantFaqs
  const [referData, setReferData] = useState(DATA)
  const handleChange = (value, attr) => {
    DATA[attr] = value.target.value
    setReferData(DATA)
  }
  const TenantDetailForm = () => (
    <div className={styles.form}>
      <div className={styles.titleWrap}>
        <Image src={'/images/form-owner.svg'} width='32' height='32' />
        <div className={styles.text}>
          <div className={styles.title}>Tenant details</div>{' '}
          <div className={styles.subTitle}>
            The tenant will be contacted on these details
          </div>
        </div>
      </div>
      <Input
        class={styles.inputItem}
        handleChange={value => handleChange(value, 'tenant')}
        placeholder='Tenant mobile number*'
        label='Tenant mobile number*'
        type='number'
        fixLabel
      />
      <Input
        class={styles.inputItem}
        handleChange={value => handleChange(value, 'tenant')}
        placeholder='Tenant name'
        label='Tenant name'
        type='text'
        fixLabel
      />
      <Input
        class={styles.inputItem}
        handleChange={value => handleChange(value, 'tenant')}
        placeholder='House locality or city'
        label='House locality or city'
        type='text'
        fixLabel
      />
    </div>
  )

  const YourDetailForm = () => (
    <div className={styles.form}>
      <div className={styles.titleWrap}>
        <Image src={'/images/referrer.svg'} width='32' height='32' />
        <div className={styles.text}>
          <div className={styles.title}>Your details</div>{' '}
          <div className={styles.subTitle}>
            You will be contacted to verify UPI information
          </div>
        </div>
      </div>
      <Input
        class={styles.inputItem}
        handleChange={value => handleChange(value, 'tenant')}
        placeholder='Tenant mobile number*'
        label='Tenant mobile number*'
        type='number'
        fixLabel
      />
      <Input
        class={styles.inputItem}
        handleChange={value => handleChange(value, 'tenant')}
        placeholder='Your name'
        label='Your name'
        type='text'
        fixLabel
      />
      <CheckBox
        isChecked
        label={
          <div className='text'>
            I agree to be contacted by Nestaway as per{'  '}
            <a
              href='https://www.nestaway.com/help-center/q/5159'
              className='link'
              target='_blank'
              title='Privacy policy'
            >
              Nestaway's Privacy Policy
            </a>
          </div>
        }
      />
      <Button text='SUBMIT' primary wide />
      <br />
      By submitting this form, I agree to be contacted by Nestaway
    </div>
  )
  return (
    <div>
      <Header />
      <div className={styles.referTenantConatainer}>
        <div className={styles.wrapper}>
          <div className={styles.leftWrap}>
            <div className={styles.referMainContent}>
              {isOwner ? (
                <div>
                  Refer a house owner to earn{' '}
                  <span className={styles.rewardAmount}>₹ 1000</span> for every
                  house listing we publish
                </div>
              ) : (
                <div>
                  Refer your friends, family, colleagues or anyone who is
                  looking to rent a place and earn
                  <span className={styles.rewardAmount}>₹ 1000</span>for EVERY
                  referral.
                </div>
              )}
            </div>
            <div className={styles.note}>
              The more you refer, the more you earn.
              <br />
              Reward will be sent to you via these UPI apps
              <div className={styles.image}>
                <Image
                  width='284'
                  height='20'
                  responsive
                  defaultLoader
                  src={'/images/upi-logos.png'}
                />
              </div>
              <br />
              <div>
                Applicable only in Bengaluru, Chennai, Hyderabad, Mumbai, Pune
                and NCR
              </div>
              <br />
              <div className={styles.image}>
                <Image
                  width='281'
                  height='216'
                  responsive
                  defaultLoader
                  src={'/images/refer-owner.svg'}
                />
              </div>
            </div>
          </div>
          <div className={styles.rightWrap}>
            <TenantDetailForm />
            <YourDetailForm />
          </div>
        </div>
        {isOwner ? <ToLetBoard /> : null}
        <div className={styles.faqContainer}>
          <div className={styles.wrapper}>
            <div className={styles.faqHeading}>FAQS</div>
            <div className={styles.faqListWrapper}>
              {FAQDATA.map(item => (
                <FaqList
                  title={item.question}
                  subtext={item.answer}
                  className={styles.faq}
                />
              ))}
            </div>
          </div>
        </div>
        <Feedback />
        <Renting />
      </div>
      <Footer />
    </div>
  )
}

export default refer_tenant
