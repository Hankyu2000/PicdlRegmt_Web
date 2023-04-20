import styles from './layout.module.css'
import Head from "next/head";
import Link from "next/link";
export default function Layout({children}){
    return(
        <>
            <Head>
                <title>ピカデリー</title>
            </Head>
            <header>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-xl" href="/">ピカデリー軍集団</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href="/about/kirov">About Kirov</Link></li>
                            <ul tabIndex="0">
                                <a>About</a>
                                <ul className="p-2 bg-base-100">
                                    <li><Link href="/about/kirov">About Kirov</Link></li>
                                    <li><Link href="/about/Kairi">About Kairi</Link></li>
                                </ul>
                            </ul>
                        </ul>
                    </div>
                </div>
            </header>
            <div>
                {children}
            </div>
        </>
    )
}