"use client";
import ReCAPTCHA from "react-google-recaptcha";
import {FormEvent, useState} from "react";

export default function Home() {

  const [captcha, setCaptcha] = useState<string | null>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(captcha);
    if (isCaptchaVerified) {
      console.log('ReCAPTCHA Verified!')
      // ทำการส่งข้อมูลหรือดำเนินการต่อที่ต้องการ
    } else {
      console.log('Please verify ReCAPTCHA!')
      // แจ้งให้ผู้ใช้ทำการยืนยัน ReCAPTCHA
    }
  }

  // setIsCaptchaVerified true => onchange => ReCAPTCHA
  const handleCaptchaChange = (value: string | null) => {
    setCaptcha(value);
    if (value !== null) {
      setIsCaptchaVerified(true);
    }
  };

  return (
      <div>
        <section>
          <h1 className="">Are You a Robot?</h1>
          <form onSubmit={onSubmit}>
            <input placeholder="Firstname" type="text" disabled={!isCaptchaVerified}/>
            <input placeholder="Lastname" type="text" disabled={!isCaptchaVerified}/>
            <input placeholder="Email" type="email" disabled={!isCaptchaVerified}/>

            {/* Recaptcha*/}
            {/* ถ้ากด setIsCaptchaVerified true กด input ได้  */}
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={handleCaptchaChange}
            />

            <input type="submit" className="border rounded-xl border-blue-500" disabled={!isCaptchaVerified}/>
          </form>
        </section>
      </div>
  );
}
