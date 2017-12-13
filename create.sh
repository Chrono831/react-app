#!/bin/sh
getopt --test > /dev/null
if [[ $? -ne 4 ]]; then
    echo "I’m sorry, `getopt --test` failed in this environment."
    exit 1
fi

REDUX_ARG=false
AGGRID_ARG=false
DEST_DIR=`pwd`
SRC_DIR="$(dirname "$(readlink -f $0)")"
OPTIONS=`getopt -o d: --long redux,ag-grid -n "$0" -- "$@"`

eval set -- "$OPTIONS"

while true ; do
    case "$1" in
        -d) DEST_DIR="$2" ; shift 2;;
        --redux) REDUX_ARG=true ; shift ;;
        --ag-grid) AGGRID_ARG=true ; shift ;;
        --) shift ; break ;;
        *) echo "Internal error!" ; exit 1 ;;
    esac 
done

if [[ $REDUX_ARG ]]; then
    echo "Copying Redux template to $DEST_DIR"
    rsync -a --quiet "$SRC_DIR"/reduxTemplate/* "$DEST_DIR"
else
    echo "Copying template to $DEST_DIR"
    rsync -a --quiet "$SRC_DIR"/template/* "$DEST_DIR"
fi

cd "$DEST_DIR"

echo "Installing base packages..."
xargs -a "$SRC_DIR/dependencies.txt" npm install

if [[ $REDUX_ARG ]]; then
    echo "Installing redux packages..."
    xargs -a "$SRC_DIR/reduxDependencies.txt" npm install
fi

if [[ $AGGRID_ARG ]]; then
    echo "Installing ag-grid packages..."
    xargs -a "$SRC_DIR/aggridDependencies.txt" npm install
fi    

echo "Running watch task..."
npm run watch