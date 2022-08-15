const { FormularInterface } = require("./Formular")
const { FormularId } = require("./FormularId")

class Controller {
    constructor(formular) {
        if (formular instanceof FormularInterface === false) {
            throw new TypeError('⛔️ formular is not and instance of FormularInterface')
        }
        this.formular = formular
    }
    processEvent(requestFormularId = 0) {
        const formularId = new FormularId(requestFormularId)
        const formularRecord = this.formular.create(formularId)

        return {
            statusCode: 201,
            headers: {
                'content-type': 'application/json',
                'location': `https://immosolve.local/rueckmeldung-angebot/${formularRecord.id()}`,
            },
            body: JSON.stringify({}),
        }
    }
}

module.exports = { Controller }