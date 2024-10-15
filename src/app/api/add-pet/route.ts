/*
 * 尝试第一张表的数据处理
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-14 19:33:30
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
  try {
    if (!petName || !ownerName) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM Pets;`;
  return NextResponse.json({ pets }, { status: 200 });
}

// 第一次使用sql创建表
// export async function POST() {
//     await sql`CREATE TABLE posts (likes INT);`;
//     return NextResponse.json({ status: 200 });
// }

export async function POST(request: Request) {
    const body = await request.json();
    await sql`INSERT INTO posts VALUES (${body.likes});`;
    return NextResponse.json({ status: 200 });
}
