import type { Product } from '../types'
import { ankletsPayal } from './anklets-payal'
import { banglesBracelets } from './bangles-bracelets'
import { earrings } from './earrings'
import { neckpieces } from './neckpieces'
import { rings } from './rings'
import { pendantsCharms } from './pendants-charms'
import { personalized } from './personalized'
import { religiousGifts } from './religious-gifts'

export const products: Product[] = [
	...ankletsPayal,
	...banglesBracelets,
	...earrings,
	...neckpieces,
	...rings,
	...pendantsCharms,
	...personalized,
	...religiousGifts,
]


