import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: null
    };

    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form
      ref={formRef} //
      className={styles.form}
    >
      <input
        className={styles.input} //
        type='text'
        name='name'
        ref={nameRef}
        placeholder='name'
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        ref={companyRef}
        placeholder='company'
      />
      <select
        className={styles.select} //
        name='theme'
        ref={themeRef}
        placeholder='theme'
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        className={styles.input} //
        type='text'
        name='title'
        ref={titleRef}
        placeholder='title'
      />
      <input
        className={styles.input} //
        type='text'
        name='email'
        ref={emailRef}
        placeholder='email'
      />
      <textarea
        className={styles.textarea} //
        name='message'
        ref={messageRef}
        placeholder='message'
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
