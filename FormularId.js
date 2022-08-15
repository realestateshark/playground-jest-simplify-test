class FormularIdInterface {
    int() {
        throw new Error('⛔️ Method int is not yet implemented')
    }

    uuid() {
        throw new Error('⛔️ Method uuid is not yet implemented')
    }
}

class FormularId extends FormularIdInterface {
    constructor(id = 0) {
        if (!Number.isInteger(id)) {
            throw new TypeError('Formular ID should be type of integer')
        }
        if (id < 1) {
            throw new TypeError('Formular ID must be greater than 1')
        }
        super()
        this.id = id
    }

    int() {
        return this.id
    }

    uuid() {
        return '74738ff5-5367-5958-9aee-98fffdcd1876'
    }
}

module.exports = { FormularIdInterface, FormularId }