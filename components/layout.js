import styles from './layout.module.css'
import Head from "next/head";
import Link from "next/link";
import Script from "next/script"
export default function Layout({children}){
    return(
        <>
            <Script src="https://unpkg.com/budoux/bundle/budoux-ja.min.js"></Script>
            <Head>
                <title>ピカデリー軍集団</title>
            </Head>
            <header>
                <div className="navbar text-black bg-blue-200">

                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-xl" href="/"></Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href="/task">我々の任務</Link></li>
                            <li tabIndex="0">
                                <a>指揮官の声</a>
                                <ul className="p-2 bg-base-300">
                                    <li><Link href="/about/kirov">キーロフについて</Link></li>
                                    <li><Link href="/about/Kairi">カイリについて</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/forces">部隊編成</Link></li>
                            <li><Link href="/warfare">装備</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className="m-5 bg-base-100">
                {children}
            </main>
        </>
    )
}