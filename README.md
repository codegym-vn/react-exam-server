# Install dependencies
```$ npm install```
# Running server
```$ npm run dev```
- The server listens at port 3001
# APIs
#### User model
```
{
    "id": 1,
    "name": "User 1",
    "email": "user1@example.com",
    "birthday": "1976-03-13",
    "password": "password1"
}
```
# API Lấy Danh Sách Người Dùng
API này cho phép lấy danh sách tất cả người dùng có trong hệ thống.
## Endpoint
- **Đường dẫn:** `/api/users`
- **Phương thức:** GET
## Yêu cầu (Request)
#### Ví dụ 
```
GET /api/users
```
# API Lấy Danh Sách Người Dùng Phân Trang
API này cho phép lấy danh sách người dùng từ cơ sở dữ liệu với tính năng phân trang.
## Endpoint
- **Đường dẫn:** `/api/users`
- **Phương thức:** GET
## Tham số yêu cầu
- **`_page`**: Xác định số trang cần lấy. Mặc định là 1 nếu không được chỉ định.
- **`_limit`**: Xác định số lượng người dùng tối đa trên mỗi trang. Mặc định là 10 nếu không được chỉ định.
## Ví dụ
```GET /api/users?_page=1&_limit=10```

# API Lọc Danh Sách Người Dùng

API này cho phép lọc danh sách người dùng theo các tiêu chí nhất định.

## Endpoint

- **Đường dẫn:** `/api/users/filter`
- **Phương thức:** GET

## Yêu cầu (Request)
#### Tham số URL
- `email` (String): email của người dùng cần lấy thông tin.
#### Ví dụ
```
GET /api/users/filter?email=user@example.com
```
# API Lấy Thông Tin Người Dùng Bằng ID
API này cho phép lấy thông tin của một người dùng dựa trên ID của họ
## Endpoint
- **Đường dẫn:** `/api/users/:id`
- **Phương thức:** GET
## Yêu cầu (Request)
#### Tham số URL
- `id` (Number): ID của người dùng cần lấy thông tin.
#### Ví dụ
```
GET /api/users/1
```
# API Tạo Người Dùng
API này cho phép tạo mới một người dùng trong cơ sở dữ liệu.
## Endpoint
- **Đường dẫn:** `/api/users`
- **Phương thức:** POST
- **Content-Type:** application/json
## Yêu cầu (Request)
#### Tham số yêu cầu (Request Body)
Các trường dữ liệu cần được cung cấp để tạo người dùng:
- `name` (String): Tên của người dùng mới.
- `email` (String): Email của người dùng mới.
- `birthday` (String): Ngày sinh của người dùng mới.
- `password` (String): Mật khẩu của người dùng mới.
#### Ví dụ
```
POST /api/users
Content-Type: application/json

{
  "name": "Người dùng mới",
  "email": "newuser@example.com",
  "birthday": "1990-01-01",
  "password": "newpassword"
}
```
# API Xoá Người Dùng
API này cho phép xoá một người dùng từ cơ sở dữ liệu bằng ID của người dùng.
## Endpoint
- **Đường dẫn:** `/api/users/:id`
- **Phương thức:** DELETE
## Yêu cầu (Request)
#### Tham số URL
- `id` (Number): ID của người dùng cần xoá.
#### Ví dụ
```
DELETE /api/users/123
```
# API Cập Nhật Thông Tin Người Dùng
API này cho phép cập nhật thông tin của một người dùng đã đăng ký bằng cách sử dụng ID của người dùng.
## Endpoint

- **Đường dẫn:** `/api/users/:id`
- **Phương thức:** PUT
- **Content-Type:** application/json

## Yêu cầu (Request)

#### Tham số URL

- `id` (Number): ID của người dùng cần cập nhật thông tin.

#### Tham số yêu cầu (Request Body)
Các trường dữ liệu có thể được cập nhật:
- `name` (String): Tên mới của người dùng.
- `email` (String): Email mới của người dùng.
- `birthday` (String): Ngày sinh mới của người dùng.
- `password` (String): Mật khẩu mới của người dùng.
#### Ví dụ
```
PUT /api/users/123
Content-Type: application/json

{
  "name": "Người dùng mới",
  "email": "newuser@example.com",
  "birthday": "1990-05-15",
  "password": "newpassword"
}
```
#### API Đăng nhập
API này cho phép xác thực người dùng bằng cách đăng nhập và trả về thông tin người dùng sau khi đăng nhập thành công.
##### Endpoint
- **Đường dẫn:** `/api/login`
- **Phương thức:** POST
- **Content-Type:** application/json

#### Yêu cầu (Request)
##### Tham số yêu cầu
| Tên     | Kiểu dữ liệu | Mô tả                         |
|---------|--------------|-------------------------------|
| email   | String       | Email của người dùng          |
| password| String       | Mật khẩu của người dùng       |

#### Ví dụ yêu cầu
```
POST /api/login
Content-Type: application/json

{
  "email": "example@example.com",
  "password": "password123"
}
```
