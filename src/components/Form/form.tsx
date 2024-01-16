'use client'

import { ChangeEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { FormDataSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './styles.module.css';

type Inputs = z.infer<typeof FormDataSchema>

const steps = [
  {
    id: 'Персональна інформація',
    name: 'Step 0',
    fields: ['firstName', 'namber', 'email']
  },
  {
    id: 'Про компанію',
    name: 'Step 1',
    fields: ['lastName', 'products', 'activity']
  },
  { 
    id: 'Загальні вимоги',
    name: 'Step 2',
    fields: ['goals', 'tasks']
  },
  { 
    id: 'Дизайн',
    name: 'Step 3',
    fields: ['answer', 'color', 'fonts', 'mood', 'notLike', 'like']
  },
  { 
    id: 'Карта сайту',
    name: 'Step 4',
    fields: ['structure', 'functionality']
  },
  { 
    id: 'Фініш',
    name: 'Step 5',
  }
]



export default function Form() {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const delta = currentStep - previousStep

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema)
  })

  const processForm: SubmitHandler<Inputs> = data => {
    console.log(data)
    // reset()
  }

  type FieldName = keyof Inputs

  const next = async () => {
    const fields = steps[currentStep].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)()
      }
      setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <section className={styles.section}>
      {/* steps */}
      <nav aria-label='Progress' className={styles.nav}>
        <ol role='list' className={styles.ol}>
          {steps.map((step, index) => (
            <li key={step.name} className={styles.li}>
              {currentStep > index ? (
                <div className={styles.step1}>
                  <span className={styles.step1id}>
                    {step.id}
                  </span>
                  <span className={styles.step1name}>{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className={styles.step2}
                  aria-current='step'
                >
                  <span className={styles.step2id}>
                    {step.id}
                  </span>
                  <span className={styles.step2name}>{step.name}</span>
                </div>
              ) : (
                <div className={styles.step3}>
                  <span className={styles.step3id}>
                    {step.id}
                  </span>
                  <span className={styles.step3name}>{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form className={styles.form} onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.motion}
          >
            <div className={styles.formTitle}>
              <h2 className={styles.h2}>
                Персональна інформація
              </h2>
              <p className={styles.p}>
                Вся інформація, яку ви надаєте залишиться конфіденційною
              </p>
            </div>
            <div className={styles.inputs}>
              <div className={styles.inputsblock}>
                <label
                  htmlFor='firstName'
                  className={styles.label}
                >
                  Як до Вас звертатися?
                </label>
                  <input
                    type='text'
                    id='firstName'
                    {...register('firstName')}
                    autoComplete='given-name'
                    placeholder='Ваше ім`я'
                    className={styles.input}
                  />
                  {errors.firstName?.message && (
                    <p className={styles.errors}>
                      {errors.firstName.message}
                    </p>
                  )}
              </div>

              <div className={styles.inputsblock}>
                <label
                  htmlFor='namber'
                  className={styles.label}
                >
                  Номер телефону
                </label>
                  <input
                    type='text'
                    id='namber'
                    {...register('namber')}
                    autoComplete='family-name'
                    placeholder='+380'
                    className={styles.input}
                  />
                  {errors.namber?.message && (
                    <p className={styles.errors}>
                      {errors.namber.message}
                    </p>
                  )}
              </div>

              <div className={styles.inputsblock}>
                <label
                  htmlFor='email'
                  className={styles.label}
                >
                  Електронна адреса
                </label>
                  <input
                    id='email'
                    type='email'
                    {...register('email')}
                    autoComplete='email'
                    placeholder='@exampl.com'
                    className={styles.input}
                  />
                  {errors.email?.message && (
                    <p className={styles.errors}>
                      {errors.email.message}
                    </p>
                  )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.motion}
          >
            <div className={styles.formTitle}>
              <h2 className={styles.h2}>
                Про компанію
              </h2>
              <p className={styles.p}>
                Address where you can receive mail.
              </p>
            </div>

            <div className={styles.inputs}>
              <div className={styles.inputsblock}>
                <label
                  htmlFor='lastName'
                  className={styles.label}
                >
                  Назва компанії
                </label>
                  <input
                    type='text'
                    id='lastName'
                    {...register('lastName')}
                    autoComplete='company'
                    placeholder='Reklamax'
                    className={styles.input}
                  />
                  {errors.lastName?.message && (
                    <p className={styles.errors}>
                      {errors.lastName.message}
                    </p>
                  )}
              </div>

              <div className={styles.inputsblock}>
                <label
                  htmlFor='domen'
                  className={styles.label}
                >
                  Адреса сайту, домен який ви бажаете
                </label>
                  <input
                    type='text'
                    id='domen'
                    {...register('domen')}
                    autoComplete='domen'
                    placeholder='exampl.com.ua'
                    className={styles.input}
                  />
              </div>
            </div>
            <div className={styles.inputs}>
              <div className={styles.inputsblock}>
                <label
                  htmlFor='activity'
                  className={styles.label}
                >
                  Діяльність компанії
                </label>
                  <input
                    type='text'
                    id='activity'
                    {...register('activity')}
                    autoComplete='address-level2'
                    placeholder='Магазин, ресторан, виробництво'
                    className={styles.input}
                  />
                  {errors.activity?.message && (
                    <p className={styles.errors}>
                      {errors.activity.message}
                    </p>
                  )}
              </div>

              <div className={styles.inputsblock}>
                <label
                  htmlFor='products'
                  className={styles.label}
                >
                  Продукти
                </label>
                  <input
                    type='text'
                    id='products'
                    {...register('products')}
                    autoComplete='address-level1'
                    placeholder='Товари та послуги вашої компанії.'
                    className={styles.input}
                  />
                  {errors.products?.message && (
                    <p className={styles.errors}>
                      {errors.products.message}
                    </p>
                  )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
          initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={styles.motion}
          >
            <div className={styles.formTitle}>
              <h2 className={styles.h2}>
                Загальні вимоги
              </h2>
              <p className={styles.p}>
                Thank you for your submission.
              </p>
            </div>

            <div className={styles.inputs}>
              <div className={styles.inputsblock}>
                <label
                    htmlFor='goals'
                    className={styles.label}
                  >
                    Цілі проекту
                </label>
                    <input
                      type='text'
                      id='goals'
                      {...register('goals')}
                      autoComplete='goals'
                      placeholder='Продажі, комунікації, інформатив, тощо...'
                      className={styles.input}
                    />
                    {errors.goals?.message && (
                      <p className={styles.errors}>
                        {errors.goals.message}
                      </p>
                    )}
              </div>

              <div className={styles.inputsblock}>
                <label
                    htmlFor='tasks'
                    className={styles.label}
                  >
                    Завдання
                </label>
                    <input
                      type='text'
                      id='tasks'
                      {...register('tasks')}
                      autoComplete='tasks'
                      placeholder='Маркетинг, комерція, розваги, тощо...'
                      className={styles.input}
                    />
                    {errors.tasks?.message && (
                      <p className={styles.errors}>
                        {errors.tasks.message}
                      </p>
                    )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
          initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={styles.motion}
          >
            <div className={styles.formTitle}>
              <h2 className={styles.h2}>
                Дизайн сайту
              </h2>
              <p className={styles.p}>
                TEST3TEST3
              </p>
            </div>

            <div className={styles.inputs}>
              <div className={styles.inputsblock}>
                <label
                    htmlFor='radio'
                    className={styles.label}
                  >
                    У Вас вже є фірмовий стиль?
                </label>
                <div className={styles.holdflex}>
                    <div className={styles.radioflex}>
                      <input
                        type='radio'
                        id='yesRadio'
                        value="yes"
                        {...register('answer')}
                        className={`${styles.inputradio} ${selectedOption === 'yes' ? styles.inputradioActive : ''}`}
                        onChange={() => handleRadioChange('yes')}
                        onClick={() => handleRadioChange('yes')}
                        onTouchStart={() => handleRadioChange('yes')}
                        autoComplete='yesRadio'
                      />
                      <label htmlFor="yesRadio" className={styles.radiolabel}>Так</label>
                      </div>
                    <div className={styles.radioflex}>
                      <input
                        type='radio'
                        id='noRadio'
                        value="no"
                        {...register('answer')}
                        className={`${styles.inputradio} ${selectedOption === 'no' ? styles.inputradioActive : ''}`}
                        onChange={() => handleRadioChange('no')}
                        onClick={() => handleRadioChange('no')}
                        onTouchStart={() => handleRadioChange('no')}
                        autoComplete='noRadio'
                      />
                      <label htmlFor="noRadio" className={styles.radiolabel}>Ні</label>
                      </div>
                  </div>
                      {errors.answer?.message && (
                        <p className={styles.errors}>
                          {errors.answer.message}
                        </p>
                      )}
                </div>
              <div className={`${styles.showBlok} ${selectedOption === 'no' ? styles.showBlokActive : ''}`}>
                <div className={styles.inputsblock}>
                  <label
                      htmlFor='color'
                      className={styles.label}
                    >
                      Палітра кольорів
                  </label>
                      <input
                        type='text'
                        id='color'
                        {...register('color')}
                        autoComplete='color'
                        placeholder='Червоний, red, #ff0000...'
                        className={styles.input}
                      />
                </div>
                <div className={styles.inputsblock}>
                  <label
                      htmlFor='fonts'
                      className={styles.label}
                    >
                      Шрифти
                  </label>
                      <input
                        type='text'
                        id='fonts'
                        {...register('fonts')}
                        autoComplete='fonts'
                        placeholder='Roboto, Open Sans...'
                        className={styles.input}
                      />
                </div>
                <div className={styles.inputsblock}>
                  <label
                      htmlFor='mood'
                      className={styles.label}
                    >
                      Настрій сайту
                  </label>
                      <input
                        type='text'
                        id='mood'
                        {...register('mood')}
                        autoComplete='mood'
                        placeholder='Сучасний, мінімалістичний, креативний...'
                        className={styles.input}
                      />
                </div>
              </div>
              <div className={`${styles.showBlok2} ${selectedOption === 'yes' ? styles.showBlokActive2 : ''}`}>
                Відправте нам на почту або в телеграм всю інформацію (Бренд-бук, логотип та все що відносеться до дизайну). Контакти ви знайдете в кінці сторінки.
              </div>
            </div>
              <h2 className={styles.infoH2}>Вкажіть сайти, які вам подобаються і ті, які вам не подобаються. Ця інформація стане гарним інструментом для створення дизайну</h2>
            <div className={styles.inputs}>
              <div className={styles.inputsblock}>
                <label
                    htmlFor='goals'
                    className={styles.label}
                  >
                    Подобаються
                </label>
                    <input
                      type='text'
                      id='like'
                      {...register('like')}
                      autoComplete='like'
                      placeholder='http://exampl.com.ua/'
                      className={styles.input}
                    />
                    {errors.like?.message && (
                      <p className={styles.errors}>
                        {errors.like.message}
                      </p>
                    )}
              </div>
              <div className={styles.inputsblock}>
                <label
                    htmlFor='goals'
                    className={styles.label}
                  >
                    Не подобаються
                </label>
                    <input
                      type='text'
                      id='notLike'
                      {...register('notLike')}
                      autoComplete='notLike'
                      placeholder='http://exampl.com.ua/'
                      className={styles.input}
                    />
                    {errors.notLike?.message && (
                      <p className={styles.errors}>
                        {errors.notLike.message}
                      </p>
                    )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div
          initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={styles.motion}
          >
            <div className={styles.formTitle}>
              <h2 className={styles.h2}>
                Карта сайту
              </h2>
              <p className={styles.p}>
                TEST4TEST4
              </p>
            </div>

            <div className={styles.inputs}>
              <div className={styles.inputsblock}>
                <label
                    htmlFor='structure'
                    className={styles.label}
                  >
                    Cтруктура
                </label>
                  <div className={styles.margin}>
                    <input
                      type='text'
                      id='structure'
                      {...register('structure')}
                      autoComplete='structure'
                      placeholder='Головна сторінка, каталог товарів, про нас, блог, контакти...'
                      className={styles.input}
                    />
                    {errors.structure?.message && (
                      <p className={styles.errors}>
                        {errors.structure.message}
                      </p>
                    )}
                  </div>
              </div>
              <div className={styles.inputsblock}>
                <label
                    htmlFor='functionality'
                    className={styles.label}
                  >
                    Функціональність
                </label>
                  <div className={styles.margin}>
                    <input
                      type='text'
                      id='functionality'
                      {...register('functionality')}
                      autoComplete='functionality'
                      placeholder='Oбліковий запис, кошик, пошук та фільтрація, інтерактивні елементи...'
                      className={styles.input}
                    />
                    {errors.functionality?.message && (
                      <p className={styles.errors}>
                        {errors.functionality.message}
                      </p>
                    )}
                  </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 5 && (
          <motion.div
          initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={styles.motion}
          >
            <div className={styles.formTitle}>
              <h2 className={styles.h2}>
                Фініш
              </h2>
              <p className={styles.p}>
                Дякую за витрачений час, зачекайте, поки ми звяжемося з Вами.
              </p>
            </div>
          </motion.div>
        )}
      </form>

      {/* Navigation */}
      <div className={styles.navi}>
        <div className={styles.naviflex}>
          <button
            type='button'
            onClick={prev}
            disabled={currentStep === 0}
            className={styles.formbtn}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className={styles.svg}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </button>
          <button
            type='button'
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className={styles.formbtn}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className={styles.svg}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}          