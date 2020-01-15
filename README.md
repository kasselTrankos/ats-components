# ats's react components

Create branch
- ```git subtree add <FOLDER> <BRANCH> --prefix=shared --squash```

Frist command git:
- ```git subtree split -P packages/{FOLDER_TO_SPLIT}  -b {BRANCH_NAME}```

use this git cmd's for mono-repo:
- ```git merge --squash -s subtree --no-commit <BRANCH>```
- ```git merge --squash -s subtree --no-commit --allow-unrelated-histories <BRANCH>``` 

Not use a merge, realy is a pull, becose both repos are same no need to merge it only pull
- ```git pull -s subtree -Xsubtree=packages/stepsIrrigation/ origin <BRANCH>```
FORCED 
- ```git pull -s subtree --allow-unrelated-histories -Xsubtree=packages/stepsIrrigation/ origin <BRANCH>```
