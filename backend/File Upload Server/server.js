const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Function to handle file upload
const handleFileUpload = (req, res) => {
  const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '');
  
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });

  req.on('end', () => {
    // Extract the file data
    const fileDataStart = data.indexOf('\r\n\r\n') + 4;
    const fileDataEnd = data.lastIndexOf(`--${boundary}--`) - 2;
    const fileData = data.slice(fileDataStart, fileDataEnd);

    
    // Extract filename
    const filenameMatch = data.match(/filename="(.+?)"/);
    if (!filenameMatch) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('No file uploaded');
      return;
    }

    const filename = filenameMatch[1];

    // Write file to the disk
    const filePath = path.join(__dirname, 'uploads', filename);
    fs.writeFileSync(filePath, fileData);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`File uploaded successfully: ${filename}`);
  });
};

// Create HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    handleFileUpload(req, res);
  } else if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>File Upload Server</h2>
      <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="file"><br><br>
        <button type="submit">Upload File</button>
      </form>
    `);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
