'use strict'

const { Controller } = require('./Controller')
const { Formular } = require('./Formular')

const controller = new Controller(new Formular())
const result = controller.processEvent(1)

console.log(result)