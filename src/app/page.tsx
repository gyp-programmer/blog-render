/*
 * @Todo: 请补充模块描述
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-11 14:57:00
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  // 首次尝试服务端渲染获取数据
  // const data = await fetch("http://localhost:3000/api", { method: 'put' });
  // const { rows } = await data.json();
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            预览链接
          </a>
          <a
            href="/create"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            创建数据
          </a>
        </div>
      </main>
    </div>
  );
}
