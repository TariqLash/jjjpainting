import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

export const Form = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nmug1k2', 'template_s25ufme', form.current, {
        publicKey: 'iDd8Q8bfNO2VETgYi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='bg-base-300'>
    <div className='mainForm flex justify-center items-center pt-5 pb-16 w-full'>
      <form ref={form} onSubmit={sendEmail} className='form rounded-xl w-full justify-around items-center shadow-xl bg-base-200 p-3 md:p-8 m-8 flex flex-col '>
        <h1 className='text-center playfair font-bold text-5xl md:text-6xl'>Request A Free Quote</h1>
        <text>Leave us a few details and we'll contact you to schedule an estimate</text>
        <input type="text" name='project_date' placeholder="Project Date" className="input w-full h-12 md:text-lg" />

        <textarea name='project_details' className="textarea w-full h-44 text-lg" placeholder="Project Details"></textarea>

        <input type="text" name='project_address' placeholder="Project Address" className="input w-full h-12 md:text-lg" />
        <input type="text" name="from_name" placeholder="Full Name" className="input w-full h-12 md:text-lg" />
        <input type="phone" name="phone_number" placeholder="Phone Number" className="input w-full h-12 md:text-lg" />
        <input type="email" name='user_email' placeholder="Email Address" className="input w-full h-12 md:text-lg" />

        <input type="submit" value="Submit" className="btn btn-lg btn-outline mt-5 w-44" />
      </form>

    </div>
</div>
  );
}

export default Form