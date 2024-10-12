/*
 * 创建数据
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-12 09:14:16
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import dynamic from 'next/dynamic'
import { Metadata } from 'next';
import './a.scss';

const RichText = dynamic(() => import("../components/rich-text"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: '创建数据',
}


export default function CreateText() {
  return (
    <div className='a'>
        asdf
        <RichText />
    </div>
  );
}
