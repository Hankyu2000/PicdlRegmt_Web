import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout"
export default function Kirov(){
    return (
        <Layout>
            <Head>
                <title>About Commander: Col. Kirov | Piccadilly Region</title>
            </Head>
            <h3>Meet Our Commander:</h3>
            <h1>Colonel Archie Kirov</h1>
            <Link href="/">Back to Home.</Link>
        </Layout>
    )
}