import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const ImageGalleryModel = mongoose.models.image ||  mongoose.model("image", imageSchema);

export default ImageGalleryModel; 
