#!/bin/bash
# Mac
cp  /Users/kazuki_yabuuchi/Documents/GitHub/tutorial/src/js/go-react.min.js /Users/kazuki_yabuuchi/Documents/GitHub/tutorial/docs/
mv /Users/kazuki_yabuuchi/Documents/GitHub/tutorial/docs/go-react.min.js /Users/kazuki_yabuuchi/Documents/GitHub/tutorial/docs/index.js
read -p "Please input your comment:  " comment
git add -A 
git commit -a -m $comment
git push