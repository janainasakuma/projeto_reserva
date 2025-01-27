import { Schema, model } from 'mongoose'

const HouseSchema = new Schema ({
    thumbnail: String,
    description: String,
    price: Number,
    location: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    ToJSON: {
        virtuals: true
    }
})

HouseSchema.virtual('thumbnail_url').applyGetters(function() {
    return 'http://localhost:4000/files/${this.thumbnail}'
})

export default model ('House', HouseSchema)