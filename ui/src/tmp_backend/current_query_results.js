import React, { Component } from 'react';

export function queryResults(query){
    switch(query){
        case "h":
        case "he":
        case "hel":
            return [
                { 
                    "word":"hello",
                    "wordclass":"greeting",
                    "definition":"greeting of salutation"
                },
                {
                    "word":"helicopter",
                    "wordclass":"noun",
                    "definition":"flying vehicle with rotating blades used to produce lift"
                },
                {
                    "word":"hell",
                    "wordclass":"noun",
                    "definition":"a place that will one day freeze over"
                },
            ]
        case "k":
        case "ki":
            return [
                {
                    "word":"kiwi bird",
                    "wordclass":"noun",
                    "definition":"a flightless bird, looks like the fruit but doesn't taste the same"
                },
                {
                    "word":"kiwi fruit",
                    "wordclass":"noun",
                    "definition":"a sweet fruit, looks like the bird but is superiour in taste"
                },
                {
                    "word":"kilt",
                    "wordclass":"noun",
                    "definition":"a scottish clothing item: the true gender neutral skirt"
                },
            ]
        case "w":
        case "wo":
            return [
                {
                    "word":"worry",
                    "wordclass":"verb",
                    "definition":"when one is concerened about the well being of a person, thing, or situation"
                },
                {
                    "word":"work, labour",
                    "wordclass":"verb",
                    "definition":"trading time/energy for money/results: ideally enjoyable"
                },
                {
                    "word":"won",
                    "wordclass":"verb",
                    "definition":"past tense of 'win', action preceeding the singinig of 'We Are The Champions'"
                },
            ]
        default:
            return []
    }
}
