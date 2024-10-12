/*
 * @Todo: 请补充模块描述
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-12 11:40:11
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
        <nav>
            这是侧边
        </nav>
        {children}
    </section>
  );
}
