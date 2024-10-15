/*
 * 工具函数
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-15 14:53:57
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { headers } from 'next/headers';
/** 获取当前域名 */
export const getHost = () => {
    const headersList = headers();
    // https://developer.mozilla.org/docs/Web/API/Headers/get
    // https://nextjs.org/docs/app/api-reference/functions/headers
    const host = headersList.get('host');
    const referer = headersList.get('referer');
    // 获取协议
    const protocol = referer?.split('://')[0];
    const url = `${protocol}://${host}`;
    return url;
}
