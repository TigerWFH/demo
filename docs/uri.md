# URI 相关知识，参考《http 权威指南》一书

- URI 下的两个子集：URL（位置识别）和 URN（名字识别）

- URL 由 9 个部分组成

  ```
  <schema>://<user>:<passwd>@<host>:<port>/<path>;<params>?<query>#<frag>

  demos:

      http://monkey:5950@104.194.91.80:22233/front;name=monkey/index.html;age=12?app=p-a-j-&outBizType=p-a-j-#ticket


  ```

- URL 字符集，URL 是可移植的（portable）

  1、有些协议在传输过程中，会去掉一些特殊的字符，破坏了传递信息的完整性（SMTP 就是其中一种）。为了保证信息的完整性，URL 只能使用一些相对通用的安全字母表中的字符

  2、规范制定者希望 URL 是可读的，因此排除了控制字符以及空格等不可见字符

  3、但是 URL 的完整性又要求可以传输所有字符，因此就出现了 URL 转义字符和 URL 通用字母表（URL 字符集）

  4、转义规则：使用%和 2 个十六进制数（代表着 ASCII 字符）

  5、保留(保留字符在用于保留用途之外的场合时)以及受限的字符应该进行转义

  6、保留以及受限的字符

  !["保留以及受限的字符"](./url.png)
