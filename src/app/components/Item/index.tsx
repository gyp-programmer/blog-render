/*
 * 修复nextUI bug
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-11-14 16:22:23
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
"use client";
import { AccordionItem, Accordion } from "@nextui-org/react";

const data = [
  {
    title: "选定技术栈",
    content:
      "采用react库进行开发，从自身熟练度出发，团队中当然也是要根据实际情况来进行选择。",
  },
  {
    title: "使用场景",
    content: `
                用作手机端的应用，手机app；
                微信环境的体量，在微信环境中，微信的用户体量大，所以会上架微信小程序;
                由于后续混合开发的需要，所以会将自身的应用嵌入到别的app中，所以需要支持h5的展示;
                其他的一些支付宝、京东等小程序也会根据后续发展，选择上架
            `,
  },
  {
    title: "框架选型",
    content: `
                由于开发一款app之后，需要在不同端进行展示（app、微信小程序、h5等其他小程序），所以考虑使用多端统一开发框架;
                
                目前市面上的多端开发框架有：uni-app、taro，
    
                Uni-app:
                    Uni-app 是一个基于 Vue.js 的跨平台应用开发框架，可以将代码编译成微信小程序、支付宝小程序、H5 网页以及App端。Uni-app 提供了一套完整的开发工具和组件库，适合Vue.js开发者使用。
    
                Taro:
                    Taro 是一个多端开发框架，可以将代码编译成微信小程序、支付宝小程序、H5 网页以及App端。Taro 提供了一套完整的开发工具和组件库，适合React.js开发者使用。
            `,
  },
  {
    title: "定型",
    content: "最终由上述原因，选择使用 Taro 框架作为app的开发技术栈",
  },
];
const Item = () => {
  return (
    <>
      <Accordion>
        {data.map((o) => (
          <AccordionItem key={o.title} title={o.title}>
            {o.content}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Item;
