#!/usr/bin/env bash

export PATH="${PWD}/node_modules/.bin:$PATH"

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate -i /local/swagger.yaml -g typescript-fetch -o /local/src/api
parcel index.html
