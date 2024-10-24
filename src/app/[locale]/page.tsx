import { useTranslations } from 'next-intl'
// import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('An')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Booster')}
          </span>
          <br />
          {t('to_Your_NextJS_Apps')}
        </h1>
        <div className='my-6 px-20 text-center text-7xl text-text-secondary'>
          {t('Wisdomax_we_do_Max')}
        </div>
        {/* <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://github.com/new?template_name=nextjs-template&template_owner=yahyaparvar'
            target='_blank'
          >
            <Button rounded size='large'>
              {t('Use_Template')}
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('Learn_More')}
            </Button>
          </a>
        </div> */}
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Phone')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              437-218-3333
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Email')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              wisdomaxrealty@hotmail.com
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Address')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              110 James St., St. Catharines, L2R 7E8
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
