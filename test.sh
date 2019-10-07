#!/bin/bash
for d in ./packages/*/ ; do (cd "$d" && npm i && npm test -- -u && bash -c 'if [[ `git status --porcelain` ]]; then >&2 echo "Fail"; exit 1; fi'); done