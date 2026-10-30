const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const usersFile = path.join(dataDir, 'users.json');
const notesFile = path.join(dataDir, 'notes.json');
const filesMetaFile = path.join(dataDir, 'files.json');
const vaultFilesDir = path.join(dataDir, 'vault_files');

// Ensure data directory and files exist
function initDb() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(vaultFilesDir)) {
    fs.mkdirSync(vaultFilesDir, { recursive: true });
  }
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([], null, 2), 'utf-8');
  }
  if (!fs.existsSync(notesFile)) {
    fs.writeFileSync(notesFile, JSON.stringify([], null, 2), 'utf-8');
  }
  if (!fs.existsSync(filesMetaFile)) {
    fs.writeFileSync(filesMetaFile, JSON.stringify([], null, 2), 'utf-8');
  }
}

function readUsers() {
  initDb();
  try {
    const data = fs.readFileSync(usersFile, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading users file:', err);
    return [];
  }
}

function writeUsers(users) {
  initDb();
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
}

function readNotes() {
  initDb();
  try {
    const data = fs.readFileSync(notesFile, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading notes file:', err);
    return [];
  }
}

function writeNotes(notes) {
  initDb();
  fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2), 'utf-8');
}

function readFilesMeta() {
  initDb();
  try {
    const data = fs.readFileSync(filesMetaFile, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading files meta:', err);
    return [];
  }
}

function writeFilesMeta(files) {
  initDb();
  fs.writeFileSync(filesMetaFile, JSON.stringify(files, null, 2), 'utf-8');
}

module.exports = {
  initDb,
  vaultFilesDir,
  readUsers,
  writeUsers,
  readNotes,
  writeNotes,
  readFilesMeta,
  writeFilesMeta,
};
