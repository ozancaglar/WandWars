function youWin() {
    console.log("__  __ ____   __  __   _       __ ____ _   __ __");
    console.log("\\ \\/ // __ \\ / / / /  | |     / //  _// | / // /");
    console.log(" \\  // / / // / / /   | | /| / / / / /  |/ // / ");
    console.log(" / // /_/ // /_/ /    | |/ |/ /_/ / / /|  //_/  ");
    console.log("/_/ \\____/ \\____/     |__/|__//___//_/ |_/(_)   ");
    console.log("                                                ");
}
function youLose() {
    console.log("__  __ ____   __  __   __    ____  _____  ______ __");
    console.log("\\ \\/ // __ \\ / / / /  / /   / __ \\/ ___/ / ____// /");
    console.log(" \\  // / / // / / /  / /   / / / /\\__ \\ / __/  / / ");
    console.log(" / // /_/ // /_/ /  / /___/ /_/ /___/ // /___ /_/  ");
    console.log("/_/ \\____/ \\____/  /_____/\\____//____//_____/(_)   ");
    console.log("                                                   ");
}
module.exports = {
    lose: youLose,
    win: youWin
};
