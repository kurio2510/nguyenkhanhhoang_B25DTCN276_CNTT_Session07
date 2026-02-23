let players = [];
let goals = [];

const addPlayer = (name, goal) => {
    players.push(name);
    goals.push(goal);
    console.log(`=> Đã thêm ${name} thành công.`);
};

const showSquad = () => {
    if (players.length === 0) {
        console.log("Danh sách đội bóng đang trống.");
        return;
    }
    for (let i = 0; i < players.length; i++) {
        console.log(`${i + 1}. ${players[i]} - ${goals[i]} bàn`);
    }
};

const getTotalGoals = () => {
    let total = 0;
    for (let g of goals) {
        total += g;
    }
    return total;
};

const findMostGoals = (goalsArray) => {
    let max = goalsArray[0];
    for (let g of goalsArray) {
        if (g > max) {
            max = g;
        }
    }
    return max;
};

const main = () => {
    let choice;
    do {
        choice = prompt(
`--- QUẢN LÝ ĐỘI BÓNG ---
1. Nhập cầu thủ mới
2. Xem danh sách đội hình
3. Xem thành tích toàn đội
4. Tìm Vua phá lưới
0. Thoát

Người dùng chọn:`
        );

        switch (choice) {
            case "1":
                let name = prompt("Nhập tên cầu thủ:");
                let goal = Number(prompt("Nhập số bàn thắng:"));
                addPlayer(name, goal);
                break;
            case "2":
                showSquad();
                break;
            case "3":
                console.log(`=> Tổng số bàn thắng của cả đội là: ${getTotalGoals()} bàn.`);
                break;
            case "4":
                if (goals.length === 0) {
                    console.log("Chưa có dữ liệu cầu thủ.");
                } else {
                    let maxGoal = findMostGoals(goals);
                    let index = goals.indexOf(maxGoal);
                    console.log(`=> Vua phá lưới hiện tại: ${players[index]} - ${maxGoal} bàn.`);
                }
                break;
            case "0":
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (choice !== "0");
};

main();