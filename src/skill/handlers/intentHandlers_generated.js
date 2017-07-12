var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"FinalFantasyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "final fantasy" )
	},
	"DaggerIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "dagger" )
	},
	"SteinerIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "steiner" )
	},
	"BattleIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "battle" )
	},
	"TownIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "town" )
	},
	"DaggerLooksAtPortraitIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "dagger looks at portrait" )
	},
	"CompanionshipIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "companionship" )
	},
	"TooManyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "too many" )
	},
	"FeelingsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "feelings" )
	},
	"EndIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "end" )
	},
}