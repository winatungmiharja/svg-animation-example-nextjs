/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-gradient py-8 bg-center bg-cover lg:bg-center'>
          <Header />
          <div className='layout min-h-[calc(100vh-64px-64px)] flex flex-col-reverse flex-wrap lg:flex-row'>
            <div className='flex flex-col gap-8 justify-center w-full lg:w-5/12'>
              <h1 className='text-6xl font-black'>
                UI / UX <br />
                Design
              </h1>
              <p className='max-w-[75%] lg:max-w-full'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque suscipit tellus vitae purus dignissim, nec
                tincidunt neque condimentum.
              </p>
              <div>
                <Button>Learn More</Button>
              </div>
            </div>
            <div className='flex items-center w-full bg-cover lg:w-7/12'>
              <img src='/images/group_img.svg' alt='' className='w-full' />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
