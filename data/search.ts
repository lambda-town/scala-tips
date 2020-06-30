import Fuse from 'fuse.js'
import { Entry } from 'src/types'
import entries from './entries'

export const options: Fuse.IFuseOptions<Entry> = {
  keys: [
    'name',
    'description'
  ]
}

const index = Fuse.createIndex(options.keys, entries)

export const indexString = JSON.stringify(index.toJSON())