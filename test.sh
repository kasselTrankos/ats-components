#!/bin/bash
for d in ./packages/*/ ;  do (cd "$d" && npm i && npm test -- -u && rm -rf node_modules) || exit 1 ; done