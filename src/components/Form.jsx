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
    <div className=' flex justify-center pt-5 pb-10 w-full bg-teal-300'>
      <form ref={form} onSubmit={sendEmail} className='form rounded-xl w-full items-center shadow-xl bg-base-300 p-3 m-8 flex flex-col'>
        <h1 className='text-center playfair font-bold text-6xl mb-5'>Request Your Free Quote</h1>

        <input type="text" name='project_date' placeholder="Project Date" className="input w-full mt-2" />

        <textarea name='project_details' className="textarea textarea-bordered w-full mt-2 h-44" placeholder="Project Details"></textarea>

        <input type="text" name='project_address' placeholder="Project Address" className="input w-full mt-2" />
        <input type="text" name="from_name" placeholder="Full Name" className="input w-full mt-2" />
        <input type="phone" name="phone_number" placeholder="Phone Number" className="input w-full mt-2" />
        <input type="email" name='user_email' placeholder="Email Address" className="input w-full mt-2" />

        <input type="submit" value="Submit" className="btn btn-lg mt-5 w-44" />
      </form>

    </div>

  );
}

export default Form