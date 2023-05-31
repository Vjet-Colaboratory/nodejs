import http from 'http';

/**
 * Đoạn code trên sử dụng Node.js để tạo một máy chủ HTTP đơn giản. Hàm http.createServer()
 * được sử dụng để tạo một đối tượng máy chủ HTTP. Đối số đầu tiên của hàm này là một hàm
 * xử lý yêu cầu (request handler) được gọi mỗi khi có yêu cầu HTTP được gửi đến máy chủ.
 * Đối số thứ hai là một đối tượng cấu hình (configuration object) cho máy chủ. Trong ví dụ
 * trên, hàm xử lý yêu cầu chỉ in ra các thông tin về yêu cầu và phản hồi của máy chủ.
 * Hàm process.exit() được sử dụng để kết thúc quá trình Node.js hiện tại với mã thoát là 0.
 *
 * Để thoát chương trình tổ hợp phím
 */
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write(
    '<html><head><title>My firt web</title></head><body><h1>This is my content.</h1></body></html>'
  );
  res.end();
  //process.exit();
});

server.listen(8080, () => {
  console.log('server running at port 8080');
});
