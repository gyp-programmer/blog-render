/*
 * @Todo: 请补充模块描述
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-11 15:33:46
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
export async function GET() {
    console.log('jkinlkashj')
    return Response.json({ message: 'Hello from Next.js!' })
}
export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  return Response.json({ name, email })
}
