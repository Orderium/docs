// BSD 2-Clause License
//
// Copyright (c) PaperMC
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this
//    list of conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

export interface LeafData {
    description: string;
    default?: string;
}

export interface MessageData {
    message: string;
    color?: string;
    inline?: boolean;
}

export type Data = { [key: string]: Data } | LeafData | MessageData;

interface VanillaLeafData extends LeafData {
    vanilla?: string;
}

type VanillaData = { [key: string]: Data } | VanillaLeafData | MessageData;

// replaces "default" values with "vanilla" values, removes them if no "vanilla" value is defined
export const filterVanilla = (input: VanillaData): Data | null => {
    if ('message' in input) {
        return input; // MessageData
    }

    if ('description' in input) {
        const leaf = input as LeafData;
        if ('vanilla' in leaf) {
            leaf.default = (leaf as VanillaLeafData).vanilla!;
            return leaf;
        }

        return null; // remove key
    }

    const result: { [key: string]: Data } = {};
    for (const key in input) {
        const converted = filterVanilla(input[key]);
        if (converted !== null) {
            result[key] = converted;
        }
    }

    return Object.keys(result).length > 0 ? result : null;
};
