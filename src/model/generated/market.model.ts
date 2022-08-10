import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Market {
  constructor(props?: Partial<Market>) {
    Object.assign(this, props)
  }

  /**
   *  Singleton ID, equals to market address
   */
  @PrimaryColumn_()
  id!: string

  /**
   * Template address
   */
  @Column_("bytea", {nullable: false})
  template!: Uint8Array

  /**
   * block timestamp at created time
   */
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  created!: bigint
}
