#!/usr/bin/env node
'use strict'

const bulkDeploy = require('./lib')

const projects = [
  {
    name: 'Hello World',
    path: '../../',
    projects: 'examples/typescript/hello-world'
  }
]

bulkDeploy(projects, {
  debug: true,
  publish: true
})
