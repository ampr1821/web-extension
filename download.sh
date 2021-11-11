#!/usr/bin/bash

textfile=domains.txt
archive=domains.tar.gz

wget https://raw.githubusercontent.com/mitchellkrogza/Phishing.Database/master/ALL-phishing-domains.tar.gz -O $archive
tar -xvzf $archive

if [[ -f "$textfile" ]]; then
    rm $textfile -v
fi

mv ALL-phishing-domains.txt $textfile -v
rm $archive -v
