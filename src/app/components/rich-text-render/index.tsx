/*
 * @Todo: 请补充模块描述
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-12 11:31:02
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
"use client";
import { RichTextRender } from "gyp-gao-ui";

export default function CreateText({ content }: {content: string}) {

  return (
    <div style={{marginBottom: '30px'}}>
      <RichTextRender content={content} />
    </div>
  );
}
