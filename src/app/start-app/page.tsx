/*
 * app的框架选型
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-11-14 11:25:08
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "app的框架选型",
};
const Accordion = dynamic(() => import("../components/Item"), {
  ssr: false,
});

export default function StartApp() {
  return (
    <div>
      <Accordion />
    </div>
  );
}
