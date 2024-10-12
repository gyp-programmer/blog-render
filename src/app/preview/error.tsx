/*
 * @Todo: 请补充模块描述
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-11 15:23:16
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!{error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}