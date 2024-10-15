/*
 * @Todo: 请补充模块描述
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-11 15:33:46
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { sql } from '@vercel/postgres';
export async function GET() {
  const { rows } = await sql`SELECT * FROM posts`;
  return Response.json({ rows })
}
export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  return Response.json({ name, email })
}
export async function PUT() {
  const { rows } = await sql`SELECT * FROM pets`;
  return Response.json({ rows })
}
