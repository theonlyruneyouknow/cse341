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

const frontendRoute = (req, res) => {
    res.render("./frontend/index.html");
    // res.send("LeaAnne");
}
// invCont.buildInventory = async function (req, res, next) {
//     let nav = await utilities.getNav()
//     const buildClassificationList = await utilities.buildClassificationList()
//     const add_classification_name = "Add new inventory"
//     res.render("./inventory/add_vehicle", {
//         title: add_classification_name,
//         nav,
//         classificationList
//     })
// }


// end of #3

// #4 Export to be used with #2
module.exports = { rootRoute, blankRoute, runeRoute, frontendRoute }