const { FormularIdInterface } = require("./FormularId")
const { FormularRecord } = require("./FormularRecord")

class FormularInterface {
    create() {
        throw new Error('⛔️ Method create is not yet implemented')
    }
}

class Formular extends FormularInterface {
    create(formularId) {
        if (formularId instanceof FormularIdInterface === false) {
            throw new TypeError('⛔️ formularId is not and instance of FormularIdInterface')
        }

        return new FormularRecord()
    }
}

class FormularFake extends FormularInterface {
    create(formularId) {
        if (formularId instanceof FormularIdInterface === false) {
            throw new TypeError('⛔️ formularId is not and instance of FormularIdInterface')
        }

        return new FormularRecord()
    }
}

module.exports = { FormularInterface, Formular, FormularFake }