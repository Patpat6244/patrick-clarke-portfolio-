import http.server
import os
import re

class RangeHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
        if not os.path.exists(path):
            self.send_error(404, "File not found")
            return None

        range_header = self.headers.get("Range")
        file_size = os.path.getsize(path)
        ctype = self.guess_type(path)

        if range_header:
            m = re.match(r"bytes=(\d*)-(\d*)", range_header)
            start_s, end_s = m.group(1), m.group(2)
            start = int(start_s) if start_s else 0
            end = int(end_s) if end_s else file_size - 1
            end = min(end, file_size - 1)
            length = end - start + 1

            f = open(path, "rb")
            f.seek(start)
            self.send_response(206)
            self.send_header("Content-type", ctype)
            self.send_header("Accept-Ranges", "bytes")
            self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
            self.send_header("Content-Length", str(length))
            self.end_headers()
            return _LimitedReader(f, length)
        else:
            f = open(path, "rb")
            self.send_response(200)
            self.send_header("Content-type", ctype)
            self.send_header("Accept-Ranges", "bytes")
            self.send_header("Content-Length", str(file_size))
            self.end_headers()
            return f

class _LimitedReader:
    def __init__(self, f, length):
        self.f = f
        self.remaining = length
    def read(self, n=-1):
        if self.remaining <= 0:
            return b""
        if n < 0 or n > self.remaining:
            n = self.remaining
        data = self.f.read(n)
        self.remaining -= len(data)
        return data
    def close(self):
        self.f.close()

if __name__ == "__main__":
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8743
    server = http.server.ThreadingHTTPServer(("", port), RangeHTTPRequestHandler)
    print(f"Serving with Range support on port {port}")
    server.serve_forever()
