import { render } from "./render.js";
import { handleModal, handleRegisterValue } from "./modal.js";
import { insertedValues } from "./valuesData.js";

render(insertedValues)
handleModal()
handleRegisterValue(insertedValues)
