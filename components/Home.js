// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'

import Input from "./Input";
import TextArea from "./TextArea";


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-full h-screen bg-blue-50">
      <div className="px-3 pt-10 bg-slate-400">
        <form action="" className="flex flex-col items-center w-1/3 mx-auto">
          <Input id={"name"} name={""} label={"Your Name"} placeholder={"Enter Your Name"} />
          <Input id={"email"} name={""} label={"Your Email"} placeholder={"Enter Your Email"} />
          <TextArea id="message" name="message" label={"You Message"} placeholder="Hi There" />
          <button type="submit" disabled={false} className="w-full py-2 my-6 font-bold bg-green-300 rounded-md active:text-white active:bg-purple-600 focus:ring-2 focus:ring-purple-400 hover:cursor-pointer disabled:bg-opacity-50 disabled:cursor-not-allowed">Submit</button>
        </form>
      </div>
    </div>
  )
}
