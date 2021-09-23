export class House {
  constructor(houseData = {}) {
    this.id = houseData._id
    this.bathrooms = houseData.bathrooms
    this.levels = houseData.levels
    this.year = houseData.year
    this.price = houseData.price
    this.imgUrl = houseData.imgUrl
    this.description = houseData.description
    this.creatorId = houseData.creatorId
    this.creator = houseData.creator
  }
}
