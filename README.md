##  box-sizing: border-box;

`box-sizing: border-box;` là một thuộc tính CSS giúp kiểm soát cách trình duyệt tính **kích thước của phần tử**.

### Cách hoạt động
Khi sử dụng `border-box`, **width và height sẽ bao gồm cả padding và border**.

Nghĩa là:
- mình sẽ đặt `width: 300px`
- Dù có `padding` hay `border`, tổng kích thước **vẫn là 300px**
- Giúp layout dễ kiểm soát và tránh bị tràn

### Vì sao nên dùng?
- Dễ căn chỉnh layout
- Không phải tính toán lại kích thước khi thêm padding/border
- Rất phổ biến trong các dự án web hiện đại

