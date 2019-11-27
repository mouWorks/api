#! /bin/bash

echo ">>> Remove Existing Folder"
if [ -d /usr/share/nginx/api_deploy ]; then
    rm -rf /usr/share/nginx/api_deploy
fi
if [ -d /usr/share/nginx/api_backup ]; then
    rm -rf /usr/share/nginx/api_backup
fi

echo ">>> Create Temp Folder if Exists, And backup folder"
mkdir /usr/share/nginx/api_deploy

echo ">>> Unzipping files into the folder"
tar -xf api-code.tar.gz -C /usr/share/nginx/api_deploy

echo ">>> Modify previous code to api_backup"
if [ -d /usr/share/nginx/api ]; then
    sudo mv /usr/share/nginx/api /usr/share/nginx/api_backup
fi

echo ">>> Move the new code Over"
sudo mv /usr/share/nginx/api_deploy /usr/share/nginx/api

cd  /usr/share/nginx/api

make reload

# Run Migration
#make migrate-prod