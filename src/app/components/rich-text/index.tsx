/*
 * @Todo: 请补充模块描述
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-12 11:31:02
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
"use client";
import { RichText } from "gyp-gao-ui";
import { useState } from "react";
import { getHostStatic } from '../../../utils/static-index';
import './index.scss';

export default function CreateText() {
  const [data, setData] = useState('');
  const handleInsert = async () => {
    const res = await fetch(
      `${getHostStatic()}/api/add-pet`,
      {
        method: "post",
        body: JSON.stringify({
          likes: data,
        }),
      }
    );
    console.log(res.status)
  };

  // const createTable = async () => {
  //   await fetch("http://localhost:3000/api/add-pet", {
  //     method: "post",
  //   });
  // };

  const handleChange = (value: string) => {
    setData(value);
  }

  return (
    <div>
      <RichText onChange={handleChange} />

      <div className="btn" onClick={handleInsert}>保存数据</div>
    </div>
  );
}
