var arr = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
var turn = 0

function check() {
    if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == 0)
        return 0;
    if (arr[3] == arr[4] && arr[4] == arr[5] && arr[5] == 0)
        return 0;
    if (arr[6] == arr[7] && arr[7] == arr[8] && arr[8] == 0)
        return 0;
    if (arr[0] == arr[3] && arr[3] == arr[6] && arr[6] == 0)
        return 0;
    if (arr[1] == arr[4] && arr[4] == arr[7] && arr[7] == 0)
        return 0;
    if (arr[2] == arr[5] && arr[5] == arr[8] && arr[8] == 0)
        return 0;
    if (arr[0] == arr[4] && arr[4] == arr[8] && arr[8] == 0)
        return 0;
    if (arr[2] == arr[4] && arr[4] == arr[6] && arr[6] == 0)
        return 0;
    if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == 1)
        return 1;
    if (arr[3] == arr[4] && arr[4] == arr[5] && arr[5] == 1)
        return 1;
    if (arr[6] == arr[7] && arr[7] == arr[8] && arr[8] == 1)
        return 1;
    if (arr[0] == arr[3] && arr[3] == arr[6] && arr[6] == 1)
        return 1;
    if (arr[1] == arr[4] && arr[4] == arr[7] && arr[7] == 1)
        return 1;
    if (arr[2] == arr[5] && arr[5] == arr[8] && arr[8] == 1)
        return 1;
    if (arr[0] == arr[4] && arr[4] == arr[8] && arr[8] == 1)
        return 1;
    if (arr[2] == arr[4] && arr[4] == arr[6] && arr[6] == 1)
        return 1;
}

function draw() {
    if (arr[0] == -1 || arr[1] == -1 || arr[2] == -1 || arr[3] == -1 || arr[4] == -1 || arr[5] == -1 || arr[6] == -1 || arr[7] == -1 || arr[8] == -1)
        return false
    else
        return true
}

function show(id) {
    if (arr[id] == -1) {
        var id2 = 1+id
        if (turn == 0){
            var pic = "circle.png"
            document.getElementById(id2).src = pic.replace('90x90', '225x225');
        }
        else{
            var pic = "cross.png"
            document.getElementById(id2).src = pic.replace('90x90', '225x225');
        }
        arr[id] = turn
        if (check() == 0) {
            window.alert("Player 1 Won!!")
            location.reload(true)
        }
        else if (check() == 1) {
            window.alert("Player 2 Won!!")
            location.reload(true)
        }
        if (draw()) {
            window.alert("Draw!!")
            location.reload(true)
        }
        turn = (turn + 1) % 2
    }
}