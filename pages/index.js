import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import Layout from "../components/layout"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
        <div className="hero w-screen h-[75vh] bg-base-200 -m-5 " style={{backgroundImage: 'url(/war-g2874454a2_1920.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 heading font-bold"><budoux-ja>ピカデリー軍集団</budoux-ja></h1>
                </div>
            </div>
        </div>
        <div className="hero w-screen h-[75vh] bg-base-200 -m-5 mt-5">
            <div className="hero-content text-center">
                <div className="">
                    <p className="mb-5 text-3xl font-bold">『我々が手を血に染めれば、それだけ染めずに済む者が増えるんだ。』</p>
                    {/*p.text-large.text-*/}
                </div>
            </div>
        </div>
        <div className="mt-10">
            <div className="card shadow-xl w-96">
                <div className="card-body">
                    <h1 className="card-title">キーロフ大佐</h1>
                    <p>ピカデリー軍集団 司令官</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}
