import { Injectable } from '@nestjs/common';
import * as nanoid from 'nanoid';

// Your alphabet set
const alphabet = '0123456789ABCD';

// generator is a function that returns a random string
// of length 10, with alphabets from the characters in `alphabet` constant
const generator = nanoid.customAlphabet(alphabet, 10);
@Injectable()
export class UidGenerator {
    generate(): string {
        return generator();
    }
}
