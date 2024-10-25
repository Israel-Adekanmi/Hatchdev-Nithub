const fs = require('fs');

// Practice session
// Create a folder

// Define paths for the parent folder and three subfolders
const parentFolder = 'parentFolder';
const folder1 = `${parentFolder}/folder1`;
const folder2 = `${parentFolder}/folder2`;
const folder3 = `${parentFolder}/folder3`;
const fileName = 'myFile.txt';

// Create the folders inside the parent folder
[folder1, folder2, folder3].forEach((folder) => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
});

// Define the file path in the first folder
const filePath = `${folder1}/${fileName}`;

// Write your name and account number to the file in the first folder
const content = 'Adekanmi Israel\nAccount Number: 8029737682';
fs.writeFileSync(filePath, content, 'utf-8');

// Copy the file into the second and third folders
fs.copyFileSync(filePath, `${folder2}/${fileName}`);
fs.copyFileSync(filePath, `${folder3}/${fileName}`);

// Print the contents of the files from each folder
[folder1, folder2, folder3].forEach((folder) => {
    const fileContent = fs.readFileSync(`${folder}/${fileName}`, 'utf-8');
    console.log(`Content of file in ${folder}:\n${fileContent}\n`);
});
