import React, { Component } from 'react';

export function queryResults(query){
    switch(query){
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
                }
            ]
        default:
            return []
    }
}
