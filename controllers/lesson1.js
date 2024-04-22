
const blankRoute = (req, res) => {
    res.send("Blank All Hello");
};

const runeRoute = (req, res) => {
    res.send("Hello Rune");
};

// (req, res) => {
//     res.send("Hello Rune");
// }

module.exports = { blankRoute, runeRoute }