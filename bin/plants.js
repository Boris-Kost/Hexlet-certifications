#!/usr/bin/env node

const { fileURLToPath } = require('node:url');
const path = require('node:path');
const fs = require('fs');
const solution = require('../index.js').default;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = process.argv[2];
const content = fs.readFileSync(path.join(__dirname, '..', fileName), 'utf-8');

// BEGIN
solution(content);
// END
