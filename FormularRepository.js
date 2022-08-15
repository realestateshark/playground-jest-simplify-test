class FormularRepositoryInterface {
    save() {
        throw new Error('⛔️ Method save is not yet implemented')
    }
}

class FormularRepository extends FormularRepositoryInterface {

    save(record) {
        if (record instanceof FormularRecordInterface === false) {
            throw new TypeError('record should be type of FormularRecordInterface')
        }
        // Save in dynamodb
    }
}

module.exports = { FormularRepositoryInterface, FormularRepository }