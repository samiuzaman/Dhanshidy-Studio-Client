import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import Swal from "sweetalert2"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import axios from "axios";
import { useState } from "react";

export default function AddProducts() {
  const [productTypeValue, setProductTypeValue] = useState("");

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const productType = productTypeValue;
    const price = form.price.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const features = form.features.value.split("\n");
    // const newFeatures = features.split("\n")
    const specific = form.specification.value.split("\n");
    const specifications = {};
    specific.forEach(spec => {
      const [key, value] = spec.split(":").map(info => info.trim());
      specifications[key] = value;
    })
    const description = form.description.value;

    // return console.log("Specifation: ", specObj);

    // image Section Start
    const image = form.picture.files[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);

    // Send image data to imgbb
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?&key=2e470730c9b8a76ce19956253b56c010`,
      formData
    );
    const imageURL = data.data.display_url;
    const totalSell = 0;
    const newProduct = {
      name,
      productType,
      category,
      price,
      quantity,
      features,
      specifications,
      description,
      imageURL,
      totalSell,
    };
    
    console.log("New Product: ", newProduct);
    axios
      .post(`${import.meta.env.VITE_API_URL}/product`, newProduct)
      .then((data) => {
        console.log("Data: ", data);
        if (data?.data?.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "New Product Added Successful!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  

  return (
    <div className="w-11/12 mx-auto my-6">
      <Card className="w-full md:w-8/12 lg:w-2/3 mx-auto p-6">
        <h2 className="text-3xl font-semibold text-green-600 text-center border-b-2 w-11/12 mx-auto pb-3">
          Add Product
        </h2>
        <CardContent>
          <form onSubmit={handleAddProduct}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="w-full lg:w-1/2 grid gap-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Product Name"
                    required
                  />
                </div>
                <div className="w-full lg:w-1/2 grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="product-type">Product Type</Label>
                  </div>

                  <Select
                    name="product-type"
                    onValueChange={(value) => setProductTypeValue(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a product category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value="mobile">Mobile</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                        <SelectItem value="stationery-items">
                          Stationery-Items
                        </SelectItem>
                        <SelectItem value="educational-supplies">
                          Educational-Supplies
                        </SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="w-full lg:w-1/2 grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="price">Price</Label>
                  </div>
                  <Input
                    name="price"
                    type="number"
                    placeholder="Price"
                    required
                  />
                </div>
                <div className="w-full lg:w-1/2 grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="quantity">Quantity</Label>
                  </div>
                  <Input
                    name="quantity"
                    type="number"
                    placeholder="Total Quantity"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="w-full grid gap-2">
                  <div className="grid items-center gap-3">
                    <Label htmlFor="picture">Picture</Label>
                    <Input name="picture" type="file" />
                  </div>
                </div>
                <div className="w-full grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    name="category"
                    type="text"
                    placeholder="category"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="w-full lg:w-1/2 grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="features">Features</Label>
                  </div>
                  <Textarea
                    name="features"
                    placeholder="Write Product features..."
                    
                  />
                </div>
                <div className="w-full lg:w-1/2 grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="specification">Specification</Label>
                  </div>
                  <Textarea
                    name="specification"
                    placeholder="Write specification..."
                    
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="description">Description :</Label>
                </div>
                <Textarea
                  name="description"
                  placeholder="Write Product description"
                  required
                />
              </div>
            </div>
            <div className="flex-col gap-2 mt-4">
              <Button type="submit" className="w-full cursor-pointer">
                Add New Product
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
