'use strict'

export type Movie = {
  rating:object,
  genres:Array<string>,
  title:string,
  casts:Array<Cast>,
  collect_count:int,
  original_title:string,
  subtype:string,
  directors:Array<Director>,
  year:int,
  images:Images,
  alt:string,
  id:int
}

