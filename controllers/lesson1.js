// #3
const blankRoute = (req, res) => {
    res.send("Blank All Hello");
};

const runeRoute = (req, res) => {
    res.send("Hello Rune");
};

const rootRoute = (req, res) => {
    res.send("LeaAnne");
}
// end of #3

// #4 Export to be used with #2
module.exports = { rootRoute, blankRoute, runeRoute }