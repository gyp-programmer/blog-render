/*
 * @Todo: 请补充模块描述
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-11 15:05:13
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { getHost } from '../../utils';

export const metadata: Metadata = {
    title: '欢迎预览',
  }

const RichTextReader = dynamic(() => import("../components/rich-text-render"), {
    ssr: false,
});

export default async function Preview() {
    const url = getHost();
    const data = await fetch(`${url}/api`);
    const { rows } = await data.json();

    return (
        <div>
            {rows.map((o: { likes: string }, i: number) => <RichTextReader key={i} content={o.likes} />)}
        </div>
    )
}
