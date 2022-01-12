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
        <section className='bg-center bg-cover bg-gradient py-8'>
          <Header />
          <div className='flex flex-wrap layout min-h-[calc(100vh-64px-64px)]'>
            <div className='flex flex-col gap-8 justify-center w-5/12'>
              <h1 className='font-black text-6xl'>
                UI / UX <br />
                Design
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque suscipit tellus vitae purus dignissim, nec
                tincidunt neque condimentum.
              </p>
              <div>
                <Button>Learn More</Button>
              </div>
            </div>
            <div className='bg-cover w-7/12'>
              <img src='/images/group_img.svg' alt='' className='w-full' />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
