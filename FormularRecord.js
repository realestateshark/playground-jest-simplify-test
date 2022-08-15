class FormularRecordInterface {
    id() {
        throw new Error('⛔️ Method id is not yet implemented')
    }
}

class FormularRecord extends FormularRecordInterface {
    id() {
        return 1
    }
}

module.exports = { FormularRecordInterface, FormularRecord }