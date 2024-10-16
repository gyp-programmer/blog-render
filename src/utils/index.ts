/*
 * 工具函数
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-15 14:53:57
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { headers } from 'next/headers';

const logPrefix = '[blog-render]:--> '
/** 获取当前域名 */
export const getHost = () => {
    const headersList = headers();
    // https://developer.mozilla.org/docs/Web/API/Headers/get
    // https://nextjs.org/docs/app/api-reference/functions/headers
    const host = headersList.get('host');
    const xForwardedHost = headersList.get('x-forwarded-host');
    const referer = headersList.get('referer');
    const protocol = headersList.get('x-forwarded-proto');
    console.info(logPrefix + 'url:===', host, referer, protocol)
    // 获取协议
    const realProtocol = referer?.split('://')[0] || protocol;
    const realHost = host || xForwardedHost;
    console.info(logPrefix + 'realUrl:==', realProtocol, realHost)
    const url = `${realProtocol}://${realHost}`;
    return url;
}
