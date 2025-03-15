"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes the first occurrence of a specified substring from a given text.
 *
 * @param {string} text - The original text from which to remove the substring.
 * @param {string} searchString - The substring to be removed from the text.
 * @returns {string} The text with the first occurrence of the substring removed.
 */
function removeFirstOccurrence(text, searchString) {
    return text.replace(searchString, '');
}
exports.default = removeFirstOccurrence;
