const { addBabelplugins, override } = require("customize-cra")
module.exports = override(
    ...addBabelplugins(
        "styled-jsx/babel"
    )
)