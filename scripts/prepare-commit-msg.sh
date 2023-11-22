#!/bin/bash
# version 0.1
#@author: william.ralitera@gmail.com

# Step 1: add branches to skip for prepare commit here
if [ -z "$BRANCHES_TO_SKIP" ]; then
  BRANCHES_TO_SKIP=(develop)
fi

# Step 2: Get the current branch name
BRANCH_NAME=$(git symbolic-ref --short HEAD)

# Remove the first part form branch name that match: <string>/<string2> => result will be <string2>
BRANCH_NAME="${BRANCH_NAME##*/}"

# Get username from email, will be useally on this format: firstName.lastName
USERNAME="$(cut -d'@' -f1 <<< $(git config user.email))"
# Get lastName
LASTNAME="$(cut -d'.' -f2 <<<${USERNAME})"

# Get the first letter from firstName
FIRSTNAME="${USERNAME:0:1}";
# Get the first letter from lastName
LASTNAME="${LASTNAME:0:1}";

#Uppercase first name
FIRSTNAME="$(tr '[:lower:]' '[:upper:]' <<<${FIRSTNAME})"
#Uppercase last name
LASTNAME="$(tr '[:lower:]' '[:upper:]' <<<${LASTNAME})"

# Step 3: check if branch excluded
BRANCH_EXCLUDED=$(printf "%s\n" "${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$")

#Step 5: get task number and b ranch prefix from branch name
BRANCHEINFO=$(echo $BRANCH_NAME | grep -o '^[^[:digit:]]*' | tr '[:lower:]' '[:upper:]')
TASKNUMBER=$(echo $BRANCH_NAME | grep -Eo '[0-9]{3,10}' | head -1)

if [ -n "$BRANCH_NAME" ] && ! [[ $BRANCH_EXCLUDED -eq 1 ]]; then
  sed -i.bak -e "1s/^/[$FIRSTNAME$LASTNAME][$BRANCHEINFO$TASKNUMBER]: /" $1
fi
