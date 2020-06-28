#!/usr/bin/env node

const fs = require('fs');
const toml = require('toml-patch');
const yaml = require('yaml-boost');

const args = process.argv.slice(2);
const expected = `Expected:
yaml-to-toml <yaml_path> <toml_path>`;

if (args.length < 2){
    console.log('Too few arguments');
    console.log(expected);
    process.exit(1);
} else if(args.length > 2){
    console.log('Too many arguments');
    console.log(expected);
    process.exit(1);
}

const parsedData = yaml.load(args[0]);

const tomlString = toml.stringify(parsedData);

fs.writeFileSync(args[1], tomlString);