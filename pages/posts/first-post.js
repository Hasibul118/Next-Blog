import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Layout from '../../components/layout'

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />

            <div className='text-center'>
                <h1 className='text-6xl mb-4'>First Post</h1>
                <Image className='mb-4' src='/images/profile.jpg' width={144} height={144} alt='profile' />
                <div className='mt-2'>
                    <Link href='/'>
                        <a className='text-2xl rounded border-2 pt-0 p-2'>Back to Home</a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default FirstPost