/*
 * 植入nextUI的Provider
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-11-14 11:40:41
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
