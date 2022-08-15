const { expect } = require("expect")

const { Controller } = require('./Controller')
const { FormularFake } = require('./Formular')

test('Controller', () => {
    const controller = new Controller(new FormularFake())

    expect({
        statusCode: 201,
        headers: {
            'content-type': 'application/json',
            'location': `https://immosolve.local/rueckmeldung-angebot/1`,
        },
        body: JSON.stringify({}),
    }).toStrictEqual(controller.processEvent(1))
})